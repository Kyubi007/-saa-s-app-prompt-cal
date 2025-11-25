import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { OnboardingStepper } from "@/components/onboarding/onboarding-stepper"

export default async function OnboardingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // Check if user already has preferences
  const { data: preferences } = await supabase.from("preferences").select("*").eq("user_id", user.id).single()

  if (preferences) {
    redirect("/app")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <OnboardingStepper userId={user.id} />
    </div>
  )
}
