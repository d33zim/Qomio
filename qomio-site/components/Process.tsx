'use client'

import { motion } from 'framer-motion'

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="prozess" className="relative overflow-hidden pt-32 pb-32 px-4 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Unser Prozess – klar & unkompliziert
          </h2>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-600 rounded-full text-white font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
