"use client"

import { useState, useCallback, useEffect } from "react"
import useSWR from "swr"
import { startOfWeek, endOfWeek, addWeeks, subWeeks } from "date-fns"
import type { User } from "@supabase/supabase-js"
import type { Preferences, Subscription, Event, EventDraft } from "@/lib/types/database"
import { createClient } from "@/lib/supabase/client"
import { AppHeader } from "./app-header"
import { CalendarView } from "./calendar-view"
import { AISidebar } from "./ai-sidebar"
import { EventModal } from "./event-modal"
import { CommandBar } from "./command-bar"
import { PaywallModal } from "./paywall-modal"

interface CalendarAppProps {
  user: User
  preferences: Preferences
  subscription: Subscription | null
  isActive: boolean
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}

export function CalendarApp({ user, preferences, subscription, isActive }: CalendarAppProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [isCommandBarOpen, setIsCommandBarOpen] = useState(false)
  const [showPaywall, setShowPaywall] = useState(!isActive)

  const supabase = createClient()

  // Calculate week bounds
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 })

  // Fetch events for current week
  const { data: events, mutate: mutateEvents } = useSWR<Event[]>(
    `/api/events?start=${weekStart.toISOString()}&end=${weekEnd.toISOString()}`,
    fetcher,
    { refreshInterval: 30000 },
  )

  // Fetch drafts
  const { data: drafts, mutate: mutateDrafts } = useSWR<EventDraft[]>("/api/drafts", fetcher)

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsCommandBarOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Navigation
  const goToPreviousWeek = useCallback(() => {
    setCurrentDate((d) => subWeeks(d, 1))
  }, [])

  const goToNextWeek = useCallback(() => {
    setCurrentDate((d) => addWeeks(d, 1))
  }, [])

  const goToToday = useCallback(() => {
    setCurrentDate(new Date())
  }, [])

  // Event handlers
  const handleCreateEvent = useCallback(
    (date: Date) => {
      if (!isActive) {
        setShowPaywall(true)
        return
      }

      setSelectedDate(date)
      setEditingEvent(null)
      setIsEventModalOpen(true)
    },
    [isActive],
  )

  const handleEditEvent = useCallback((event: Event) => {
    if (!isActive) {
      setShowPaywall(true)
      return
    }

    setEditingEvent(event)
    setSelectedDate(null)
    setIsEventModalOpen(true)
  }, [isActive])

  const handleEventSaved = useCallback(() => {
    mutateEvents()
    setIsEventModalOpen(false)
    setEditingEvent(null)
    setSelectedDate(null)
  }, [mutateEvents])

  const handleDraftsUpdated = useCallback(() => {
    mutateDrafts()
    mutateEvents()
  }, [mutateDrafts, mutateEvents])

  // Drag and drop event update
  const handleEventDrop = useCallback(
    async (eventId: string, newStart: Date) => {
      if (!isActive) {
        setShowPaywall(true)
        return
      }

      try {
        const res = await fetch(`/api/events/${eventId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ start_at: newStart.toISOString() }),
        })

        if (!res.ok) throw new Error("Failed to update")
        mutateEvents()
      } catch (error) {
        console.error("Error updating event:", error)
      }
    },
    [isActive, mutateEvents],
  )

  // Resize event
  const handleEventResize = useCallback(
    async (eventId: string, newDuration: number) => {
      if (!isActive) {
        setShowPaywall(true)
        return
      }

      try {
        const res = await fetch(`/api/events/${eventId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ duration_min: newDuration }),
        })

        if (!res.ok) throw new Error("Failed to update")
        mutateEvents()
      } catch (error) {
        console.error("Error resizing event:", error)
      }
    },
    [isActive, mutateEvents],
  )

  const handleShowPaywall = useCallback(() => {
    setShowPaywall(true)
  }, [])

  return (
    <div className="flex h-screen flex-col bg-background">
      <AppHeader
        user={user}
        currentDate={currentDate}
        subscription={subscription}
        onPreviousWeek={goToPreviousWeek}
        onNextWeek={goToNextWeek}
        onToday={goToToday}
        onOpenCommandBar={() => setIsCommandBarOpen(true)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Calendar */}
        <div className="flex-1 overflow-hidden">
          <CalendarView
            currentDate={currentDate}
            events={events || []}
            drafts={drafts || []}
            preferences={preferences}
            onCreateEvent={handleCreateEvent}
            onEditEvent={handleEditEvent}
            onEventDrop={handleEventDrop}
            onEventResize={handleEventResize}
          />
        </div>

        {/* AI Sidebar */}
        <AISidebar
          preferences={preferences}
          drafts={drafts || []}
          onDraftsUpdated={handleDraftsUpdated}
          isActive={isActive}
          onShowPaywall={handleShowPaywall}
        />
      </div>

      {/* Event Modal */}
      <EventModal
        open={isEventModalOpen}
        onOpenChange={setIsEventModalOpen}
        event={editingEvent}
        selectedDate={selectedDate}
        onSaved={handleEventSaved}
      />

      {/* Command Bar */}
      <CommandBar
        open={isCommandBarOpen}
        onOpenChange={setIsCommandBarOpen}
        onCreateEvent={handleCreateEvent}
        isActive={isActive}
        onShowPaywall={handleShowPaywall}
      />

      {/* Paywall */}
      <PaywallModal open={showPaywall} onOpenChange={setShowPaywall} subscription={subscription} />
    </div>
  )
}
