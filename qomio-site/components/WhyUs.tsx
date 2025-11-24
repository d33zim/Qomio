'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Regional & persönlich',
    description: 'Wir kommen aus der Region Riedlingen. Kurze Wege, schnelle Abstimmung, persönliche Zusammenarbeit.',
    icon: '📍',
  },
  {
    title: 'Modern & professionell',
    description: 'Wir arbeiten mit aktuellen Technologien und entwickeln Lösungen, die lange funktionieren.',
    icon: '🚀',
  },
  {
    title: 'Transparent & fair',
    description: 'Klare Kommunikation, klare Preise, klare Ergebnisse. Keine Überraschungen, keine versteckten Kosten.',
    icon: '💎',
  },
  {
    title: 'Flexibel & schnell',
    description: 'Als kleines Team arbeiten wir effizient und reagieren ohne lange Wartezeiten.',
    icon: '⚡',
  },
]

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="warum" className="relative overflow-hidden pt-32 pb-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Warum wir die richtigen Partner sind
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-8 rounded-xl hover:border-cyan-500/50 transition-smooth"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-zinc-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
