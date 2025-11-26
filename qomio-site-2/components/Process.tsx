'use client'

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
  return (
    <section id="prozess" className="px-4 md:px-6 py-20 md:py-32 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="relative">
          <div className="md:sticky md:top-32">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase mb-6 md:mb-8">
              Unser<br />Prozess
            </h2>
            <div className="w-12 md:w-16 h-1 bg-accent mb-6 md:mb-8"></div>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Klare Schritte, transparente Kommunikation – von der ersten Idee bis zum fertigen Produkt. So arbeiten wir mit Ihnen zusammen.
            </p>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16 border-l border-black/10 pl-6 md:pl-12 mt-4 md:mt-0">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[1.95rem] md:-left-[3.25rem] top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-accent rounded-full z-10 group-hover:bg-accent transition-colors"></div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="font-mono text-xs md:text-sm text-accent mt-1 mb-3 uppercase tracking-wider">
                Schritt {step.number}
              </p>
              <p className="text-secondary text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
