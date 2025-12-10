'use client'

import { motion } from 'framer-motion'

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
    <section id="leistungen" className="relative overflow-hidden pt-32 pb-32 px-4 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-zinc-400 text-lg">
            Professionelle Lösungen für jede digitale Herausforderung
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-zinc-950 border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 transition-smooth group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-zinc-400">
                      <span className="text-cyan-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
