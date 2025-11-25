"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { EventDraft, Preferences } from "@/lib/types/database"
import { Sparkles, Send, Loader2, Check, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, parseISO } from "date-fns"
import { de } from "date-fns/locale"

interface AISidebarProps {
  preferences: Preferences
  drafts: EventDraft[]
  onDraftsUpdated: () => void
  isActive: boolean
  onShowPaywall: () => void
}

export function AISidebar({ preferences, drafts, onDraftsUpdated, isActive, onShowPaywall }: AISidebarProps) {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isApplying, setIsApplying] = useState(false)

  const handleSubmit = async () => {
    if (!prompt.trim()) return
    setIsLoading(true)

    try {
      const res = await fetch("/api/ai/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, timezone: preferences.timezone }),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || "Failed to generate plan")
      }

      const data = await res.json()
      toast.success(`${data.drafts?.length || 0} Events erstellt`)
      setPrompt("")
      onDraftsUpdated()
    } catch (error: any) {
      toast.error(error.message || "Fehler beim Generieren")
    } finally {
      setIsLoading(false)
    }
  }

  const handleApplyAll = async () => {
    if (drafts.length === 0) return

    setIsApplying(true)

    try {
      const res = await fetch("/api/apply-drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftIds: drafts.map((d) => d.id) }),
      })

      if (!res.ok) throw new Error("Failed to apply drafts")

      toast.success("Alle Drafts angewendet")
      onDraftsUpdated()
    } catch (error) {
      toast.error("Fehler beim Anwenden")
    } finally {
      setIsApplying(false)
    }
  }

  const handleApplySingle = async (draftId: string) => {
    try {
      const res = await fetch("/api/apply-drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftIds: [draftId] }),
      })

      if (!res.ok) throw new Error("Failed to apply draft")

      toast.success("Draft angewendet")
      onDraftsUpdated()
    } catch (error) {
      toast.error("Fehler beim Anwenden")
    }
  }

  const handleDiscardAll = async () => {
    try {
      const res = await fetch("/api/discard-drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftIds: drafts.map((d) => d.id) }),
      })

      if (!res.ok) throw new Error("Failed to discard drafts")

      toast.success("Alle Drafts verworfen")
      onDraftsUpdated()
    } catch (error) {
      toast.error("Fehler beim Verwerfen")
    }
  }

  return (
    <div className="flex w-80 shrink-0 flex-col border-l border-border bg-card">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border p-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">KI-Assistent</h2>
      </div>

      {/* Prompt Input */}
      <div className="border-b border-border p-4">
        <Textarea
          placeholder="Beschreibe deinen Tag... z.B. 'Morgen um 10 Team Meeting, danach Mittagessen, nachmittags Deep Work'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-24 resize-none"
          disabled={isLoading}
        />
        <Button className="mt-3 w-full gap-2" onClick={handleSubmit} disabled={isLoading || !prompt.trim()}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {isLoading ? "Generiere..." : "Plan erstellen"}
        </Button>
      </div>

      {/* Drafts List */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {drafts.length > 0 ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{drafts.length} Vorschläge</span>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={handleDiscardAll}>
                    <Trash2 className="h-3 w-3" />
                    Alle verwerfen
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <AnimatePresence>
                  {drafts.map((draft, i) => (
                    <motion.div
                      key={draft.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: i * 0.05 }}
                      className="group rounded-lg border border-border bg-background p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "rounded px-1.5 py-0.5 text-xs font-medium",
                                draft.type === "create" && "bg-chart-2/20 text-chart-2",
                                draft.type === "update" && "bg-chart-4/20 text-chart-4",
                                draft.type === "delete" && "bg-destructive/20 text-destructive",
                              )}
                            >
                              {draft.type === "create" ? "Neu" : draft.type === "update" ? "Update" : "Löschen"}
                            </span>
                            <span className="text-xs text-muted-foreground">{Math.round(draft.confidence * 100)}%</span>
                          </div>
                          <p className="mt-1 truncate text-sm font-medium">{draft.title || "Event"}</p>
                          {draft.start_at && (
                            <p className="text-xs text-muted-foreground">
                              {format(parseISO(draft.start_at), "EEE, d. MMM HH:mm", {
                                locale: de,
                              })}
                              {draft.duration_min && ` · ${draft.duration_min} min`}
                            </p>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={() => handleApplySingle(draft.id)}
                        >
                          <Check className="h-4 w-4 text-chart-2" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <Button className="mt-4 w-full gap-2" onClick={handleApplyAll} disabled={isApplying}>
                {isApplying ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                Alle anwenden
              </Button>
            </>
          ) : (
            <div className="py-8 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-muted-foreground/50" />
              <p className="mt-2 text-sm text-muted-foreground">
                Beschreibe deinen Tag oben, um Vorschläge zu erhalten.
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
