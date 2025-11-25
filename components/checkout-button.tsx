"use client"

import type React from "react"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { createCheckoutSession } from "@/app/actions/stripe"
import type { PlanId } from "@/lib/stripe"
import { Loader2 } from "lucide-react"

interface CheckoutButtonProps extends ButtonProps {
  planId: PlanId
  children: React.ReactNode
}

export function CheckoutButton({ planId, children, ...props }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await createCheckoutSession(planId)
    } catch (error) {
      console.error("Checkout error:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isLoading} {...props}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Wird geladen...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
