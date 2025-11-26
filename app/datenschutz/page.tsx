import type React from "react"

export default function DatenschutzPage(): React.JSX.Element {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-invert prose-sm sm:prose-base">
      <h1>Datenschutzerklärung</h1>

      <h2>Allgemeine Hinweise</h2>
      <p>
        Der Schutz deiner persönlichen Daten ist mir wichtig. Personenbezogene Daten sind alle Daten, mit denen du
        persönlich identifiziert werden kannst. Nachfolgend informiere ich dich darüber, welche Daten auf dieser Website
        und im Rahmen der Nutzung der angebotenen Dienste verarbeitet werden und zu welchen Zwecken dies geschieht.
        Diese Datenschutzerklärung gilt für die Website und den damit verbundenen Dienst AiPromptPlaner.
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        Philipp Eichert
        <br />
        Konrad-Adenauer-Straße
        <br />
        35745 Herborn
      </p>

      <h2>Welche Daten werden verarbeitet</h2>
      <h3>Zugriffsdaten und Logfiles</h3>
      <p>
        Beim Aufrufen dieser Website werden durch den Hoster automatisch Informationen in sogenannten Server-Logfiles
        erhoben und gespeichert. Dies können sein:
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Diese Daten sind in der Regel nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit
        anderen Datenquellen wird nicht vorgenommen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO, da ein berechtigtes Interesse an der technischen Bereitstellung der Website und der Sicherheit der
        Systeme besteht.
      </p>

      <h3>Nutzerkonto und Vertragsdaten</h3>
      <p>
        Wenn du ein Nutzerkonto anlegst und den Dienst AiPromptPlaner verwendest, verarbeite ich die von dir angegebenen
        Daten, z. B.:
      </p>
      <ul>
        <li>Name oder Pseudonym</li>
        <li>E-Mail-Adresse (sobald vorhanden)</li>
        <li>Login-Daten</li>
        <li>Abrechnungs- und Vertragsdaten (z. B. Informationen zu deinem Abo, Laufzeit, Zahlungsstatus)</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen und zur Erfüllung des Vertrages gemäß
        Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h3>Kalender- und Inhaltsdaten</h3>
      <p>
        Im Rahmen der Nutzung von AiPromptPlaner können von dir eingegebene Texte, Prompts und Kalenderinformationen
        verarbeitet werden. Dazu gehören insbesondere:
      </p>
      <ul>
        <li>Freitext-Prompts, die Tagesaufgaben und Termine beschreiben</li>
        <li>Kalendereinträge, die im System angelegt, geändert oder gelöscht werden</li>
        <li>Meta-Informationen zu Terminen (Datum, Zeit, Dauer, Titel, Notizen)</li>
      </ul>
      <p>
        Diese Daten werden verarbeitet, um dir die Funktionen des Dienstes zur Verfügung zu stellen, insbesondere die
        Erstellung, Anpassung und Verwaltung von Kalendereinträgen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung).
      </p>

      <h3>Zahlungsdaten</h3>
      <p>
        Für die Abwicklung von Zahlungen (z. B. Monats- oder Jahresabonnement) kann ein externer Zahlungsdienstleister
        (z. B. Stripe) eingesetzt werden. Dabei werden Zahlungsdaten (z. B. Name, E-Mail-Adresse, Zahlungsart, Teile der
        Kreditkarteninformationen, Transaktionsnummer) verarbeitet. Die Verarbeitung dieser Daten erfolgt zur Abwicklung
        des Vertragsverhältnisses gemäß Art. 6 Abs. 1 lit. b DSGVO. Detaillierte Informationen zur Datenverarbeitung
        durch den Zahlungsdienstleister findest du in deren eigener Datenschutzerklärung.
      </p>

      <h3>Verknüpfung externer Kalender</h3>
      <p>
        Soweit du deinen Account mit externen Kalenderdiensten wie Google Kalender oder Apple Kalender verbindest,
        können je nach deiner Zustimmung Kalenderdaten mit diesen Anbietern ausgetauscht werden (z. B. Import und Export
        von Terminen). Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Art
        und Umfang der Datenverarbeitung durch den jeweiligen Anbieter ergeben sich aus deren Datenschutzerklärungen.
      </p>

      <h3>Einsatz von Auftragsverarbeitern und Drittanbietern</h3>
      <p>
        Zur Bereitstellung der Website und des Dienstes können Dienstleister als Auftragsverarbeiter im Sinne von
        Art. 28 DSGVO eingesetzt werden, zum Beispiel für Hosting, E-Mail-Versand, Zahlungsabwicklung oder Analyse und
        Fehlerüberwachung. Mit diesen Dienstleistern werden entsprechende Verträge zur Auftragsverarbeitung
        geschlossen. Falls Dienste in Drittländern (z. B. USA) eingesetzt werden, erfolgt dies nur im Rahmen der
        gesetzlichen Vorgaben, insbesondere unter Berücksichtigung geeigneter Garantien nach Art. 44 ff. DSGVO.
      </p>

      <h3>OpenAI und KI-Funktionen</h3>
      <p>
        Für die KI-Funktionen von AiPromptPlaner kann eine Schnittstelle zu einem KI-Anbieter wie OpenAI oder einem
        ähnlichen Dienst genutzt werden. Dafür werden die von dir eingegebenen Texte (Prompts) sowie gegebenenfalls
        Kontextdaten (z. B. bestehende Termine und Metadaten) an diesen Dienst übermittelt, um passende Vorschläge und
        Planungen zu generieren. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung) und, soweit erforderlich, deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die
        rechtlichen Hinweise und Datenschutzbestimmungen des jeweiligen KI-Anbieters sind zu beachten.
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist, oder
        wie es gesetzliche Aufbewahrungsfristen vorsehen. Nach Wegfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen
        werden die Daten gelöscht oder anonymisiert.
      </p>

      <h2>Rechtsgrundlagen der Verarbeitung</h2>
      <p>Sofern in dieser Datenschutzerklärung nicht anders angegeben, gelten folgende Rechtsgrundlagen:</p>
      <ul>
        <li>Art. 6 Abs. 1 lit. a DSGVO: Einwilligung</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO: Vertragserfüllung und vorvertragliche Maßnahmen</li>
        <li>Art. 6 Abs. 1 lit. c DSGVO: Erfüllung einer rechtlichen Verpflichtung</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO: Wahrung berechtigter Interessen (z. B. Betrieb und Sicherheit der Website)</li>
      </ul>

      <h2>Deine Rechte</h2>
      <p>
        Du hast im Rahmen der geltenden Datenschutzgesetze folgende Rechte hinsichtlich der dich betreffenden
        personenbezogenen Daten:
      </p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Wahrnehmung dieser Rechte kannst du dich an die im Impressum genannten Kontaktdaten wenden. Sobald eine
        E-Mail-Adresse verfügbar ist, wird diese hier ergänzt.
      </p>

      <h2>Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass die
        Verarbeitung der dich betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
      </p>

      <h2>Sicherheit</h2>
      <p>
        Es werden technische und organisatorische Maßnahmen eingesetzt, um deine Daten gegen Verlust, Missbrauch,
        unbefugten Zugriff und unbefugte Offenlegung zu schützen. Diese Maßnahmen werden entsprechend dem Stand der
        Technik weiterentwickelt.
      </p>

      <h2>Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung kann künftig angepasst werden, um sie an geänderte Rechtslagen, den Dienst oder die
        Datenverarbeitung anzupassen. Es gilt stets die auf dieser Website veröffentlichte aktuelle Version.
      </p>
    </main>
  )
}
