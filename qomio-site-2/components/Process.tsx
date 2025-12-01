'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: 1,
    title: 'Kostenloses Erstgespräch',
    description: 'Wir sprechen über Ihre Ziele, Ideen und Anforderungen – telefonisch, online oder persönlich vor Ort.',
  },
  {
    number: 2,
    title: 'Konzept & Angebot',
    description: 'Sie erhalten ein transparentes, verständliches Angebot ohne versteckte Kosten.',
  },
  {
    number: 3,
    title: 'Umsetzung',
    description: 'Wir entwickeln Ihre Website, App oder Software in klaren Schritten. Sie können jederzeit Feedback geben.',
  },
  {
    number: 4,
    title: 'Launch & Übergabe',
    description: 'Nach Freigabe veröffentlichen wir Ihr Projekt – sauber, sicher und technisch optimiert.',
  },
  {
    number: 5,
    title: 'Support & Weiterentwicklung',
    description: 'Auf Wunsch betreuen wir Ihr Projekt langfristig und entwickeln es weiter.',
  },
]

export default function Process() {
  const titleRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )
    }

    // Animate steps
    if (stepsRef.current) {
      const stepElements = stepsRef.current.querySelectorAll('.process-step')
      gsap.fromTo(
        stepElements,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )
    }
  }, [])

  return (
    <section id="prozess" className="px-4 md:px-6 py-20 md:py-32 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="relative">
          <div ref={titleRef} className="md:sticky md:top-32">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 md:mb-8">
              Unser<br />Prozess
            </h2>
            <div className="w-16 md:w-24 h-1.5 bg-accent mb-6 md:mb-8 rounded-full"></div>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Klare Schritte, transparente Kommunikation – von der ersten Idee bis zum fertigen Produkt. So arbeiten wir mit Ihnen zusammen.
            </p>
          </div>
        </div>

        <div ref={stepsRef} className="space-y-12 md:space-y-16 border-l border-black/10 pl-6 md:pl-12 mt-4 md:mt-0">
          {steps.map((step, index) => (
            <div key={index} className="relative group process-step">
              <div className="absolute -left-[1.95rem] md:-left-[3.25rem] top-1.5 md:top-2 w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-accent rounded-full z-10 group-hover:bg-accent group-hover:scale-125 transition-all duration-300"></div>
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="font-mono text-xs md:text-sm text-accent mt-1 mb-3 uppercase tracking-wider font-medium">
                Schritt {step.number}
              </p>
              <p className="text-secondary text-base md:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
