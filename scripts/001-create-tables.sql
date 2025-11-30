-- PromptCal Database Schema
-- Run this script to create all required tables

-- Events table - stores all calendar events (manual and AI-generated)
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  start_at TIMESTAMPTZ NOT NULL,
  duration_min INTEGER NOT NULL CHECK (duration_min > 0),
  notes TEXT,
  source TEXT DEFAULT 'manual' CHECK (source IN ('ai', 'manual')),
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'tentative', 'cancelled')),
  confidence FLOAT CHECK (confidence >= 0 AND confidence <= 1),
  -- Optionale Zuordnung zu externen Kalendern (z.B. Google Calendar)
  external_source TEXT CHECK (external_source IN ('google')),
  external_event_id TEXT,
  external_calendar_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Event drafts table - stores AI-generated draft actions before user approval
CREATE TABLE event_drafts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('create', 'update', 'delete')),
  target_event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  title TEXT,
  start_at TIMESTAMPTZ,
  duration_min INTEGER CHECK (duration_min IS NULL OR duration_min > 0),
  notes TEXT,
  confidence FLOAT NOT NULL CHECK (confidence >= 0 AND confidence <= 1),
  raw_action JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User preferences table - stores onboarding settings
CREATE TABLE preferences (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  work_start TIME DEFAULT '08:00',
  work_end TIME DEFAULT '18:00',
  default_durations JSONB DEFAULT '{"meeting": 60, "call": 30, "focus": 90, "break": 15, "journal": 10}'::jsonb,
  timezone TEXT DEFAULT 'Europe/Berlin',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions table - synced with Stripe via webhooks
CREATE TABLE subscriptions (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT DEFAULT 'trialing' CHECK (status IN ('trialing', 'active', 'past_due', 'canceled', 'incomplete', 'incomplete_expired', 'unpaid')),
  current_period_end TIMESTAMPTZ,
  plan TEXT CHECK (plan IN ('monthly', 'yearly')),
  trial_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Calendar connections table - stores OAuth tokens and metadata for external calendars (e.g. Google Calendar)
CREATE TABLE calendar_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL CHECK (provider IN ('google')),
  external_calendar_id TEXT NOT NULL,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, provider)
);

-- Enable Row Level Security on all tables
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_connections ENABLE ROW LEVEL SECURITY;

-- RLS Policies for events
CREATE POLICY "Users can view their own events" 
  ON events FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own events" 
  ON events FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own events" 
  ON events FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own events" 
  ON events FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS Policies for event_drafts
CREATE POLICY "Users can view their own drafts" 
  ON event_drafts FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own drafts" 
  ON event_drafts FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own drafts" 
  ON event_drafts FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own drafts" 
  ON event_drafts FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS Policies for preferences
CREATE POLICY "Users can view their own preferences" 
  ON preferences FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own preferences" 
  ON preferences FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences" 
  ON preferences FOR UPDATE 
  USING (auth.uid() = user_id);

-- RLS Policies for subscriptions
CREATE POLICY "Users can view their own subscription" 
  ON subscriptions FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscription" 
  ON subscriptions FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscription" 
  ON subscriptions FOR UPDATE 
  USING (auth.uid() = user_id);

-- RLS Policies for calendar_connections
CREATE POLICY "Users can view their own calendar connections" 
  ON calendar_connections FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own calendar connections" 
  ON calendar_connections FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own calendar connections" 
  ON calendar_connections FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX idx_events_user_id ON events(user_id);
CREATE INDEX idx_events_start_at ON events(start_at);
CREATE INDEX idx_events_user_start ON events(user_id, start_at);
CREATE INDEX idx_event_drafts_user_id ON event_drafts(user_id);
CREATE INDEX idx_subscriptions_stripe_customer ON subscriptions(stripe_customer_id);
CREATE INDEX idx_subscriptions_stripe_subscription ON subscriptions(stripe_subscription_id);
CREATE INDEX idx_calendar_connections_user_provider ON calendar_connections(user_id, provider);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_preferences_updated_at
  BEFORE UPDATE ON preferences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
