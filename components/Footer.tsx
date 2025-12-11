'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-8 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-4">
        <Link
          href="/impressum"
          className="font-mono text-[10px] text-white/60 hover:text-accent-warm uppercase tracking-widest transition-colors"
        >
          Impressum
        </Link>
        <span className="hidden md:inline text-white/20">•</span>
        <Link
          href="/datenschutz"
          className="font-mono text-[10px] text-white/60 hover:text-accent-warm uppercase tracking-widest transition-colors"
        >
          Datenschutz
        </Link>
      </div>
      <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
        © {currentYear} Qomio - Digitale Lösungen aus Dürmentingen.
      </p>
    </footer>
  )
}
