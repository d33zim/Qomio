'use client'

import { Zap } from 'lucide-react'

export default function AutomationIllustration() {
    return (
        <svg viewBox="0 0 900 360" className="w-full h-full text-accent" fill="none">
            <circle cx="150" cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" begin="0s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="270" cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" begin="0.2s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="390" cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" begin="0.4s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="510" cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" begin="0.6000000000000001s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="630" cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" begin="0.8s" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="750" cy="30" r="4" fill="currentColor" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" begin="1s" repeatCount="indefinite"></animate>
            </circle>

            <path d="M450 300 C 450 200, 300 120, 150 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none"></path>
            <path d="M450 300 C 450 200, 300 120, 150 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                <animate attributeName="stroke-dashoffset" values="600;0;600" dur="6s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
            </path>

            <path d="M450 300 C 450 210, 360 130, 270 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none"></path>
            <path d="M450 300 C 450 210, 360 130, 270 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                <animate attributeName="stroke-dashoffset" values="520;0;520" dur="6s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
            </path>

            <path d="M450 300 C 450 150, 420 80, 390 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none"></path>
            <path d="M450 300 C 450 150, 420 80, 390 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                <animate attributeName="stroke-dashoffset" values="450;0;450" dur="6s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
            </path>

            <path d="M450 300 C 450 150, 480 80, 510 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none"></path>
            <path d="M450 300 C 450 150, 480 80, 510 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                <animate attributeName="stroke-dashoffset" values="450;0;450" dur="6s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
            </path>

            <path d="M450 300 C 450 210, 540 130, 630 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none"></path>
            <path d="M450 300 C 450 210, 540 130, 630 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                <animate attributeName="stroke-dashoffset" values="520;0;520" dur="6s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
            </path>

            <path d="M450 300 C 450 200, 600 120, 750 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none"></path>
            <path d="M450 300 C 450 200, 600 120, 750 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                <animate attributeName="stroke-dashoffset" values="600;0;600" dur="6s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"></animate>
            </path>

            {/* Central Hub Icon */}
            <foreignObject x="418" y="268" width="64" height="64">
                <div className="flex items-center justify-center w-full h-full rounded-2xl ring-4 bg-accent/10 ring-accent/20 backdrop-blur-sm shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    <Zap className="w-8 h-8 text-accent" />
                </div>
            </foreignObject>

        </svg>
    )
}
