"use server"

import { stripe, PLANS, type PlanId } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function createCheckoutSession(planId: PlanId) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error("Nicht autorisiert")
  }

  const plan = PLANS[planId]
  if (!plan) {
    throw new Error("Ungültiger Plan")
  }

  // Check for existing Stripe customer
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single()

  let customerId = subscription?.stripe_customer_id

  // Create Stripe customer if not exists
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: {
        supabase_user_id: user.id,
      },
    })
    customerId = customer.id
  }

  // Create checkout session with subscription mode
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || "http://localhost:3000"

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: `PromptCal ${plan.name}`,
            description: plan.description,
          },
          unit_amount: plan.price,
          recurring: {
            interval: plan.interval,
          },
        },
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_period_days: 14,
      metadata: {
        supabase_user_id: user.id,
        plan_id: planId,
      },
    },
    success_url: `${baseUrl}/app?checkout=success`,
    cancel_url: `${baseUrl}/pricing?checkout=cancelled`,
    metadata: {
      supabase_user_id: user.id,
      plan_id: planId,
    },
  })

  if (session.url) {
    redirect(session.url)
  }

  throw new Error("Checkout Session konnte nicht erstellt werden")
}

export async function createCustomerPortalSession() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    throw new Error("Nicht autorisiert")
  }

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single()

  if (!subscription?.stripe_customer_id) {
    throw new Error("Kein Abonnement gefunden")
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: subscription.stripe_customer_id,
    return_url: `${
      process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || "http://localhost:3000"
    }/app/settings`,
  })

  redirect(session.url)
}

export async function getSubscriptionStatus() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return null
  }

  // Try to load existing subscription
  let { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).maybeSingle()

  // If no subscription exists yet, create a 6-day app-side trial without requiring Stripe
  if (!subscription) {
    const trialEnd = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString()
    const { data: created } = await supabase
      .from("subscriptions")
      .insert({
        user_id: user.id,
        status: "trialing",
        plan: "monthly",
        trial_end: trialEnd,
        current_period_end: trialEnd,
      })
      .select("*")
      .single()

    subscription = created || null
  }

  if (!subscription) {
    return { status: "none", isActive: false }
  }

  const now = new Date()
  const isTrialing =
    subscription.status === "trialing" || (subscription.trial_end && new Date(subscription.trial_end) > now)
  const isActive = subscription.status === "active" || isTrialing

  return {
    status: subscription.status,
    isActive,
    isTrialing,
    trialEnd: subscription.trial_end,
    currentPeriodEnd: subscription.current_period_end,
    planId: subscription.plan_id ?? subscription.plan,
  }
}
