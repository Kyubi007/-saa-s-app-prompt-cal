import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { SettingsActions } from "@/components/settings-actions"

export default async function SettingsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/login")
  }

  const { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

  const now = new Date()
  const isTrialing =
    subscription?.status === "trialing" || (subscription?.trial_end && new Date(subscription.trial_end) > now)
  const isActive = subscription?.status === "active" || isTrialing

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Einstellungen</h1>
          <p className="text-muted-foreground">Verwalte dein Konto und Abonnement</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Konto</CardTitle>
            <CardDescription>Deine Kontoinformationen</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">E-Mail</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Abonnement
              {isActive ? (
                <Badge variant="default">{isTrialing ? "Testphase" : "Aktiv"}</Badge>
              ) : (
                <Badge variant="secondary">Inaktiv</Badge>
              )}
            </CardTitle>
            <CardDescription>Verwalte dein PromptCal Abonnement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subscription ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Plan</p>
                    <p className="font-medium capitalize">{subscription.plan_id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium capitalize">{subscription.status}</p>
                  </div>
                  {isTrialing && subscription.trial_end && (
                    <div>
                      <p className="text-sm text-muted-foreground">Testphase endet</p>
                      <p className="font-medium">
                        {format(new Date(subscription.trial_end), "d. MMMM yyyy", { locale: de })}
                      </p>
                    </div>
                  )}
                  {subscription.current_period_end && (
                    <div>
                      <p className="text-sm text-muted-foreground">Nächste Abrechnung</p>
                      <p className="font-medium">
                        {format(new Date(subscription.current_period_end), "d. MMMM yyyy", { locale: de })}
                      </p>
                    </div>
                  )}
                </div>
                <SettingsActions hasSubscription={true} />
              </>
            ) : (
              <>
                <p className="text-muted-foreground">Du hast noch kein aktives Abonnement.</p>
                <SettingsActions hasSubscription={false} />
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
