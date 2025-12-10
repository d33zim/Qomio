'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { BookingWidget, AnalyticsWidget, EcommerceWidget, EnterpriseWidget } from './ShowcaseWidgets'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        title: 'Horizon Booking',
        category: 'Travel & Tourism',
        description: 'Eine intuitive Buchungsplattform mit komplexer Filter-Logik und Echtzeit-Verfügbarkeiten.',
        Widget: BookingWidget,
        colSpan: 'md:col-span-1', // Balanced grid
        tags: ['Web App', 'React', 'Booking System'],
    },
    {
        title: 'Nova Analytics',
        category: 'FinTech',
        description: 'High-Performance Dashboard zur Visualisierung komplexer Finanzdaten in Echtzeit.',
        Widget: AnalyticsWidget,
        colSpan: 'md:col-span-1',
        tags: ['Dashboard', 'Data Viz', 'SaaS'],
    },
    {
        title: 'Lumina Commerce',
        category: 'E-Commerce',
        description: 'Mobile-First Shopping Experience mit ultraschnellen Ladezeiten und moderner UX.',
        Widget: EcommerceWidget,
        colSpan: 'md:col-span-1',
        tags: ['Shop', 'Mobile First', 'Scale'],
    },
    {
        title: 'Enterprise Core',
        category: 'Internal Tools',
        description: 'Maßgeschneiderte Verwaltungssoftware zur Automatisierung interner Prozesse.',
        Widget: EnterpriseWidget,
        colSpan: 'md:col-span-1',
        tags: ['Automation', 'Workflow', 'Kanban'],
        isMinimal: false
    },
]

export default function Showcase() {
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Animate header
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            )
        }

        // Animate cards
        if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.showcase-card')
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 75%',
                        once: true,
                    },
                }
            )
        }
    }, [])

    return (
        <section id="showcase" className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto bg-slate-50/50">
            {/* Header */}
            <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 uppercase tracking-wide bg-accent/5 text-accent ring-accent/20 mb-6">
                    Showcase
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">
                    Ausgewählte Konzepte
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full opacity-30"></div>
                <p className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Interaktive Beispiele unserer Design-Philosophie. Probieren Sie es live aus!
                </p>
            </div>

            {/* Grid - Adjusted to 2 cols for balance */}
            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`showcase-card group relative bg-white rounded-3xl border border-black/10 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 ${project.colSpan}`}
                    >

                        {/* Widget Area - Interactive */}
                        <div className="relative h-[340px] md:h-[400px] bg-slate-100 overflow-hidden p-6 md:p-8 flex items-center justify-center border-b border-black/5 z-20">
                            <div className="w-full h-full transform transition-transform duration-500 hover:scale-[1.01] shadow-xl rounded-xl">
                                {project.Widget && <project.Widget />}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 relative z-10 flex flex-col h-[240px]">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono uppercase text-accent tracking-widest">{project.category}</span>
                                    <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>

                                <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-secondary text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
