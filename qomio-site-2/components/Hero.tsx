'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import CanvasBackground from './CanvasBackground'

export default function Hero() {
  useEffect(() => {
    // Hero Animation Timeline
    const tl = gsap.timeline({ delay: 1.8 })

    // Wispr Glow
    tl.to('.hero-glow', { opacity: 1, duration: 1.5, ease: 'power2.out' }, '-=0.5')

    // Character reveal with blur-to-focus
    .to('.hero-char', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=1.0')

    // Fade in other elements
    .to('.hero-fade-in', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.8')

    // Magnetic button effect
    const magneticBtns = document.querySelectorAll('.magnetic-btn')
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = (btn as HTMLElement).getBoundingClientRect()
        const mouseEvent = e as MouseEvent
        gsap.to(btn, {
          x: (mouseEvent.clientX - rect.left - rect.width / 2) * 0.2,
          y: (mouseEvent.clientY - rect.top - rect.height / 2) * 0.2,
          duration: 0.2
        })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        })
      })
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-20 md:pt-0 overflow-hidden">
      {/* Canvas Background */}
      <CanvasBackground />

      {/* Wispr Glow Blob */}
      <div className="hero-glow animate-pulse-slow"></div>

      <div className="max-w-[1800px] mx-auto w-full z-10 relative flex flex-col items-center text-center">
        {/* Floating Status Badge */}
        <div className="mb-8 md:mb-12 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm opacity-0 hero-fade-in">
          <div className="flex gap-1 h-3 items-center">
            <span className="w-1 h-full bg-accent rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
            <span className="w-1 h-2/3 bg-accent rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></span>
            <span className="w-1 h-full bg-accent rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></span>
          </div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary font-medium">
            Digitale Lösungen aus Riedlingen
          </span>
        </div>

        {/* Main Title with Split Reveal */}
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-semibold tracking-tighter text-primary uppercase mix-blend-darken flex flex-col items-center">
          <div className="overflow-hidden">
            <span className="hero-char">Webseiten,</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-char">Apps &</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-char">Automation</span>
          </div>
        </h1>

        {/* Subtitle */}
        <div className="mt-8 md:mt-12 max-w-3xl mx-auto opacity-0 hero-fade-in">
          <p className="font-sans text-base md:text-xl text-secondary leading-relaxed text-balance">
            Wir entwickeln moderne Websites, individuelle Apps und effiziente Automatisierungslösungen – schnell, zuverlässig und transparent. Für Unternehmen in{' '}
            <span className="text-primary font-medium">Biberach</span>,{' '}
            <span className="text-primary font-medium">Bad Saulgau</span>,{' '}
            <span className="text-primary font-medium">Ravensburg</span> und Umgebung.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 md:mt-14 flex gap-4 opacity-0 hero-fade-in">
          <button
            className="px-8 py-3 bg-primary text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 transition-colors duration-300 magnetic-btn"
            onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Unsere Leistungen
          </button>
          <Link
            href="#kontakt"
            className="px-8 py-3 border border-black/10 bg-white rounded-full hover:bg-gray-100 active:bg-cyan-600 active:text-white focus:bg-cyan-500 focus:text-white transition-colors duration-200 magnetic-btn font-mono text-xs font-bold uppercase tracking-widest"
          >
            Jetzt anfragen
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 hero-fade-in animate-bounce">
        <svg
          className="w-5 h-5 text-secondary/50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
