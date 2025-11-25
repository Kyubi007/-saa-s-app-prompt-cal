"use client"

import { motion } from "framer-motion"
import { Calendar, Sparkles, Clock, Zap, MousePointer2, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "KI-gestützte Planung",
    description:
      "Beschreibe deinen Tag in natürlicher Sprache. Die KI versteht Kontext und erstellt intelligente Zeitblöcke.",
  },
  {
    icon: Calendar,
    title: "Intuitive Kalenderansicht",
    description: "Moderne Wochen- und Tagesansicht mit Drag & Drop. Verschiebe und ändere Events mit einem Klick.",
  },
  {
    icon: Clock,
    title: "Smarte Zeitfindung",
    description: "Vage Angaben wie 'nachmittags' werden intelligent in konkrete Zeiten umgewandelt.",
  },
  {
    icon: MousePointer2,
    title: "Manuelle Kontrolle",
    description: "Erstelle, bearbeite und lösche Events auch manuell. Du behältst immer die volle Kontrolle.",
  },
  {
    icon: Zap,
    title: "Blitzschnell",
    description: "Quick-Add mit Cmd+K. Plane deinen ganzen Tag in Sekunden statt Minuten.",
  },
  {
    icon: Shield,
    title: "Deine Daten gehören dir",
    description: "DSGVO-konform. Deine Kalenderdaten werden sicher in Europa gespeichert.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Alles was du brauchst
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Ein Kalender, der mitdenkt. Einfach, schnell, intelligent.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
