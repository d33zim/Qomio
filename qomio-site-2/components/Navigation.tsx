'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 pointer-events-none">
      <Link
        href="/"
        className="logo-text text-primary hover:text-cyan-500 active:text-cyan-600 focus:text-cyan-500 transition-colors pointer-events-auto"
      >
        QOMIO
      </Link>
      <div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
        <div className="hidden md:flex gap-8 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-black/10 shadow-sm">
          <Link
            href="/#leistungen"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:text-cyan-500 active:text-cyan-600 focus:text-cyan-500 transition-colors"
          >
            Leistungen
          </Link>
          <Link
            href="/#prozess"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:text-cyan-500 active:text-cyan-600 focus:text-cyan-500 transition-colors"
          >
            Prozess
          </Link>
          <Link
            href="/#warum"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:text-cyan-500 active:text-cyan-600 focus:text-cyan-500 transition-colors"
          >
            Warum
          </Link>
        </div>
        <Link
          href="/#kontakt"
          className="bg-primary text-white px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-white active:bg-cyan-600 focus:bg-cyan-500 focus:text-white transition-colors duration-200 magnetic-btn shadow-lg"
        >
          Kontakt
        </Link>
      </div>
    </nav>
  )
}
