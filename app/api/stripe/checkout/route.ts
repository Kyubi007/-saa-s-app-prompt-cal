import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { stripe, PLANS } from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 })
    }

    const { plan } = await request.json()

    if (plan !== "monthly" && plan !== "yearly") {
      return NextResponse.json({ error: "Ungültiger Plan" }, { status: 400 })
    }

    const selectedPlan = PLANS[plan]

    if (!selectedPlan?.priceId) {
      return NextResponse.json({ error: "Stripe Price ID nicht konfiguriert" }, { status: 500 })
    }

    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("stripe_customer_id")
      .eq("user_id", user.id)
      .single()

    let customerId = subscription?.stripe_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email ?? undefined,
        metadata: {
          supabase_user_id: user.id,
        },
      })

      customerId = customer.id
    }

    // Basis-URL dynamisch aus der aktuellen Request bestimmen, damit
    // Redirects sowohl lokal (http://localhost:3000) als auch in Production
    // (z.B. https://aipromptplaner.com) korrekt funktionieren.
    const origin = new URL(request.url).origin
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || origin

    const successUrl = `${baseUrl}/app?checkout=success`
    const cancelUrl = `${baseUrl}/pricing?checkout=cancelled`

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          supabase_user_id: user.id,
          plan_id: plan,
        },
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        supabase_user_id: user.id,
        plan_id: plan,
      },
    })

    if (!session.url) {
      return NextResponse.json({ error: "Checkout Session konnte nicht erstellt werden" }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe Checkout Error:", error)
    return NextResponse.json({ error: "Fehler beim Erstellen der Checkout-Session" }, { status: 500 })
  }
}
