'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 md:px-6 flex justify-between items-center z-50 text-primary transition-all duration-300 ${scrolled
        ? 'py-3 md:py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5'
        : 'py-5 bg-transparent pointer-events-none'
        }`}
    >
      <Link
        href="/"
        className="logo-text hover:text-accent-warm active:text-accent focus:text-accent transition-colors pointer-events-auto"
      >
        QOMIO
      </Link>
      <div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
        <div
          className={`hidden md:flex gap-8 px-6 py-2 rounded-full transition-all duration-300 ${scrolled
            ? ''
            : 'bg-white/80 backdrop-blur-md border border-black/5 shadow-sm'
            }`}
        >
          <Link
            href="/#leistungen"
            className="font-mono text-xs uppercase tracking-widest hover:text-accent-warm active:text-accent focus:text-accent transition-colors"
          >
            Leistungen
          </Link>
          <Link
            href="/#prozess"
            className="font-mono text-xs uppercase tracking-widest hover:text-accent-warm active:text-accent focus:text-accent transition-colors"
          >
            Prozess
          </Link>
          <Link
            href="/#showcase"
            className="font-mono text-xs uppercase tracking-widest hover:text-accent-warm active:text-accent focus:text-accent transition-colors"
          >
            Showcase
          </Link>
          <Link
            href="/#warum"
            className="font-mono text-xs uppercase tracking-widest hover:text-accent-warm active:text-accent focus:text-accent transition-colors"
          >
            Warum
          </Link>
        </div>
        <Link
          href="/#kontakt"
          className="bg-white text-primary px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white active:bg-accent-deep focus:bg-accent focus:text-white transition-all duration-200 magnetic-btn shadow-lg"
        >
          Kontakt
        </Link>
      </div>
    </nav>
  )
}
