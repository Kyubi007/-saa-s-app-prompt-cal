import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Prompt Planer - Dein KI-Kalender",
  description:
    "Schreib deinen Tag, der Kalender plant sich selbst. KI-gestützte Kalenderplanung für produktive Menschen.",
  generator: "v0.app",
  keywords: ["Kalender", "KI", "Planung", "Produktivität", "AI Calendar", "AI Prompt Planer"],
  authors: [{ name: "AI Prompt Planer" }],
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png" },
      { url: "/favicon_io/favicon-16x16.png" },
      { url: "/favicon_io/favicon.ico" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    title: "AI Prompt Planer - Dein KI-Kalender",
    description: "Schreib deinen Tag, der Kalender plant sich selbst.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
