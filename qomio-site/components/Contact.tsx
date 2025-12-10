'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate main content
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.contact-element')
      gsap.fromTo(
        elements,
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
            trigger: contentRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )
    }

    // Animate footer grid
    if (footerRef.current) {
      const items = footerRef.current.querySelectorAll('div > div')
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }
  }, [])

  return (
    <section id="kontakt" className="px-4 md:px-6 py-20 md:py-40 bg-[#F5F5F5] border-t border-black/5">
      <div ref={contentRef} className="max-w-[1200px] mx-auto text-center">
        <p className="contact-element font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent mb-6">
          Bereit durchzustarten?
        </p>
        <h2 className="contact-element font-display text-5xl md:text-9xl font-bold tracking-tighter uppercase mb-10 md:mb-12 leading-none text-primary">
          Let&apos;s Work<br />Together
        </h2>

        <div className="contact-element flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-8">
          <Link
            href="mailto:kontakt@qomio.de"
            className="group flex items-center gap-3 text-lg md:text-2xl font-mono border-b-2 border-primary/20 pb-1 hover:border-accent hover:text-accent active:border-accent-deep active:text-accent-deep focus:border-accent focus:text-accent transition-all"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            kontakt@qomio.de
          </Link>
        </div>

        <p className="contact-element text-secondary text-sm md:text-base max-w-2xl mx-auto mb-10">
          Wir freuen uns auf Ihr Unternehmen aus Riedlingen, Biberach, Bad Saulgau, Ravensburg und Umgebung.
        </p>

        <div ref={footerRef} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left border-t border-black/5 pt-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase text-secondary mb-3">Leistungen</h4>
            <p className="text-sm md:text-base font-medium">Webseiten</p>
            <p className="text-sm md:text-base font-medium">Apps</p>
            <p className="text-sm md:text-base font-medium">Automatisierung</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase text-secondary mb-3">Standort</h4>
            <p className="text-sm md:text-base font-medium">Riedlingen</p>
            <p className="text-sm md:text-base font-medium text-secondary">Baden-Württemberg</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase text-secondary mb-3">Tech Stack</h4>
            <p className="text-sm md:text-base font-medium">React / Next.js</p>
            <p className="text-sm md:text-base font-medium">Vue / Nuxt</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-end justify-center md:justify-end mt-4 md:mt-0">
            <button
              className="w-10 h-10 md:w-12 md:h-12 border-2 border-primary/10 bg-white rounded-full flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all hover:scale-110"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
