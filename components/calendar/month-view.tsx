"use client"

import { addDays, endOfMonth, format, startOfMonth, startOfWeek } from "date-fns"
import { de } from "date-fns/locale"
import type { Event } from "@/lib/types/database"
import { cn } from "@/lib/utils"

interface MonthViewProps {
  currentDate: Date
  events: Event[]
  onDateSelect: (date: Date) => void
}

export function MonthView({ currentDate, events, onDateSelect }: MonthViewProps) {
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 })

  const days: Date[] = []
  for (let i = 0; i < 42; i++) {
    days.push(addDays(gridStart, i))
  }

  const hasEventOnDay = (day: Date) => {
    return events.some((event) => {
      const d = new Date(event.start_at)
      return d.getFullYear() === day.getFullYear() && d.getMonth() === day.getMonth() && d.getDate() === day.getDate()
    })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-7 border-b border-border bg-card/60 text-xs font-medium uppercase text-muted-foreground">
        {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((label) => (
          <div key={label} className="px-2 py-2 text-center">
            {label}
          </div>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-7 text-sm">
        {days.map((day) => {
          const isCurrentMonth = day.getMonth() === monthStart.getMonth()
          const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
          const hasEvents = hasEventOnDay(day)

          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => onDateSelect(day)}
              className={cn(
                "flex flex-col border-b border-r border-border/50 px-2 py-1 text-left hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
                !isCurrentMonth && "bg-background/40 text-muted-foreground/60",
                isToday && "bg-primary/10 border-primary/60",
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn("text-xs font-medium", isToday && "text-primary")}>{format(day, "d", { locale: de })}</span>
                {hasEvents && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
