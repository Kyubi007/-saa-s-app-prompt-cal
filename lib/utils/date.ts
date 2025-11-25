import {
  format,
  parseISO,
  addMinutes,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isWithinInterval,
  differenceInMinutes,
  setHours,
  setMinutes,
} from "date-fns"
import { de } from "date-fns/locale"
import { toZonedTime, fromZonedTime } from "date-fns-tz"

export const DEFAULT_TIMEZONE = "Europe/Berlin"

// Format date for display
export function formatDate(date: Date | string, formatStr = "PPP") {
  const d = typeof date === "string" ? parseISO(date) : date
  return format(d, formatStr, { locale: de })
}

// Format time for display
export function formatTime(date: Date | string) {
  const d = typeof date === "string" ? parseISO(date) : date
  return format(d, "HH:mm", { locale: de })
}

// Get end time from start and duration
export function getEndTime(start: Date | string, durationMin: number) {
  const startDate = typeof start === "string" ? parseISO(start) : start
  return addMinutes(startDate, durationMin)
}

// Check if two events overlap
export function eventsOverlap(
  event1: { start_at: string; duration_min: number },
  event2: { start_at: string; duration_min: number },
): boolean {
  const start1 = parseISO(event1.start_at)
  const end1 = addMinutes(start1, event1.duration_min)
  const start2 = parseISO(event2.start_at)
  const end2 = addMinutes(start2, event2.duration_min)

  return start1 < end2 && start2 < end1
}

// Get events for a specific day
export function getEventsForDay<T extends { start_at: string }>(events: T[], date: Date): T[] {
  return events.filter((event) => isSameDay(parseISO(event.start_at), date))
}

// Get week boundaries
export function getWeekBounds(date: Date) {
  return {
    start: startOfWeek(date, { weekStartsOn: 1 }),
    end: endOfWeek(date, { weekStartsOn: 1 }),
  }
}

// Parse time string (HH:mm) to minutes from midnight
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

// Convert minutes from midnight to time string
export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
}

// Set time on a date
export function setTimeOnDate(date: Date, time: string): Date {
  const [hours, minutes] = time.split(":").map(Number)
  return setMinutes(setHours(date, hours), minutes)
}

// Convert to timezone
export function toTimezone(date: Date, timezone: string = DEFAULT_TIMEZONE) {
  return toZonedTime(date, timezone)
}

// Convert from timezone to UTC
export function fromTimezone(date: Date, timezone: string = DEFAULT_TIMEZONE) {
  return fromZonedTime(date, timezone)
}

export {
  parseISO,
  addMinutes,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isWithinInterval,
  differenceInMinutes,
  format,
}
