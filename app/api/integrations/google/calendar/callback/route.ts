import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token"

interface GoogleTokenResponse {
  access_token: string
  refresh_token?: string
  expires_in: number
  scope?: string
  token_type: string
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const error = url.searchParams.get("error")

  const callbackBase = process.env.NEXT_PUBLIC_APP_URL
  const { origin } = url
  const redirectUri = `${callbackBase || origin}/api/integrations/google/calendar/callback`

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    const loginUrl = new URL("/login", origin)
    return NextResponse.redirect(loginUrl.toString())
  }

  if (error || !code) {
    console.error("Google Calendar OAuth error:", error)
    const settingsUrl = new URL("/app/settings", callbackBase || origin)
    settingsUrl.searchParams.set("calendar", "google-error")
    return NextResponse.redirect(settingsUrl.toString())
  }

  const clientId = process.env.GOOGLE_CALENDAR_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CALENDAR_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    console.error("Google Calendar client ID/secret not set")
    return NextResponse.json({ error: "Google Calendar nicht konfiguriert" }, { status: 500 })
  }

  const body = new URLSearchParams({
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  })

  let tokenResponse: GoogleTokenResponse

  try {
    const res = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error("Google token exchange failed:", text)
      throw new Error("Token exchange failed")
    }

    tokenResponse = (await res.json()) as GoogleTokenResponse
  } catch (err) {
    console.error("Error exchanging Google OAuth code:", err)
    const settingsUrl = new URL("/app/settings", callbackBase || origin)
    settingsUrl.searchParams.set("calendar", "google-error")
    return NextResponse.redirect(settingsUrl.toString())
  }

  const expiresAt = new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString()

  // For now we only support the primary calendar
  const externalCalendarId = "primary"

  const { error: upsertError } = await supabase.from("calendar_connections").upsert(
    {
      user_id: user.id,
      provider: "google",
      external_calendar_id: externalCalendarId,
      access_token: tokenResponse.access_token,
      refresh_token: tokenResponse.refresh_token ?? "",
      expires_at: expiresAt,
    },
    {
      onConflict: "user_id,provider",
    },
  )

  if (upsertError) {
    console.error("Error saving Google calendar connection:", upsertError)
    const settingsUrl = new URL("/app/settings", callbackBase || origin)
    settingsUrl.searchParams.set("calendar", "google-error")
    return NextResponse.redirect(settingsUrl.toString())
  }

  const settingsUrl = new URL("/app/settings", callbackBase || origin)
  settingsUrl.searchParams.set("calendar", "google-connected")
  return NextResponse.redirect(settingsUrl.toString())
}
