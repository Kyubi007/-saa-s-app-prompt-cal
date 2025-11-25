"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Wie funktioniert der kostenlose Testmonat?",
    answer:
      "Du kannst PromptCal 30 Tage lang kostenlos und unverbindlich testen. Es ist keine Kreditkarte erforderlich. Nach Ablauf der Testphase kannst du dich für ein Abo entscheiden oder dein Konto einfach ruhen lassen.",
  },
  {
    question: "Kann ich jederzeit kündigen?",
    answer:
      "Ja, du kannst dein Abo jederzeit kündigen. Es gibt keine Mindestlaufzeit. Nach der Kündigung hast du bis zum Ende der bezahlten Periode weiterhin Zugang.",
  },
  {
    question: "Wie funktioniert die KI-Planung?",
    answer:
      "Du beschreibst deinen Tag in natürlicher Sprache, z.B. 'Morgen um 10 Meeting, danach Mittagessen, nachmittags Deep Work'. Die KI analysiert deine Eingabe und erstellt automatisch Kalender-Events mit sinnvollen Zeiten und Dauern.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer:
      "Deine Daten werden sicher und DSGVO-konform in europäischen Rechenzentren gespeichert. Wir verkaufen oder teilen deine Daten niemals mit Dritten. Du kannst deine Daten jederzeit exportieren oder löschen.",
  },
  {
    question: "Kann ich auch ohne KI planen?",
    answer:
      "Absolut! PromptCal ist ein vollwertiger Kalender. Du kannst Events jederzeit manuell erstellen, per Drag & Drop verschieben, die Dauer ändern und alle Details bearbeiten.",
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer:
      "Wir akzeptieren alle gängigen Kreditkarten (Visa, Mastercard, American Express) sowie SEPA-Lastschrift über unseren Zahlungspartner Stripe.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Häufig gestellte Fragen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Noch Fragen? Wir haben Antworten.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
