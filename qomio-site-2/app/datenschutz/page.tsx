import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutz - Qomio',
  description: 'Datenschutzerklärung von Qomio - Digitale Lösungen aus Riedlingen',
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 bg-white/80 backdrop-blur-md border-b border-black/5 z-50">
        <Link
          href="/"
          className="logo-text text-primary hover:text-cyan-500 transition-colors inline-block"
        >
          QOMIO
        </Link>
      </header>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20 border-b border-black/10 pb-8">
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase mb-4">
              Datenschutz
            </h1>
            <p className="text-secondary text-sm md:text-base">
              Datenschutzerklärung für Qomio
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6">
                Allgemeine Hinweise
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6">
                Datenerfassung auf dieser Website
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                <strong className="text-primary">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="text-secondary mb-4 leading-relaxed">
                <strong className="text-primary">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder per E-Mail übermitteln.
              </p>

              <p className="text-secondary mb-4 leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                2. Hosting
              </h2>
              <p className="text-secondary mb-4 leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="text-secondary mb-4 leading-relaxed">
                Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6">
                Datenschutz
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-white border border-black/10 rounded-sm p-6 mb-4">
                <p className="text-primary font-medium mb-1">Qomio</p>
                <p className="text-secondary text-sm">Riedlingen, Deutschland</p>
                <p className="text-secondary text-sm mt-3">
                  E-Mail: <a href="mailto:kontakt@qomio.de" className="text-cyan-500 hover:text-cyan-600">kontakt@qomio.de</a>
                </p>
              </div>

              <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6">
                Kontaktformular / E-Mail-Kontakt
              </h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-secondary mb-4 leading-relaxed">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                5. WhatsApp-Kontakt
              </h2>
              <p className="text-secondary mb-4 leading-relaxed">
                Auf unserer Website bieten wir die Möglichkeit der Kontaktaufnahme über WhatsApp an. Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten (z.B. Telefonnummer, Name, Nachrichteninhalt) über die Server von WhatsApp (Meta Platforms Ireland Limited) verarbeitet.
              </p>
              <p className="text-secondary mb-4 leading-relaxed">
                Die Nutzung von WhatsApp erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Bitte beachten Sie, dass WhatsApp möglicherweise Daten in Länder außerhalb der EU/EWR überträgt und eigene Datenschutzrichtlinien hat.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                6. Ihre Rechte
              </h2>
              <p className="text-secondary mb-4 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
              <p className="text-secondary mb-4 leading-relaxed">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
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
    </main>
  )
}
