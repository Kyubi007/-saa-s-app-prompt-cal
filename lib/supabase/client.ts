import { createBrowserClient } from "@supabase/ssr"

let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export function createClient() {
  if (supabaseClient) {
    return supabaseClient
  }

  // Check if we already have a client stored on window (survives HMR)
  if (typeof window !== "undefined" && (window as any).__supabaseClient) {
    supabaseClient = (window as any).__supabaseClient
    return supabaseClient
  }

  supabaseClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      isSingleton: true,
    },
  )

  // Store on window for HMR persistence
  if (typeof window !== "undefined") {
    ;(window as any).__supabaseClient = supabaseClient
  }

  return supabaseClient
}
