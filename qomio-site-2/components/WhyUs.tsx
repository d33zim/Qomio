'use client'

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
  return (
    <section id="warum" className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto">
      <div className="text-center mb-16 md:mb-24 border-b border-black/10 pb-6">
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase">
          Warum Qomio?
        </h2>
        <p className="text-secondary text-base md:text-lg mt-4">
          Die richtigen Partner für Ihre Digitalisierung
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white border border-black/5 p-8 rounded-sm hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              {reason.title}
            </h3>
            <p className="text-secondary text-sm md:text-base">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
