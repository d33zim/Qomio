'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ProcessMeeting,
  ProcessConcept,
  ProcessBuild,
  ProcessLaunch,
  ProcessSupport
} from './illustrations/ProcessIllustrations'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: 1,
    title: 'Kostenloses Erstgespräch',
    description: 'Wir sprechen über Ihre Ziele, Ideen und Anforderungen – telefonisch, online oder persönlich vor Ort.',
    Illustration: ProcessMeeting,
    colSpan: 'md:col-span-1',
  },
  {
    number: 2,
    title: 'Konzept & Angebot',
    description: 'Sie erhalten ein transparentes, verständliches Angebot ohne versteckte Kosten.',
    Illustration: ProcessConcept,
    colSpan: 'md:col-span-1',
  },
  {
    number: 3,
    title: 'Umsetzung',
    description: 'Wir entwickeln Ihre Website, App oder Software in klaren Schritten.',
    Illustration: ProcessBuild,
    colSpan: 'md:col-span-1',
  },
  {
    number: 4,
    title: 'Launch & Übergabe',
    description: 'Nach Freigabe veröffentlichen wir Ihr Projekt – sauber, sicher und technisch optimiert.',
    Illustration: ProcessLaunch,
    colSpan: 'md:col-span-1 lg:col-span-2', // Wider card for Launch
  },
  {
    number: 5,
    title: 'Support',
    description: 'Auf Wunsch betreuen wir Ihr Projekt langfristig und entwickeln es weiter.',
    Illustration: ProcessSupport,
    colSpan: 'md:col-span-1 lg:col-span-1',
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
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }

    // Animate steps cards
    if (stepsRef.current) {
      const cards = stepsRef.current.querySelectorAll('.process-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
            once: true,
          }
        }
      )
    }
  }, [])

  return (
    <section id="prozess" className="px-4 md:px-6 py-20 md:py-32 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 uppercase tracking-wide bg-accent/5 text-accent ring-accent/20 mb-6">
            Qomios Weg
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
            Unser Prozess
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full opacity-30"></div>
          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Klare Schritte, transparente Kommunikation. Wir begleiten Sie von der ersten Idee bis zum fertigen Produkt.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
              }}
              className={`process-card group relative bg-white rounded-3xl border border-black/10 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 ${step.colSpan || ''}`}
            >
              {/* Flashlight Overlay */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 z-30"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(37,99,235,0.04), transparent 40%)`
                }}
              />

              {/* Illustration Area */}
              <div className="w-full h-48 bg-gradient-to-b from-blue-50/30 to-transparent p-6 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                  <step.Illustration />
                </div>
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-sm font-bold text-accent shadow-sm">
                  {step.number}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-20">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
