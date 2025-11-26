import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import { aiEventArraySchema } from "@/lib/schemas/ai-schema"
import { startOfWeek, endOfWeek, addWeeks, format, parseISO } from "date-fns"
import { de } from "date-fns/locale"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 })
    }

    // Check subscription status
    const { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

    const now = new Date()
    const isTrialing =
      subscription?.status === "trialing" ||
      (subscription?.trial_end ? new Date(subscription.trial_end) > now : false)
    const isActive = subscription?.status === "active" || isTrialing

		if (!isActive) {
			return NextResponse.json({ error: "Kein aktives Abonnement" }, { status: 403 })
		}

    const { prompt, timezone = "Europe/Berlin" } = await request.json()

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json({ error: "Prompt ist erforderlich" }, { status: 400 })
    }

    // Get user preferences
    const { data: preferences } = await supabase.from("preferences").select("*").eq("user_id", user.id).single()

    const workStart = preferences?.default_work_start || "09:00"
    const workEnd = preferences?.default_work_end || "17:00"

    // Get existing events for context
    const weekStart = startOfWeek(now, { weekStartsOn: 1 })
    const weekEnd = endOfWeek(addWeeks(now, 2), { weekStartsOn: 1 })

    const { data: existingEvents } = await supabase
      .from("events")
      .select("title, start_at, duration_min")
      .eq("user_id", user.id)
      .gte("start_at", weekStart.toISOString())
      .lte("start_at", weekEnd.toISOString())
      .order("start_at", { ascending: true })

    const existingEventsContext =
      existingEvents
        ?.map((e) => {
          const startDate = parseISO(e.start_at)
          const endDate = new Date(startDate.getTime() + e.duration_min * 60000)
          return `- ${e.title}: ${format(startDate, "EEEE d. MMM HH:mm", { locale: de })} - ${format(endDate, "HH:mm", { locale: de })}`
        })
        .join("\n") || "Keine bestehenden Termine"

    const systemPrompt = `Du bist ein intelligenter Kalender-Assistent für PromptCal. Deine Aufgabe ist es, natürlichsprachige Eingaben in strukturierte Kalendereinträge umzuwandeln.

AKTUELLES DATUM UND ZEIT: ${format(now, "EEEE, d. MMMM yyyy, HH:mm 'Uhr'", { locale: de })}
ZEITZONE: ${timezone}
ARBEITSZEITEN: ${workStart} - ${workEnd}

BESTEHENDE TERMINE (zur Vermeidung von Konflikten):
${existingEventsContext}

REGELN:
1. Interpretiere relative Zeitangaben (morgen, nächste Woche, Montag) korrekt basierend auf dem aktuellen Datum
2. Wenn keine Uhrzeit angegeben, verwende sinnvolle Standardzeiten innerhalb der Arbeitszeiten
3. Wenn keine Dauer angegeben, schätze basierend auf dem Termintyp:
   - Meeting/Besprechung: 60 Minuten
   - Kurzer Call: 30 Minuten
   - Workshop/Training: 120 Minuten
   - Mittagessen: 60 Minuten
   - Fokuszeit/Deep Work: 120 Minuten
4. Vermeide Überschneidungen mit bestehenden Terminen wenn möglich
5. Wähle passende Kategorien: work, personal, health, social, other
6. Setze sinnvolle Farben basierend auf der Kategorie:
   - work: #3b82f6 (blau)
   - personal: #8b5cf6 (lila)
   - health: #10b981 (grün)
   - social: #f59e0b (orange)
   - other: #6b7280 (grau)
7. Alle Zeiten müssen als vollständige ISO 8601 Strings zurückgegeben werden

Antworte NUR mit den strukturierten Kalenderdaten im angeforderten Format.`

    const { object: events } = await generateObject({
      model: openai("gpt-4o", {
        apiKey: process.env.OPENAI_API_KEY,
      }),
      schema: aiEventArraySchema,
      system: systemPrompt,
      prompt: prompt,
    })

    // Insert as drafts
    const drafts = events.events.map((event) => ({
      user_id: user.id,
      title: event.title,
      description: event.description || null,
      start_at: event.start_time,
      duration_min: event.duration_min || 60,
      category: event.category,
      color: event.color,
      original_prompt: prompt,
      type: "create" as const,
      confidence: 1,
      raw_action: {},
    }))

    const { data: insertedDrafts, error: insertError } = await supabase.from("event_drafts").insert(drafts).select()

    if (insertError) {
      console.error("Error inserting drafts:", insertError)
      return NextResponse.json({ error: "Fehler beim Speichern der Entwürfe" }, { status: 500 })
    }

    return NextResponse.json({
      drafts: insertedDrafts,
      message: `${insertedDrafts.length} Termin${insertedDrafts.length === 1 ? "" : "e"} als Entwurf erstellt`,
    })
  } catch (error) {
    console.error("AI Planning Error:", error)
    return NextResponse.json({ error: "Fehler bei der KI-Verarbeitung" }, { status: 500 })
  }
}
