'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-8 text-center">
      <div className="flex justify-center gap-6 mb-8">
        <Link
          href="https://www.instagram.com/qomio_digital/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-accent-warm transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.tiktok.com/@qomio86"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-accent-warm transition-colors"
          aria-label="TikTok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </Link>
      </div>
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
