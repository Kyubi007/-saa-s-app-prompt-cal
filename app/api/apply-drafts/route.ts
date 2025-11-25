import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { draftIds } = await request.json()

  if (!draftIds || !Array.isArray(draftIds)) {
    return NextResponse.json({ error: "Invalid draft IDs" }, { status: 400 })
  }

  // Get all drafts
  const { data: drafts, error: fetchError } = await supabase
    .from("event_drafts")
    .select("*")
    .in("id", draftIds)
    .eq("user_id", user.id)

  if (fetchError || !drafts) {
    return NextResponse.json({ error: "Failed to fetch drafts" }, { status: 500 })
  }

  const results = []

  for (const draft of drafts) {
    try {
      if (draft.type === "create") {
        // Create new event
        const { data, error } = await supabase
          .from("events")
          .insert({
            user_id: user.id,
            title: draft.title,
            start_at: draft.start_at,
            duration_min: draft.duration_min,
            notes: draft.notes,
            source: "ai",
            status: "confirmed",
            confidence: draft.confidence,
          })
          .select()
          .single()

        if (error) throw error
        results.push({ draft_id: draft.id, event: data, action: "created" })
      } else if (draft.type === "update" && draft.target_event_id) {
        // Update existing event
        const updateData: Record<string, unknown> = {}
        if (draft.title) updateData.title = draft.title
        if (draft.start_at) updateData.start_at = draft.start_at
        if (draft.duration_min) updateData.duration_min = draft.duration_min
        if (draft.notes) updateData.notes = draft.notes

        const { data, error } = await supabase
          .from("events")
          .update(updateData)
          .eq("id", draft.target_event_id)
          .eq("user_id", user.id)
          .select()
          .single()

        if (error) throw error
        results.push({ draft_id: draft.id, event: data, action: "updated" })
      } else if (draft.type === "delete" && draft.target_event_id) {
        // Delete event
        const { error } = await supabase.from("events").delete().eq("id", draft.target_event_id).eq("user_id", user.id)

        if (error) throw error
        results.push({ draft_id: draft.id, action: "deleted" })
      }

      // Delete the draft after applying
      await supabase.from("event_drafts").delete().eq("id", draft.id).eq("user_id", user.id)
    } catch (error) {
      console.error(`Error applying draft ${draft.id}:`, error)
    }
  }

  return NextResponse.json({ results })
}
