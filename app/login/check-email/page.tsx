import Link from "next/link"
import { Calendar, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold tracking-tight">PromptCal</span>
        </Link>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Prüfe dein Postfach</CardTitle>
            <CardDescription>
              Wir haben dir eine Bestätigungsmail gesendet. Klicke auf den Link in der E-Mail, um dein Konto zu
              aktivieren.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Keine E-Mail erhalten? Prüfe deinen Spam-Ordner oder{" "}
              <Link href="/login" className="text-primary hover:underline">
                versuche es erneut
              </Link>
              .
            </p>

            <Link href="/login" className="block">
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Anmeldung
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
