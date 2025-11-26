"use client"

import { useMemo, useRef, useEffect } from "react"
import { format, addDays, startOfWeek, isSameDay, isToday, parseISO } from "date-fns"
import { de } from "date-fns/locale"
import { motion, AnimatePresence } from "framer-motion"
import type { Event, EventDraft, Preferences } from "@/lib/types/database"
import { cn } from "@/lib/utils"

interface CalendarViewProps {
  currentDate: Date
  events: Event[]
  drafts: EventDraft[]
  preferences: Preferences
  onCreateEvent: (date: Date) => void
  onEditEvent: (event: Event) => void
  onEventDrop: (eventId: string, newStart: Date) => void
  onEventResize: (eventId: string, newDuration: number) => void
  viewMode: "day" | "week"
}

const HOUR_HEIGHT = 60
const START_HOUR = 0
const END_HOUR = 24

export function CalendarView({
  currentDate,
  events,
  drafts,
  preferences,
  onCreateEvent,
  onEditEvent,
  onEventDrop,
  onEventResize,
  viewMode,
}: CalendarViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })

  const days = useMemo(() => {
    if (viewMode === "day") {
      return [currentDate]
    }

    return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
  }, [currentDate, viewMode, weekStart])

  const hours = useMemo(() => {
    return Array.from({ length: END_HOUR - START_HOUR }, (_, i) => START_HOUR + i)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const scrollTo6am = 6 * HOUR_HEIGHT
      containerRef.current.scrollTop = scrollTo6am
    }
  }, [])

  // Calculate position and height for an event
  const getEventStyle = (startAt: string, durationMin: number) => {
    const start = parseISO(startAt)
    const startHour = start.getHours() + start.getMinutes() / 60
    const top = (startHour - START_HOUR) * HOUR_HEIGHT
    const height = (durationMin / 60) * HOUR_HEIGHT

    return {
      top: `${top}px`,
      height: `${Math.max(height, 24)}px`,
    }
  }

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(parseISO(event.start_at), day))
  }

  // Get drafts for a specific day
  const getDraftsForDay = (day: Date) => {
    return drafts.filter((draft) => draft.start_at && isSameDay(parseISO(draft.start_at), day))
  }

  // Handle click on empty slot
  const handleSlotClick = (day: Date, hour: number) => {
    const date = new Date(day)
    date.setHours(hour, 0, 0, 0)
    onCreateEvent(date)
  }

  // Current time indicator
  const now = new Date()
  const currentTimeTop = useMemo(() => {
    const currentHour = now.getHours() + now.getMinutes() / 60
    return (currentHour - START_HOUR) * HOUR_HEIGHT
  }, [now])

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Day headers */}
      <div className="flex shrink-0 border-b border-border">
        <div className="w-16 shrink-0 border-r border-border" />
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={cn(
              "flex flex-1 flex-col items-center justify-center border-r border-border py-3",
              isToday(day) && "bg-primary/5",
            )}
          >
            <span className="text-xs font-medium uppercase text-muted-foreground">
              {format(day, "EEE", { locale: de })}
            </span>
            <span
              className={cn(
                "mt-1 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                isToday(day) && "bg-primary text-primary-foreground",
              )}
            >
              {format(day, "d")}
            </span>
          </div>
        ))}
      </div>

      {/* Time grid */}
      <div ref={containerRef} className="flex flex-1 overflow-auto scrollbar-thin">
        {/* Time labels */}
        <div className="w-16 shrink-0 border-r border-border">
          {hours.map((hour) => (
            <div key={hour} className="relative border-b border-border/50" style={{ height: HOUR_HEIGHT }}>
              <span className="absolute -top-2.5 right-2 text-xs text-muted-foreground">
                {hour.toString().padStart(2, "0")}:00
              </span>
            </div>
          ))}
        </div>

        {/* Day columns */}
        {days.map((day, dayIndex) => {
          const dayEvents = getEventsForDay(day)
          const dayDrafts = getDraftsForDay(day)

          return (
            <div
              key={day.toISOString()}
              className={cn("relative flex-1 border-r border-border", isToday(day) && "bg-primary/5")}
            >
              {/* Full-height vertical divider to ensure line reaches bottom */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-border/50" />

              {/* Hour slots */}
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  style={{ height: HOUR_HEIGHT }}
                  onClick={() => handleSlotClick(day, hour)}
                />
              ))}

              {/* Current time indicator */}
              {isToday(day) && currentTimeTop >= 0 && currentTimeTop <= (END_HOUR - START_HOUR) * HOUR_HEIGHT && (
                <div
                  className="pointer-events-none absolute left-0 right-0 z-20 flex items-center"
                  style={{ top: currentTimeTop }}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-calendar-now" />
                  <div className="h-0.5 flex-1 bg-calendar-now" />
                </div>
              )}

              {/* Events */}
              <AnimatePresence>
                {dayEvents.map((event) => {
                  const style = getEventStyle(event.start_at, event.duration_min)
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={cn(
                        "absolute left-1 right-1 cursor-pointer overflow-hidden rounded-md px-2 py-1 transition-shadow hover:shadow-md",
                        event.source === "ai" ? "bg-calendar-event" : "bg-primary",
                      )}
                      style={style}
                      onClick={(e) => {
                        e.stopPropagation()
                        onEditEvent(event)
                      }}
                    >
                      <p className="truncate text-xs font-medium text-primary-foreground">{event.title}</p>
                      <p className="text-xs text-primary-foreground/70">{format(parseISO(event.start_at), "HH:mm")}</p>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* Draft Events */}
              <AnimatePresence>
                {dayDrafts
                  .filter((d) => d.type === "create" && d.start_at && d.duration_min)
                  .map((draft) => {
                    const style = getEventStyle(draft.start_at!, draft.duration_min!)
                    return (
                      <motion.div
                        key={draft.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 0.7, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-1 right-1 overflow-hidden rounded-md border-2 border-dashed border-calendar-draft bg-calendar-draft/20 px-2 py-1"
                        style={style}
                      >
                        <p className="truncate text-xs font-medium text-calendar-draft-foreground">{draft.title}</p>
                        <p className="text-xs text-muted-foreground">Draft</p>
                      </motion.div>
                    )
                  })}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
