import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// POST - Accept a draft and convert it to an event
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 })
  }

  // Get the draft
  const { data: draft, error: fetchError } = await supabase
    .from("event_drafts")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single()

  if (fetchError || !draft) {
    return NextResponse.json({ error: "Entwurf nicht gefunden" }, { status: 404 })
  }

  // Create the event from the draft
  const { data: event, error: insertError } = await supabase
    .from("events")
    .insert({
      user_id: user.id,
      title: draft.title,
      description: draft.description,
      start_time: draft.start_time,
      end_time: draft.end_time,
      category: draft.category,
      color: draft.color,
    })
    .select()
    .single()

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // Delete the draft
  await supabase.from("event_drafts").delete().eq("id", id)

  return NextResponse.json({
    event,
    message: "Termin erfolgreich erstellt",
  })
}
