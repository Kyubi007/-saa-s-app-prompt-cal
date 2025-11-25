"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Subscription } from "@/lib/types/database"
import { Check, Loader2, Sparkles } from "lucide-react"

interface PaywallModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  subscription: Subscription | null
}

export function PaywallModal({ open, onOpenChange, subscription }: PaywallModalProps) {
  const [isLoading, setIsLoading] = useState<"monthly" | "yearly" | null>(null)

  const handleSubscribe = async (plan: "monthly" | "yearly") => {
    setIsLoading(plan)

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      })

      const { url, error } = await res.json()

      if (error) throw new Error(error)
      if (url) window.location.href = url
    } catch (error: any) {
      toast.error(error.message || "Fehler beim Erstellen der Checkout-Session")
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl">Upgrade auf PromptCal Pro</DialogTitle>
          <DialogDescription>
            Dein Trial ist abgelaufen. Upgrade jetzt, um alle Features weiterhin zu nutzen.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Monthly */}
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl border border-border p-4">
            <h3 className="font-semibold">Monatlich</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">5 €</span>
              <span className="text-muted-foreground"> / Monat</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                Alle Features
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                Jederzeit kündbar
              </li>
            </ul>
            <Button
              className="mt-4 w-full bg-transparent"
              variant="outline"
              onClick={() => handleSubscribe("monthly")}
              disabled={isLoading !== null}
            >
              {isLoading === "monthly" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Monatlich abonnieren"}
            </Button>
          </motion.div>

          {/* Yearly */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-xl border-2 border-primary p-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Spare 15%
              </span>
            </div>
            <h3 className="font-semibold">Jährlich</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">51 €</span>
              <span className="text-muted-foreground"> / Jahr</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                Alle Features
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />9 € gespart
              </li>
            </ul>
            <Button className="mt-4 w-full" onClick={() => handleSubscribe("yearly")} disabled={isLoading !== null}>
              {isLoading === "yearly" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Jährlich abonnieren"}
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
