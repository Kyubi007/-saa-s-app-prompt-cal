import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// POST - Accept all drafts and convert them to events
export async function POST() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 })
  }

  // Get all drafts
  const { data: drafts, error: fetchError } = await supabase.from("event_drafts").select("*").eq("user_id", user.id)

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 })
  }

  if (!drafts || drafts.length === 0) {
    return NextResponse.json({ message: "Keine Entwürfe vorhanden", count: 0 })
  }

  // Create events from drafts
  const eventsToInsert = drafts.map((draft) => ({
    user_id: user.id,
    title: draft.title,
    description: draft.description,
    start_time: draft.start_time,
    end_time: draft.end_time,
    category: draft.category,
    color: draft.color,
  }))

  const { data: events, error: insertError } = await supabase.from("events").insert(eventsToInsert).select()

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // Delete all drafts
  await supabase.from("event_drafts").delete().eq("user_id", user.id)

  return NextResponse.json({
    events,
    count: events.length,
    message: `${events.length} Termin${events.length === 1 ? "" : "e"} erfolgreich erstellt`,
  })
}
