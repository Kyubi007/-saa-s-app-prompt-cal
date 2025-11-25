import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { PLANS } from "@/lib/stripe"
import { CheckoutButton } from "@/components/checkout-button"

export const metadata: Metadata = {
  title: "Preise | PromptCal",
  description: "Wähle deinen PromptCal Plan - 30 Tage kostenlos testen",
}

export default async function PricingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const features = [
    "Unbegrenzte KI-generierte Termine",
    "Natürlichsprachige Eingabe",
    "Drag & Drop Kalender",
    "Wochenansicht",
    "Entwurfs-Workflow",
    "Dunkelmodus",
    "Mobile optimiert",
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Einfache, transparente Preise</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Starte mit 30 Tagen kostenlosem Testen. Keine Kreditkarte erforderlich zum Start.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Monthly Plan */}
          <Card className="relative border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">{PLANS.monthly.name}</CardTitle>
              <CardDescription>Flexibel, monatlich kündbar</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold">5 €</span>
                <span className="text-muted-foreground ml-1">/ Monat</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {user ? (
                <CheckoutButton planId="monthly" className="w-full">
                  30 Tage kostenlos testen
                </CheckoutButton>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/login?redirect=/pricing">Jetzt starten</Link>
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
                <span className="text-muted-foreground ml-1">/ Jahr</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {user ? (
                <CheckoutButton planId="yearly" className="w-full">
                  30 Tage kostenlos testen
                </CheckoutButton>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/login?redirect=/pricing">Jetzt starten</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Nach der Testphase wird automatisch das gewählte Abo gestartet.
          <br />
          Jederzeit vor Ablauf kündbar.
        </p>
      </main>
    </div>
  )
}
