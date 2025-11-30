import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const GOOGLE_CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar"

export async function GET(request: Request) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    const { origin, pathname, search } = new URL(request.url)
    const loginUrl = new URL("/login", origin)
    loginUrl.searchParams.set("redirect", `${pathname}${search}`)
    return NextResponse.redirect(loginUrl.toString())
  }

  const clientId = process.env.GOOGLE_CALENDAR_CLIENT_ID
  const callbackBase = process.env.NEXT_PUBLIC_APP_URL
  const { origin } = new URL(request.url)
  const redirectUri = `${callbackBase || origin}/api/integrations/google/calendar/callback`

  if (!clientId) {
    console.error("GOOGLE_CALENDAR_CLIENT_ID is not set")
    return NextResponse.json({ error: "Google Calendar nicht konfiguriert" }, { status: 500 })
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
    scope: GOOGLE_CALENDAR_SCOPE,
    include_granted_scopes: "true",
  })

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`

  return NextResponse.redirect(authUrl)
}
