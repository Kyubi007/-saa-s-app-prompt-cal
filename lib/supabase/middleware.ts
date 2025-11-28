import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Public routes that don't require authentication
  // Wichtig: Stripe-Webhook darf nicht umgeleitet werden, sonst schlägt die Webhook-Zustellung fehl.
  const publicRoutes = ["/", "/login", "/auth", "/api/webhooks", "/api/stripe/webhook", "/pricing"]
  const isPublicRoute = publicRoutes.some(
    (route) => request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(`${route}/`),
  )

  // Redirect unauthenticated users to login (except public routes)
  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users from login to app
  if (user && request.nextUrl.pathname === "/login") {
    const url = request.nextUrl.clone()
    url.pathname = "/app"
    return NextResponse.redirect(url)
  }

  // Subscription gating for app routes
  // Wichtig: Wenn noch keine Subscription existiert, erlauben wir den Zugriff auf /app,
  // damit die 6-tägige Testphase in den Server Actions angelegt werden kann.
  if (user && request.nextUrl.pathname.startsWith("/app")) {
    const { data: subscription, error } = await supabase
      .from("subscriptions")
      .select("status, trial_end")
      .eq("user_id", user.id)
      .maybeSingle()

    // Kein Eintrag gefunden -> Nutzer darf /app öffnen, Trial wird später angelegt
    if (!subscription || error) {
      return supabaseResponse
    }

    const now = new Date()
    const isTrialing =
      subscription.status === "trialing" ||
      (subscription.trial_end ? new Date(subscription.trial_end) > now : false)
    const isActive = subscription.status === "active" || isTrialing

    if (!isActive) {
      const url = request.nextUrl.clone()
      url.pathname = "/pricing"
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
