"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createCustomerPortalSession } from "@/app/actions/stripe"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import Link from "next/link"

interface SettingsActionsProps {
  hasSubscription: boolean
}

export function SettingsActions({ hasSubscription }: SettingsActionsProps) {
  const [isPortalLoading, setIsPortalLoading] = useState(false)
  const [isLogoutLoading, setIsLogoutLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleManageSubscription = async () => {
    setIsPortalLoading(true)
    try {
      await createCustomerPortalSession()
    } catch (error) {
      console.error("Portal error:", error)
      setIsPortalLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLogoutLoading(true)
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <div className="flex flex-wrap gap-3 pt-4">
      {hasSubscription ? (
        <Button onClick={handleManageSubscription} disabled={isPortalLoading} variant="outline">
          {isPortalLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird geladen...
            </>
          ) : (
            "Abonnement verwalten"
          )}
        </Button>
      ) : (
        <Button asChild>
          <Link href="/pricing">Plan wählen</Link>
        </Button>
      )}
      <Button onClick={handleLogout} disabled={isLogoutLoading} variant="ghost">
        {isLogoutLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Abmelden...
          </>
        ) : (
          "Abmelden"
        )}
      </Button>
    </div>
  )
}
