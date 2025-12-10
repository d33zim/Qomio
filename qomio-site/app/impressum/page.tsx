import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Impressum - Qomio',
  description: 'Impressum von Qomio - Digitale Lösungen aus Riedlingen',
}

export default function Impressum() {
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
                Impressum
              </h1>
              <p className="text-secondary text-sm md:text-base">
                Angaben gemäß § 5 TMG
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Anbieter */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  Anbieter
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <p className="text-primary font-semibold text-lg mb-4">Qomio</p>
                  <div className="space-y-2 text-secondary">
                    <p>Riedlingen</p>
                    <p>Baden-Württemberg, Deutschland</p>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  Kontakt
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-mono uppercase text-secondary mb-1">E-Mail</p>
                      <a
                        href="mailto:kontakt@qomio.de"
                        className="text-primary hover:text-cyan-500 transition-colors font-medium"
                      >
                        kontakt@qomio.de
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-secondary mb-1">Telefon</p>
                      <a
                        href="tel:+4973719297483"
                        className="text-primary hover:text-cyan-500 transition-colors font-medium"
                      >
                        +49 7371 9297483
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Umsatzsteuer-ID */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  Umsatzsteuer-ID
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <p className="text-secondary leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    <span className="text-primary font-medium">
                      Wird bei Bedarf nachgereicht
                    </span>
                  </p>
                </div>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  Verantwortlich für den Inhalt
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <p className="text-secondary leading-relaxed">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                  </p>
                  <p className="text-primary font-medium mt-3">
                    Qomio<br />
                    Riedlingen, Deutschland
                  </p>
                </div>
              </section>

              {/* EU-Streitschlichtung */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  EU-Streitschlichtung
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <p className="text-secondary leading-relaxed mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  </p>
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:text-cyan-600 transition-colors break-all"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <p className="text-secondary leading-relaxed mt-4">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>
              </section>

              {/* Verbraucherstreitbeilegung */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <div className="bg-white border border-black/10 rounded-sm p-8">
                  <p className="text-secondary leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  Haftungsausschluss
                </h2>

                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  Haftung für Inhalte
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  Haftung für Links
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  Urheberrecht
                </h3>
                <p className="text-secondary leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
