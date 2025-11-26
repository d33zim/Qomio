'use client'

export default function Marquee() {
  const skills = [
    'Next.js',
    'React',
    'Vue.js',
    'TypeScript',
    'Node.js',
    'Laravel',
    'Tailwind CSS',
    'GSAP',
    'Automatisierung',
    'App-Entwicklung',
    'Webseiten',
    'APIs',
  ]

  return (
    <div className="py-6 md:py-8 bg-primary text-white overflow-hidden border-y border-white/10 select-none">
      <div className="marquee-track font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
        {/* Duplicate twice for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <span key={index}>
            <span className="mx-4 md:mx-8">{skill}</span>
            <span className="text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
