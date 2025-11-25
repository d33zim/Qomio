'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    number: '50+',
    label: 'Zufriedene Kunden',
    icon: '👥',
  },
  {
    number: '100+',
    label: 'Projekte umgesetzt',
    icon: '✨',
  },
  {
    number: '5+',
    label: 'Jahre Erfahrung',
    icon: '🚀',
  },
  {
    number: '24/7',
    label: 'Support & Beratung',
    icon: '🛡️',
  },
]

export default function Stats() {
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
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto relative z-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative group"
        >
          <div className="bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-smooth">
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
              {stat.number}
            </div>
            <p className="text-sm md:text-base text-zinc-400">
              {stat.label}
            </p>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500/5 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </motion.div>
      ))}
    </motion.div>
  )
}
