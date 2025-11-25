import "server-only"
import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Subscription plans
export const PLANS = {
  monthly: {
    id: "monthly",
    name: "Monatlich",
    price: 500, // 5.00 EUR in cents
    interval: "month" as const,
    description: "5 € / Monat",
  },
  yearly: {
    id: "yearly",
    name: "Jährlich",
    price: 5100, // 51.00 EUR in cents (15% discount)
    interval: "year" as const,
    description: "51 € / Jahr (15% Rabatt)",
    savings: "Spare 9 €",
  },
} as const

export type PlanId = keyof typeof PLANS
