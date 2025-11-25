"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase/client"
import { Calendar, Clock, Settings, ArrowRight, ArrowLeft, Loader2, Check } from "lucide-react"

interface OnboardingStepperProps {
  userId: string
}

const steps = [
  {
    id: 1,
    title: "Arbeitszeiten",
    description: "Wann beginnst und beendest du deinen Arbeitstag?",
    icon: Clock,
  },
  {
    id: 2,
    title: "Standard-Dauern",
    description: "Wie lange dauern deine typischen Aktivitäten?",
    icon: Settings,
  },
  {
    id: 3,
    title: "Zeitzone",
    description: "In welcher Zeitzone befindest du dich?",
    icon: Calendar,
  },
]

const defaultDurations = {
  meeting: 60,
  call: 30,
  focus: 90,
  break: 15,
  journal: 10,
}

const durationLabels: Record<string, string> = {
  meeting: "Meeting",
  call: "Telefonat",
  focus: "Deep Work",
  break: "Pause",
  journal: "Journal",
}

export function OnboardingStepper({ userId }: OnboardingStepperProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [workStart, setWorkStart] = useState("08:00")
  const [workEnd, setWorkEnd] = useState("18:00")
  const [durations, setDurations] = useState(defaultDurations)
  const [timezone, setTimezone] = useState("Europe/Berlin")

  const supabase = createClient()

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    setIsLoading(true)

    try {
      const { error } = await supabase.from("preferences").insert({
        user_id: userId,
        work_start: workStart,
        work_end: workEnd,
        default_durations: durations,
        timezone,
      })

      if (error) throw error

      // Also create initial subscription record (trial)
      const trialEnd = new Date()
      trialEnd.setDate(trialEnd.getDate() + 30)

      await supabase.from("subscriptions").insert({
        user_id: userId,
        status: "trialing",
        trial_end: trialEnd.toISOString(),
      })

      toast.success("Einrichtung abgeschlossen!")
      router.push("/app")
      router.refresh()
    } catch (error: any) {
      console.error("Onboarding error:", error)
      toast.error("Fehler beim Speichern der Einstellungen")
    } finally {
      setIsLoading(false)
    }
  }

  const updateDuration = (key: string, value: number) => {
    setDurations((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="w-full max-w-lg">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                  currentStep >= step.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground"
                }`}
                animate={{
                  scale: currentStep === step.id ? 1.1 : 1,
                }}
              >
                {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </motion.div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-2 h-0.5 w-16 transition-colors md:w-24 ${
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Step 1: Work Hours */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="work-start">Arbeitsbeginn</Label>
                    <Input
                      id="work-start"
                      type="time"
                      value={workStart}
                      onChange={(e) => setWorkStart(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="work-end">Arbeitsende</Label>
                    <Input
                      id="work-end"
                      type="time"
                      value={workEnd}
                      onChange={(e) => setWorkEnd(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Die KI wird Events nur innerhalb dieser Zeiten planen.
                  </p>
                </div>
              )}

              {/* Step 2: Default Durations */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  {Object.entries(durations).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>{durationLabels[key]}</Label>
                        <span className="text-sm font-medium">{value} min</span>
                      </div>
                      <Slider
                        value={[value]}
                        onValueChange={([v]) => updateDuration(key, v)}
                        min={5}
                        max={180}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground">
                    Diese Werte werden als Standard verwendet, wenn du keine Dauer angibst.
                  </p>
                </div>
              )}

              {/* Step 3: Timezone */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Zeitzone</Label>
                    <select
                      id="timezone"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="Europe/Berlin">Berlin (MEZ/MESZ)</option>
                      <option value="Europe/Vienna">Wien (MEZ/MESZ)</option>
                      <option value="Europe/Zurich">Zürich (MEZ/MESZ)</option>
                      <option value="Europe/London">London (GMT/BST)</option>
                      <option value="America/New_York">New York (EST/EDT)</option>
                      <option value="America/Los_Angeles">Los Angeles (PST/PDT)</option>
                      <option value="Asia/Tokyo">Tokyo (JST)</option>
                    </select>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="text-sm font-medium">Fast geschafft!</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nach diesem Schritt kannst du direkt mit PromptCal loslegen. Dein 30-Tage-Trial startet jetzt.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Button variant="ghost" onClick={handleBack} disabled={currentStep === 1 || isLoading} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück
            </Button>

            {currentStep < steps.length ? (
              <Button onClick={handleNext} className="gap-2">
                Weiter
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleComplete} disabled={isLoading} className="gap-2">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Loslegen
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
