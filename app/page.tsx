import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-16 items-center justify-between gap-2 px-3 sm:px-4">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary/10">
              <Image
                src="/favicon_io/favicon-32x32.png"
                alt="AI Prompt Planer Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="max-w-[140px] truncate text-base font-semibold tracking-tight sm:max-w-none sm:text-xl">
              AI Prompt Planer
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Preise
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm" className="px-3 text-xs sm:text-sm">
                Anmelden
              </Button>
            </Link>
            <Link href="/login?signup=true">
              <Button size="sm" className="px-3 text-xs sm:text-sm">
                Kostenlos starten
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
