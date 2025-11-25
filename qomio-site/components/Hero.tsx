'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import BackgroundAnimation from './BackgroundAnimation'
import Stats from './Stats'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    // Wait for border-dissolve animation to complete (0.8s total)
    setTimeout(() => {
      const targetElement = document.querySelector(href)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 800)
  }

  return (
    <section className="relative overflow-x-hidden overflow-y-visible pt-32 pb-96 px-4 min-h-screen">
      <BackgroundAnimation />
      <motion.div
        className="max-w-5xl mx-auto relative z-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-bold tracking-tight mb-6 gradient-text"
        >
          Webseiten, Apps & Automatisierungslösungen
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
        >
          Wir entwickeln moderne Websites, individuelle Apps und effiziente Automatisierungslösungen – schnell, zuverlässig und transparent. Für Unternehmen in Biberach, Bad Saulgau, Ravensburg und Umgebung.
        </motion.p>

        {/* Mobile buttons without beams */}
        <motion.div variants={itemVariants} className="flex flex-col sm:hidden gap-4 items-center">
          <Link
            href="#kontakt"
            onClick={(e) => handleButtonClick(e, '#kontakt')}
            className="border-dissolve inline-block max-w-xs w-auto"
          >
            Jetzt Termin sichern
          </Link>
          <Link
            href="#leistungen"
            onClick={(e) => handleButtonClick(e, '#leistungen')}
            className="border-dissolve inline-block max-w-xs w-auto"
          >
            Unsere Leistungen
          </Link>
        </motion.div>
      </motion.div>

      {/* CTA Buttons with beams - with proper spacing from edges */}
      <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row gap-4 justify-center items-center hidden sm:flex relative z-20">
        {/* Left beam */}
        <div className="h-px pointer-events-none bg-gradient-to-r from-transparent via-zinc-800 to-transparent flex-1 overflow-hidden relative min-w-[80px]">
          <div className="absolute h-full w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-beam-h"></div>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="#kontakt"
            onClick={(e) => handleButtonClick(e, '#kontakt')}
            className="border-dissolve inline-block whitespace-nowrap"
          >
            Jetzt Termin sichern
          </Link>
          <Link
            href="#leistungen"
            onClick={(e) => handleButtonClick(e, '#leistungen')}
            className="border-dissolve inline-block whitespace-nowrap"
          >
            Unsere Leistungen
          </Link>
        </motion.div>

        {/* Right beam */}
        <div className="h-px pointer-events-none bg-gradient-to-l from-transparent via-zinc-800 to-transparent flex-1 overflow-hidden relative min-w-[80px]">
          <div className="absolute h-full w-32 bg-gradient-to-l from-transparent via-cyan-500 to-transparent animate-beam-h-rev"></div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  )
}
