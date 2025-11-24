'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden pt-32 pb-32 px-4 bg-gradient-to-b from-zinc-950 to-cyan-950/20">

      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Bereit für den nächsten Schritt in die Digitalisierung?
        </h2>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
          Lassen Sie uns unverbindlich über Ihr Projekt sprechen.
        </p>

        <Link
          href="mailto:kontakt@qomio.de"
          className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-cyan-50 transition-smooth shadow-lg hover:shadow-cyan-500/50 mb-8"
        >
          Kostenloses Erstgespräch anfragen
        </Link>

        <p className="text-zinc-400 text-sm">
          Wir freuen uns auf Ihr Unternehmen aus Riedlingen, Biberach, Bad Saulgau, Ravensburg und Umgebung.
        </p>
      </motion.div>
    </section>
  )
}
