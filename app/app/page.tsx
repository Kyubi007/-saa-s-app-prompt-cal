import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { CalendarApp } from "@/components/calendar/calendar-app"

export default async function AppPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // Check preferences exist
  const { data: preferences } = await supabase.from("preferences").select("*").eq("user_id", user.id).single()

  if (!preferences) {
    redirect("/onboarding")
  }

  // Get subscription status
  const { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

  // Check if trial/subscription is active
  const isActive =
    subscription &&
    (subscription.status === "active" ||
      subscription.status === "trialing" ||
      (subscription.trial_end && new Date(subscription.trial_end) > new Date()))

  return <CalendarApp user={user} preferences={preferences} subscription={subscription} isActive={isActive ?? false} />
}
