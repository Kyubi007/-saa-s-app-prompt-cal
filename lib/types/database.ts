export interface Event {
  id: string
  user_id: string
  title: string
  start_at: string
  duration_min: number
  notes: string | null
  source: "ai" | "manual"
  status: "confirmed" | "tentative" | "cancelled"
  confidence: number | null
  created_at: string
  updated_at: string
}

export interface EventDraft {
  id: string
  user_id: string
  type: "create" | "update" | "delete"
  target_event_id: string | null
  title: string | null
  start_at: string | null
  duration_min: number | null
  notes: string | null
  confidence: number
  raw_action: Record<string, unknown>
  created_at: string
}

export interface Preferences {
  user_id: string
  work_start: string
  work_end: string
  default_durations: Record<string, number>
  timezone: string
  created_at: string
  updated_at: string
}

export interface Subscription {
  user_id: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  status: "trialing" | "active" | "past_due" | "canceled" | "incomplete" | "incomplete_expired" | "unpaid"
  current_period_end: string | null
  plan: "monthly" | "yearly" | null
  trial_end: string | null
  created_at: string
  updated_at: string
}

// Calendar event for UI (with computed end time)
export interface CalendarEvent extends Event {
  end_at: string
}

// AI action types
export type AIActionType = "create" | "update" | "delete"

export interface AIAction {
  type: AIActionType
  event_id?: string
  title?: string
  start?: string
  duration_min?: number
  notes?: string
  confidence: number
}

export interface AIResponse {
  actions: AIAction[]
  summary?: string
}
