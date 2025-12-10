'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import WebIllustration from './illustrations/WebIllustration'
import AppIllustration from './illustrations/AppIllustration'
import AutomationIllustration from './illustrations/AutomationIllustration'

const services = [
  {
    title: 'Webseiten, die überzeugen',
    description: 'Moderne, schnelle und mobile-optimierte Websites, die professionell aussehen und einfach funktionieren.',
    features: [
      'Individuelles Design',
      'Schnelle Performance',
      'Mobile Optimierung',
      'SEO-Basisoptimierung',
    ],
    Illustration: WebIllustration,
  },
  {
    title: 'App-Entwicklung für iOS, Android & Web',
    description: 'Wir entwickeln maßgeschneiderte Apps — für interne Unternehmensprozesse oder als digitale Lösung für Ihre Kunden.',
    features: [
      'Kunden-Apps',
      'Mitarbeiter-Tools',
      'Verwaltungs-Systeme',
      'Digitale Formulare',
    ],
    Illustration: AppIllustration,
  },
  {
    title: 'Automatisierungs-Software & digitale Prozesse',
    description: 'Viele Firmen arbeiten noch mit handgeschriebenen Notizen. Wir schaffen effektive Automatisierungstools.',
    features: [
      'Automatische Angebotserstellung',
      'Auftragsverwaltung',
      'Rechnungsautomatisierung',
      'System-Schnittstellen',
    ],
    Illustration: AutomationIllustration,
  },
]

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 80,
        },
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
      const cards = cardsRef.current.querySelectorAll('.service-card')
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )

      // Animate features list items
      cards.forEach((card) => {
        const listItems = card.querySelectorAll('li')
        gsap.fromTo(
          listItems,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              once: true,
            },
          }
        )
      })
    }
  }, [])

  return (
    <section id="leistungen" className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto">
      <div ref={headerRef} className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 uppercase tracking-wide bg-accent/5 text-accent ring-accent/20 mb-6">
          Was wir bieten
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
          Unsere Leistungen
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full opacity-30"></div>
        <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Maßgeschneiderte digitale Lösungen für Ihren Erfolg. Von der Strategie bis zur Umsetzung.
        </p>
      </div>
      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
            }}
            className="service-card group w-full h-full bg-white rounded-3xl border border-black/10 shadow-sm overflow-hidden relative hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Spotlight Overlay */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 z-30"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(37,99,235,0.06), transparent 40%)`
              }}
            />

            {/* Integrated Illustration Header (Cover) */}
            <div className="relative h-64 bg-gradient-to-b from-blue-50/50 to-transparent p-10 flex items-center justify-center overflow-hidden">
              {/* Background Accent Mesh (Subtle) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />

              <div className="w-full h-full transform transition-transform duration-700 group-hover:scale-105 z-10">
                <service.Illustration />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 flex-1 flex flex-col relative z-20 bg-white/50 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-secondary text-base leading-relaxed mb-8 text-balance">
                {service.description}
              </p>

              <ul className="space-y-4 mt-auto">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm font-medium text-secondary/90">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
