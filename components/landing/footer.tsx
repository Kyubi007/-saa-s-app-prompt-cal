import Link from "next/link"
import { Calendar } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">AI Prompt Planer</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Preise
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
            <Link href="/impressum" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Datenschutz
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground"> 2025 AI Prompt Planer. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
