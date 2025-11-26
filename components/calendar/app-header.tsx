"use client"

import { format } from "date-fns"
import { de } from "date-fns/locale"
import type { User } from "@supabase/supabase-js"
import type { Subscription } from "@/lib/types/database"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Calendar, ChevronLeft, ChevronRight, Command, LogOut, Settings, CreditCard } from "lucide-react"

interface AppHeaderProps {
  user: User
  currentDate: Date
  subscription: Subscription | null
  onPreviousWeek: () => void
  onNextWeek: () => void
  onToday: () => void
  onOpenCommandBar: () => void
}

export function AppHeader({
  user,
  currentDate,
  subscription,
  onPreviousWeek,
  onNextWeek,
  onToday,
  onOpenCommandBar,
}: AppHeaderProps) {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const handleManageSubscription = async () => {
    const res = await fetch("/api/stripe/portal", { method: "POST" })
    const { url } = await res.json()
    if (url) window.location.href = url
  }

  const initials = user.email?.slice(0, 2).toUpperCase() || "U"

  const trialDaysLeft = subscription?.trial_end
    ? Math.max(0, Math.ceil((new Date(subscription.trial_end).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-4">
      {/* Left: Logo + Navigation */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Calendar className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">AI Prompt Planer</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onPreviousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm" onClick={onToday}>
            Heute
          </Button>

          <Button variant="ghost" size="icon" onClick={onNextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <span className="ml-2 text-sm font-medium">{format(currentDate, "MMMM yyyy", { locale: de })}</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Trial indicator */}
        {subscription?.status === "trialing" && trialDaysLeft > 0 && (
          <div className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary md:block">
            {trialDaysLeft} Tage Trial übrig
          </div>
        )}

        {/* Quick Add */}
        <Button variant="outline" size="sm" className="hidden gap-2 md:flex bg-transparent" onClick={onOpenCommandBar}>
          <Command className="h-3 w-3" />
          <span>K</span>
        </Button>

        <ThemeToggle />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-medium">Mein Account</span>
                <span className="text-xs font-normal text-muted-foreground">{user.email}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/app/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              Einstellungen
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleManageSubscription}>
              <CreditCard className="mr-2 h-4 w-4" />
              Abo verwalten
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
