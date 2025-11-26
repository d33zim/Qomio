'use client'

import { useEffect } from 'react'
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
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(:first-child)')
    sections.forEach(section => {
      gsap.from(section.querySelectorAll('h2, h3, p, .service-card, li'), {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out'
      })
    })
  }, [])

  return (
    <section id="leistungen" className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-black/10 pb-6">
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase">
          Unsere Leistungen
        </h2>
        <span className="font-mono text-xs md:text-sm text-secondary mt-2 md:mt-0">
          (Digital Solutions)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white border border-black/5 rounded-sm p-8 hover:border-accent/30 relative overflow-hidden group"
          >
            {/* Glow effect on hover */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-colors" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-secondary">
                    <span className="text-accent font-bold">✓</span>
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
