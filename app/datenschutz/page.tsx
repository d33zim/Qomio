import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Datenschutz - Qomio',
  description: 'Datenschutzerklärung von Qomio - Digitale Lösungen aus Riedlingen',
}

export default function Datenschutz() {
  return (
    <>
      <SmoothScroll />
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Content */}
        <div className="pt-32 pb-20 px-4 md:px-6">
          <div className="max-w-[900px] mx-auto">
            {/* Header */}
            <div className="mb-16 md:mb-20 border-b border-black/10 pb-8">
              <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase mb-4">
                Datenschutz
              </h1>
              <p className="text-secondary text-sm md:text-base">
                Datenschutzerklärung
              </p>
            </div>

            {/* Content Sections */}
            <div className="prose prose-gray max-w-none space-y-12">

              {/* Verantwortlicher */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Verantwortlicher
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <p className="font-semibold text-lg text-primary mb-2">Neurohr Medienagentur</p>
                  <p className="text-secondary">Peter Neurohr</p>
                  <p className="text-secondary">Steinachweg 8</p>
                  <p className="text-secondary">88525 Dürmentingen</p>
                  <p className="text-secondary">Deutschland</p>
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <p className="text-secondary">Telefon: 0 73 71 / 929 74 83</p>
                    <p className="text-secondary">E-Mail: <a href="mailto:kontakt@qomio.de" className="text-primary hover:text-cyan-500">kontakt@qomio.de</a></p>
                  </div>
                </div>
              </section>

              {/* Arten der Daten */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Arten der verarbeiteten Daten
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-secondary marker:text-primary">
                  <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).</li>
                  <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
                  <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
                  <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
                  <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
                </ul>
              </section>

              {/* Kategorien betroffener Personen */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Kategorien betroffener Personen
                </h2>
                <p className="text-secondary leading-relaxed">
                  Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer“).
                </p>
              </section>

              {/* Zweck der Verarbeitung */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Zweck der Verarbeitung
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-secondary marker:text-primary">
                  <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.</li>
                  <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
                  <li>Sicherheitsmaßnahmen.</li>
                  <li>Reichweitenmessung/Marketing.</li>
                </ul>
              </section>

              {/* Rechtsgrundlagen */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Maßgebliche Rechtsgrundlagen
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, Folgendes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-secondary marker:text-primary">
                  <li>Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO.</li>
                  <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO.</li>
                  <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO.</li>
                  <li>Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.</li>
                </ul>
              </section>

              {/* Sicherheitsmaßnahmen */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Sicherheitsmaßnahmen
                </h2>
                <p className="text-secondary leading-relaxed">
                  Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                </p>
              </section>

              {/* Hosting */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Hosting und E-Mail-Versand
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen.
                </p>
                <p className="text-secondary leading-relaxed">
                  Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).
                </p>
              </section>

              {/* Kontaktaufnahme */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Kontaktaufnahme
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet. Die Angaben der Nutzer können in einem Customer-Relationship-Management System (“CRM System”) oder vergleichbarer Anfragenorganisation gespeichert werden.
                </p>
                <p className="text-secondary leading-relaxed">
                  Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.
                </p>
              </section>

              {/* Rechte der betroffenen Personen */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Rechte der betroffenen Personen
                </h2>
                <p className="text-secondary leading-relaxed">
                  Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO. Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen. Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen. Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern. Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
                </p>
              </section>

            </div>

            {/* Back Link */}
            <div className="mt-16 pt-8 border-t border-black/10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-cyan-500 transition-colors font-mono text-sm uppercase tracking-widest"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
