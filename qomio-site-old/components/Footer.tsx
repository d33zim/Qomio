'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 pt-12 pb-12 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-white mb-4">Qomio</h3>
            <p className="text-zinc-400 text-sm">
              Digitale Lösungen aus Riedlingen
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#leistungen" className="hover:text-cyan-400 transition-smooth">
                  Webseiten
                </Link>
              </li>
              <li>
                <Link href="#leistungen" className="hover:text-cyan-400 transition-smooth">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="#leistungen" className="hover:text-cyan-400 transition-smooth">
                  Automatisierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#warum" className="hover:text-cyan-400 transition-smooth">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#prozess" className="hover:text-cyan-400 transition-smooth">
                  Prozess
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-smooth">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-smooth">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-smooth">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-zinc-400 text-sm">
          <p>
            &copy; {currentYear} Qomio - Digitale Lösungen aus der Region Riedlingen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
