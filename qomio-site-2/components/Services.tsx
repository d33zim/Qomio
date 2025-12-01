'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    icon: '🌐',
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
    icon: '📱',
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
    icon: '⚡',
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
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
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
      <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b-2 border-primary/10 pb-6">
        <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter uppercase">
          Unsere Leistungen
        </h2>
        <span className="font-mono text-xs md:text-sm text-secondary mt-2 md:mt-0">
          (Digital Solutions)
        </span>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white border-2 border-line rounded-sm p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/10 relative overflow-hidden group transition-all duration-300"
          >
            {/* Bold glow effect on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[100px] pointer-events-none group-hover:bg-accent/15 transition-all duration-500" />

            <div className="relative z-10">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-secondary text-base leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-base text-secondary">
                    <span className="text-accent text-lg font-bold">✓</span>
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
