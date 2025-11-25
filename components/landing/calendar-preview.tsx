"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

const mockEvents = [
  { title: "Team Standup", time: "09:00", duration: 30, color: "bg-primary" },
  { title: "Hund rausbringen", time: "10:00", duration: 30, color: "bg-chart-4" },
  { title: "Marketing Meeting", time: "11:00", duration: 60, color: "bg-primary" },
  { title: "Journal schreiben", time: "12:30", duration: 15, color: "bg-chart-2" },
  { title: "Mittagspause", time: "13:00", duration: 60, color: "bg-muted" },
  { title: "Deep Work", time: "14:00", duration: 120, color: "bg-chart-3" },
]

const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

export function CalendarPreview() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-destructive/60" />
          <div className="h-3 w-3 rounded-full bg-chart-4/60" />
          <div className="h-3 w-3 rounded-full bg-chart-2/60" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">Montag, 25. November 2025</span>
        <div className="w-16" />
      </div>

      <div className="flex">
        {/* Calendar Grid */}
        <div className="flex-1 border-r border-border">
          <div className="relative grid" style={{ gridTemplateRows: `repeat(${hours.length}, 60px)` }}>
            {/* Time labels */}
            {hours.map((hour, i) => (
              <div key={hour} className="flex items-start border-b border-border/50">
                <span className="w-16 shrink-0 py-2 text-right text-xs text-muted-foreground pr-3">{hour}</span>
                <div className="flex-1 border-l border-border/50" />
              </div>
            ))}

            {/* Events */}
            <div className="absolute left-16 right-0 top-0">
              {mockEvents.map((event, i) => {
                const startHour = Number.parseInt(event.time.split(":")[0])
                const startMin = Number.parseInt(event.time.split(":")[1])
                const top = (startHour - 8) * 60 + startMin
                const height = event.duration

                return (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, scale: 0.95, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    className={`absolute left-1 right-4 rounded-md px-3 py-1.5 ${event.color}`}
                    style={{ top: `${top}px`, height: `${height - 4}px` }}
                  >
                    <p className="text-xs font-medium text-primary-foreground truncate">{event.title}</p>
                    <p className="text-xs text-primary-foreground/70">{event.time}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* AI Prompt Sidebar */}
        <div className="w-80 bg-muted/20 p-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium">KI-Assistent</h3>
            <p className="text-xs text-muted-foreground">Beschreibe deinen Tag</p>
          </div>

          {/* Prompt Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="rounded-lg border border-border bg-card p-3"
          >
            <p className="text-sm text-foreground">
              Heute um 9 Team Standup, 10 Hund raus, 11 Marketing Meeting, danach kurz Journal schreiben und dann Deep
              Work bis 16 Uhr.
            </p>
            <div className="mt-3 flex justify-end">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1,
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary"
              >
                <Send className="h-4 w-4 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Generated Events Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-4"
          >
            <p className="mb-2 text-xs font-medium text-muted-foreground">6 Events erstellt</p>
            <div className="space-y-2">
              {mockEvents.slice(0, 3).map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.6 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-md bg-card p-2 text-xs"
                >
                  <div className={`h-2 w-2 rounded-full ${event.color}`} />
                  <span className="flex-1 truncate">{event.title}</span>
                  <span className="text-muted-foreground">{event.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
