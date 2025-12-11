'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Github,
    Slack,
    Trello,
    Figma,
    Database,
    Cloud,
    Workflow,
    ShieldCheck,
    Gauge,
    MousePointerClick,
    Plug,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Integrations() {
    const containerRef = useRef<HTMLDivElement>(null)
    const karaokeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!karaokeRef.current) return

        // Karaoke Text Animation
        const words = karaokeRef.current.querySelectorAll('.karaoke-word')

        // Initial state: low opacity
        gsap.set(words, { color: '#94a3b8' }) // Slate-400

        gsap.to(words, {
            color: '#1e293b', // Slate-800
            stagger: 0.1,
            scrollTrigger: {
                trigger: karaokeRef.current,
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: 1, // Smooth scrubbing
            },
        })

        // Animate the icons popping in
        const icons = containerRef.current?.querySelectorAll('.integration-icon')
        if (icons) {
            gsap.fromTo(icons,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                    }
                }
            )
        }

    }, [])

    return (
        <section className="py-24 bg-white/50 border-t border-b border-black/5 overflow-hidden">
            <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 uppercase tracking-wide bg-accent/5 text-accent ring-accent/20 mb-8">
                    <Plug className="w-3.5 h-3.5" />
                    Integrations
                </div>

                {/* Karaoke Headline */}
                <div ref={karaokeRef} className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight mb-6">
                        <span className="karaoke-word transition-colors duration-200">Verbinden </span>
                        <span className="karaoke-word transition-colors duration-200">Sie </span>
                        <span className="karaoke-word transition-colors duration-200">Ihre </span>
                        <span className="karaoke-word transition-colors duration-200">gesamte </span>
                        <span className="karaoke-word transition-colors duration-200">Unternehmens-IT </span>
                        <span className="karaoke-word transition-colors duration-200">in </span>
                        <span className="karaoke-word transition-colors duration-200">einem </span>
                        <span className="karaoke-word transition-colors duration-200">System.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
                        Eine Plattform, unendliche Möglichkeiten. Automatisieren Sie Workflows zwischen all Ihren Lieblingstools.
                    </p>
                </div>

                {/* Integration Icons Row */}
                <div className="flex justify-center gap-6 mb-12 flex-wrap">
                    {[Github, Slack, Trello, Figma, Database, Cloud].map((Icon, i) => (
                        <div key={i} className="integration-icon inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-sm text-secondary hover:text-accent hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <Icon className="w-6 h-6" />
                        </div>
                    ))}
                </div>

                {/* Pulse Hub Animation */}
                <div className="relative mx-auto h-[360px] max-w-[900px]">
                    <svg viewBox="0 0 900 360" className="absolute inset-0 w-full h-full text-accent" fill="none">
                        {/* Dots */}
                        {[150, 270, 390, 510, 630, 750].map((cx, i) => (
                            <circle key={i} cx={cx} cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                            </circle>
                        ))}

                        {/* Connecting Paths */}
                        {/* Note: In React, animate elements inside path might need unique keys or just work natively. Using currentColor for stroke based on text-accent class. */}
                        <path d="M450 300 C 450 200, 300 120, 150 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                        <path d="M450 300 C 450 200, 300 120, 150 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                            <animate attributeName="stroke-dashoffset" values="600;0;600" dur="3s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>

                        <path d="M450 300 C 450 210, 360 130, 270 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                        <path d="M450 300 C 450 210, 360 130, 270 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                            <animate attributeName="stroke-dashoffset" values="520;0;520" dur="3s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>

                        <path d="M450 300 C 450 150, 420 80, 390 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                        <path d="M450 300 C 450 150, 420 80, 390 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                            <animate attributeName="stroke-dashoffset" values="450;0;450" dur="3s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>

                        <path d="M450 300 C 450 150, 480 80, 510 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                        <path d="M450 300 C 450 150, 480 80, 510 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                            <animate attributeName="stroke-dashoffset" values="450;0;450" dur="3s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>

                        <path d="M450 300 C 450 210, 540 130, 630 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                        <path d="M450 300 C 450 210, 540 130, 630 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                            <animate attributeName="stroke-dashoffset" values="520;0;520" dur="3s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>

                        <path d="M450 300 C 450 200, 600 120, 750 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                        <path d="M450 300 C 450 200, 600 120, 750 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                            <animate attributeName="stroke-dashoffset" values="600;0;600" dur="3s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                        </path>
                    </svg>

                    {/* Center Hub Icon */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                        <span
                            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl ring-4 bg-accent/10 ring-accent/20 backdrop-blur-sm"
                            style={{ boxShadow: '0 0 30px rgba(37,99,235,0.4)' }}
                        >
                            <Plug className="w-8 h-8 text-accent" />
                        </span>
                    </div>
                </div>

                {/* Feature List */}
                <div className="flex items-center justify-center gap-6 flex-wrap text-sm font-medium text-secondary mt-12 opacity-80">
                    <div className="inline-flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-accent" />
                        <span>Echtzeit-Synchronisation</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-black/10" />
                    <div className="inline-flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        <span>Enterprise Sicherheit</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-black/10" />
                    <div className="inline-flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-accent" />
                        <span>Hohe Skalierbarkeit</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-black/10" />
                    <div className="inline-flex items-center gap-2">
                        <MousePointerClick className="w-4 h-4 text-accent" />
                        <span>Schnelles Setup</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
