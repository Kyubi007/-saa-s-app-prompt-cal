import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { PLANS } from "@/lib/stripe"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata: Metadata = {
  title: "Preise | AI Prompt Planer",
  description: "Wähle deinen AI Prompt Planer Plan und starte mit 6 Tagen kostenloser Testphase.",
}

export default async function TrialPricingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const features = [
    "Unbegrenzte KI-generierte Termine",
    "Natürlichsprachige Eingabe",
    "Drag & Drop Kalender",
    "Wochenansicht & Monatsübersicht",
    "Entwurfs-Workflow",
    "Dunkelmodus",
    "Mobile optimiert",
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          {/* Close to app / start trial */}
          {user && (
            <Link
              href="/app"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-xs sm:text-sm">Zum Kalender (6 Tage kostenlos testen)</span>
              <X className="h-4 w-4" />
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Einfache, transparente Preise
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-lg">
            Du hast soeben deinen Account erstellt.
            <br className="hidden sm:block" />
            Wähle jetzt einen Plan – oder schließe dieses Fenster, um direkt in deinen Kalender zu starten.
          </p>
          <p className="mt-3 text-xs font-medium text-primary sm:text-sm">
            Hinweis: Wenn du das Fenster über das Kreuz schließt, wirst du in deinen Kalender weitergeleitet und
            deine 6-tägige kostenlose Testphase startet automatisch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:mx-auto lg:max-w-3xl">
          {/* Monthly Plan */}
          <Card className="relative border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">{PLANS.monthly.name}</CardTitle>
              <CardDescription>Flexibel, monatlich kündbar</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold">5 €</span>
                <span className="ml-1 text-muted-foreground">/ Monat</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {user ? (
                <CheckoutButton planId="monthly" className="w-full">
                  14 Tage kostenlos testen (mit Karte)
                </CheckoutButton>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/login?redirect=/pricing/trial">Jetzt starten</Link>
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Yearly Plan */}
          <Card className="relative border-primary/50 shadow-lg">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Beliebteste Wahl</Badge>
            <CardHeader>
              <CardTitle className="text-xl">{PLANS.yearly.name}</CardTitle>
              <CardDescription>{PLANS.yearly.savings}</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold">51 €</span>
                <span className="ml-1 text-muted-foreground">/ Jahr</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {user ? (
                <CheckoutButton planId="yearly" className="w-full">
                  14 Tage kostenlos testen (mit Karte)
                </CheckoutButton>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/login?redirect=/pricing/trial">Jetzt starten</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground sm:text-sm">
          Nach dem Upgrade wird automatisch das gewählte Abo gestartet. Vor Ablauf der Testphase jederzeit kündbar.
        </p>
      </main>
    </div>
  )
}
