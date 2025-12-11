'use client'

import { Zap } from 'lucide-react'

export default function AutomationIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Background Network Mesh (Subtle) */}
            <defs>
                <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dots)" />

            {/* Bezier Connections (Radiating from bottom hub at 200, 240) */}
            {/* We map to target points at the top */}

            {/* 1. Left Far */}
            <g>
                <path d="M200 212 C 200 150, 100 150, 50 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                <path d="M200 212 C 200 150, 100 150, 50 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 300, strokeDashoffset: 300 }}>
                    <animate attributeName="stroke-dashoffset" values="300;0;300" dur="4s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                </path>
                <circle cx="50" cy="50" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            </g>

            {/* 2. Left Mid */}
            <g>
                <path d="M200 212 C 200 160, 150 120, 120 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                <path d="M200 212 C 200 160, 150 120, 120 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 250, strokeDashoffset: 250 }}>
                    <animate attributeName="stroke-dashoffset" values="250;0;250" dur="5s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                </path>
                <circle cx="120" cy="40" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            </g>

            {/* 3. Center */}
            <g>
                <path d="M200 212 C 200 150, 200 100, 200 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                <path d="M200 212 C 200 150, 200 100, 200 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 210, strokeDashoffset: 210 }}>
                    <animate attributeName="stroke-dashoffset" values="210;0;210" dur="4.5s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                </path>
                <circle cx="200" cy="30" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            </g>

            {/* 4. Right Mid */}
            <g>
                <path d="M200 212 C 200 160, 250 120, 280 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                <path d="M200 212 C 200 160, 250 120, 280 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 250, strokeDashoffset: 250 }}>
                    <animate attributeName="stroke-dashoffset" values="250;0;250" dur="5.5s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                </path>
                <circle cx="280" cy="40" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            </g>

            {/* 5. Right Far */}
            <g>
                <path d="M200 212 C 200 150, 300 150, 350 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
                <path d="M200 212 C 200 150, 300 150, 350 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 300, strokeDashoffset: 300 }}>
                    <animate attributeName="stroke-dashoffset" values="300;0;300" dur="6s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                </path>
                <circle cx="350" cy="50" r="4" fill="white" stroke="currentColor" strokeWidth="2" />
            </g>

            {/* Central Hub (Bottom Center) - RENDERED LAST TO COVER LINE ORIGINS */}
            <g transform="translate(200, 240)">
                {/* Pulse Rings */}
                <circle r="30" fill="currentColor" opacity="0.1">
                    <animate attributeName="r" values="30;50;30" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0;0.1" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle r="40" fill="currentColor" opacity="0.05">
                    <animate attributeName="r" values="40;60;40" dur="4s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.05;0;0.05" dur="4s" repeatCount="indefinite" begin="1s" />
                </circle>

                {/* Main Icon */}
                <circle r="25" fill="white" stroke="#2563EB" strokeWidth="2" />
                <g transform="translate(-12, -12)">
                    <Zap size={24} className="text-accent" />
                </g>
            </g>

        </svg>
    )
}
