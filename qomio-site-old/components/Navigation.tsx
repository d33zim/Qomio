'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed flex animate-fade-slide-in z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center">
      <div className="flex shadow-cyan-900/50 bg-[#000000]/60 border-[#ffffff]/20 border rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-2xl backdrop-blur-xl gap-x-2 gap-y-2 items-center w-full max-w-5xl">
        <Link href="/" className="inline-flex items-center justify-center h-10 flex-shrink-0">
          <Image
            src="/logo-light.png"
            alt="Qomio Logo"
            width={120}
            height={25}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400 flex-1">
          <Link href="#leistungen" className="px-4 py-2 hover:text-cyan-300 transition-smooth font-medium">
            Leistungen
          </Link>
          <Link href="#prozess" className="px-4 py-2 hover:text-cyan-300 transition-smooth font-medium">
            Prozess
          </Link>
          <Link href="#warum" className="px-4 py-2 hover:text-cyan-300 transition-smooth font-medium">
            Warum wir
          </Link>
          <Link href="#kontakt" className="px-4 py-2 hover:text-cyan-300 transition-smooth font-medium">
            Kontakt
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto p-2 hover:bg-zinc-800 rounded transition-smooth"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* CTA Button */}
        <Link
          href="#kontakt"
          className="hover:bg-cyan-400 transition-smooth shadow-cyan-500/30 active:scale-95 text-sm font-medium text-zinc-950 bg-cyan-500 rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-lg flex-shrink-0"
        >
          Termin buchen
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 md:hidden bg-[#000000]/90 border border-white/20 rounded-lg backdrop-blur-xl p-4">
          <div className="flex flex-col gap-2">
            <Link href="#leistungen" className="px-4 py-2 hover:text-cyan-300 transition-smooth">
              Leistungen
            </Link>
            <Link href="#prozess" className="px-4 py-2 hover:text-cyan-300 transition-smooth">
              Prozess
            </Link>
            <Link href="#warum" className="px-4 py-2 hover:text-cyan-300 transition-smooth">
              Warum wir
            </Link>
            <Link href="#kontakt" className="px-4 py-2 hover:text-cyan-300 transition-smooth">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
