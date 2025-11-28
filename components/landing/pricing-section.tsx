"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Monatlich",
    price: "5",
    period: "/ Monat",
    description: "Flexibel und jederzeit kündbar",
    features: ["Unbegrenzte KI-Planungen", "Drag & Drop Kalender", "Quick-Add (Cmd+K)", "Dark Mode", "Datenexport"],
    cta: "Kostenlos starten",
    highlighted: false,
  },
  {
    name: "Jährlich",
    price: "51",
    period: "/ Jahr",
    description: "Spare 15% gegenüber monatlich",
    badge: "Beliebt",
    features: [
      "Alles aus Monatlich",
      "15% Rabatt",
      "Prioritäts-Support",
      "Früher Zugang zu neuen Features",
      "Team-Features (bald)",
    ],
    cta: "Jetzt sparen",
    highlighted: true,
  },
]

const allFeatures = [
	"6 Tage kostenlos testen (ohne Kreditkarte)",
	"14 Tage Trial beim Upgrade mit Karte",
	"Jederzeit kündbar",
	"DSGVO-konform",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Einfache, faire Preise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Starte kostenlos. Entscheide später.
          </motion.p>
        </div>

        {/* Trial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-lg rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-2xl font-bold text-primary">6 Tage kostenlos testen</p>
          <p className="mt-2 text-muted-foreground">
            Starte ohne Kreditkarte. Beim Upgrade auf einen kostenpflichtigen Plan erhältst du zusätzlich 14 Tage Trial über Stripe.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted ? "border-primary bg-card shadow-xl shadow-primary/10" : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price} €</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/login?signup=true" className="block">
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All plans include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm font-medium text-muted-foreground">Alle Pläne beinhalten:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {allFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
