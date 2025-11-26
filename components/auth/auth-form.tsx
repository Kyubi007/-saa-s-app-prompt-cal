"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"
import { Loader2, Mail, Lock, ArrowRight } from "lucide-react"

export function AuthForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isSignUp = searchParams.get("signup") === "true"

  const [mode, setMode] = useState<"login" | "signup">(isSignUp ? "signup" : "login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo:
              process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/onboarding`,
          },
        })

        if (error) throw error

        if (data.user?.identities?.length === 0) {
          toast.error("Diese E-Mail ist bereits registriert")
        } else {
          toast.success("Bestätigungsmail gesendet! Bitte prüfe dein Postfach.")
          router.push("/login/check-email")
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        toast.success("Willkommen zurück!")
        router.push("/app")
        router.refresh()
      }
    } catch (error: any) {
      console.error("Auth error:", error)
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Ungültige Anmeldedaten")
      } else if (error.message.includes("Email not confirmed")) {
        toast.error("Bitte bestätige zuerst deine E-Mail")
      } else {
        toast.error(error.message || "Ein Fehler ist aufgetreten")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-border/50 shadow-lg">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">{mode === "login" ? "Willkommen zurück" : "Account erstellen"}</CardTitle>
        <CardDescription>
          {mode === "login" ? "Melde dich an, um fortzufahren" : "Starte jetzt mit 14 Tagen kostenlos"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="name@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Passwort</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
                minLength={6}
                disabled={isLoading}
              />
            </div>
          </div>

          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                {mode === "login" ? "Anmelden" : "Kostenlos registrieren"}
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-sm text-muted-foreground"
            >
              {mode === "login" ? (
                <>
                  Noch kein Account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="font-medium text-primary hover:underline"
                  >
                    Jetzt registrieren
                  </button>
                </>
              ) : (
                <>
                  Bereits registriert?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="font-medium text-primary hover:underline"
                  >
                    Anmelden
                  </button>
                </>
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}
