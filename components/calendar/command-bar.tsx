"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Calendar, Clock, Plus } from "lucide-react"

interface CommandBarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateEvent: (date: Date) => void
  isActive: boolean
  onShowPaywall: () => void
}

export function CommandBar({ open, onOpenChange, onCreateEvent, isActive, onShowPaywall }: CommandBarProps) {
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!open) setSearch("")
  }, [open])

  const handleQuickCreate = () => {
    if (!isActive) {
      onOpenChange(false)
      onShowPaywall()
      return
    }

    // Parse the search input for time
    const now = new Date()
    const timeMatch = search.match(/(\d{1,2}):?(\d{2})?/)

    if (timeMatch) {
      const hours = Number.parseInt(timeMatch[1])
      const minutes = Number.parseInt(timeMatch[2] || "0")
      now.setHours(hours, minutes, 0, 0)
    }

    onCreateEvent(now)
    onOpenChange(false)
  }

  const quickOptions = [
    { label: "Jetzt", time: new Date() },
    {
      label: "In 30 Minuten",
      time: new Date(Date.now() + 30 * 60 * 1000),
    },
    {
      label: "In 1 Stunde",
      time: new Date(Date.now() + 60 * 60 * 1000),
    },
  ]

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Event erstellen oder Zeit eingeben..." value={search} onValueChange={setSearch} />
      <CommandList>
        <CommandEmpty>
          <button
            onClick={handleQuickCreate}
            className="flex w-full items-center gap-2 rounded-md p-2 text-left hover:bg-accent"
          >
            <Plus className="h-4 w-4" />
            <span>"{search}" als Event erstellen</span>
          </button>
        </CommandEmpty>

        <CommandGroup heading="Schnell erstellen">
          {quickOptions.map((option) => (
            <CommandItem
              key={option.label}
              onSelect={() => {
                if (!isActive) {
                  onOpenChange(false)
                  onShowPaywall()
                  return
                }
                onCreateEvent(option.time)
                onOpenChange(false)
              }}
            >
              <Clock className="mr-2 h-4 w-4" />
              <span>{option.label}</span>
              <span className="ml-auto text-xs text-muted-foreground">{format(option.time, "HH:mm")}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Aktionen">
          <CommandItem
            onSelect={() => {
              if (!isActive) {
                onOpenChange(false)
                onShowPaywall()
                return
              }
              onCreateEvent(new Date())
              onOpenChange(false)
            }}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Neues Event erstellen</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
