'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  WhyRegional,
  WhyTech,
  WhyTransparent,
  WhyFast
} from './illustrations/WhyUsIllustrations'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    title: 'Regional & persönlich',
    description: 'Wir kommen aus der Region Riedlingen. Kurze Wege, schnelle Abstimmung, persönliche Zusammenarbeit.',
    Illustration: WhyRegional,
  },
  {
    title: 'Modern & professionell',
    description: 'Wir arbeiten mit aktuellen Technologien und entwickeln Lösungen, die lange funktionieren.',
    Illustration: WhyTech,
  },
  {
    title: 'Transparent & fair',
    description: 'Klare Kommunikation, klare Preise, klare Ergebnisse. Keine Überraschungen.',
    Illustration: WhyTransparent,
  },
  {
    title: 'Flexibel & schnell',
    description: 'Als kleines Team arbeiten wir effizient und reagieren ohne lange Wartezeiten.',
    Illustration: WhyFast,
  },
]

export default function WhyUs() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }

    // Animate cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.why-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )
    }
  }, [])

  return (
    <section id="warum" className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto">
      <div ref={headerRef} className="text-center mb-16 md:mb-24 border-b-2 border-primary/10 pb-6 max-w-[1200px] mx-auto">
        <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter uppercase text-primary">
          Warum Qomio?
        </h2>
        <p className="text-secondary text-base md:text-lg mt-4">
          Die richtigen Partner für Ihre Digitalisierung
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
            }}
            className="why-card group relative bg-white rounded-3xl border border-black/10 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
          >
            {/* Flashlight Overlay */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 z-30"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(37,99,235,0.06), transparent 40%)`
              }}
            />

            <div className="h-full flex flex-col md:flex-row items-center md:items-start p-2">
              {/* Illustration Left/Top */}
              <div className="w-full md:w-1/2 h-48 md:h-auto md:aspect-square bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl flex items-center justify-center p-6 transform group-hover:scale-[1.02] transition-transform duration-500">
                <reason.Illustration />
              </div>

              {/* Content Right/Bottom */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center h-full">
                <h3 className="font-display text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-secondary text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
