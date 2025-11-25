"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { format, parseISO } from "date-fns"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Event } from "@/lib/types/database"
import { Loader2, Trash2 } from "lucide-react"

interface EventModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: Event | null
  selectedDate: Date | null
  onSaved: () => void
}

export function EventModal({ open, onOpenChange, event, selectedDate, onSaved }: EventModalProps) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState(60)
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const isEditing = !!event

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      if (event) {
        const startDate = parseISO(event.start_at)
        setTitle(event.title)
        setDate(format(startDate, "yyyy-MM-dd"))
        setTime(format(startDate, "HH:mm"))
        setDuration(event.duration_min)
        setNotes(event.notes || "")
      } else if (selectedDate) {
        setTitle("")
        setDate(format(selectedDate, "yyyy-MM-dd"))
        setTime(format(selectedDate, "HH:mm"))
        setDuration(60)
        setNotes("")
      }
    }
  }, [open, event, selectedDate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const startAt = new Date(`${date}T${time}`)

      if (isEditing) {
        const res = await fetch(`/api/events/${event.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            start_at: startAt.toISOString(),
            duration_min: duration,
            notes: notes || null,
          }),
        })

        if (!res.ok) throw new Error("Failed to update")
        toast.success("Event aktualisiert")
      } else {
        const res = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            start_at: startAt.toISOString(),
            duration_min: duration,
            notes: notes || null,
            source: "manual",
          }),
        })

        if (!res.ok) throw new Error("Failed to create")
        toast.success("Event erstellt")
      }

      onSaved()
    } catch (error) {
      toast.error("Fehler beim Speichern")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!event) return

    setIsDeleting(true)

    try {
      const res = await fetch(`/api/events/${event.id}`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Failed to delete")

      toast.success("Event gelöscht")
      onSaved()
    } catch (error) {
      toast.error("Fehler beim Löschen")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Event bearbeiten" : "Neues Event"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Titel</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="z.B. Team Meeting"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Datum</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Uhrzeit</Label>
              <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Dauer (Minuten)</Label>
            <Input
              id="duration"
              type="number"
              min={5}
              max={480}
              step={5}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notizen (optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Zusätzliche Informationen..."
              rows={3}
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            {isEditing && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
                className="mr-auto"
              >
                {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              </Button>
            )}
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Abbrechen
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : isEditing ? "Speichern" : "Erstellen"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
