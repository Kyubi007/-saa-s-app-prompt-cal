import { Suspense } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { AuthForm } from "@/components/auth/auth-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight">PromptCal</span>
        </Link>

        {/* Auth Form */}
        <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-muted" />}>
          <AuthForm />
        </Suspense>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Mit der Anmeldung akzeptierst du unsere{" "}
          <Link href="/datenschutz" className="underline hover:text-foreground">
            Datenschutzrichtlinie
          </Link>{" "}
          und{" "}
          <Link href="/agb" className="underline hover:text-foreground">
            AGB
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
