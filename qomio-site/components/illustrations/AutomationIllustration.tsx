'use client'

import { Zap } from 'lucide-react'

export default function AutomationIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Background Network Mesh */}
            <defs>
                <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dots)" />

            {/* Central Hub Pulse */}
            <g transform="translate(200, 150)">
                <circle r="30" fill="currentColor" opacity="0.1">
                    <animate attributeName="r" values="30;50;30" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0;0.1" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle r="40" fill="currentColor" opacity="0.05">
                    <animate attributeName="r" values="40;70;40" dur="4s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.05;0;0.05" dur="4s" repeatCount="indefinite" begin="1s" />
                </circle>

                {/* Core Icon Circle */}
                <circle r="25" fill="white" stroke="currentColor" strokeWidth="2" />
                <g transform="translate(-12, -12)">
                    <Zap size={24} className="text-accent" />
                </g>
            </g>

            {/* Connected Nodes */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
                <g key={i} transform={`translate(200, 150) rotate(${deg}) translate(80, 0)`}>
                    {/* Connection Line */}
                    <line x1="-55" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />

                    {/* Moving Data Packet */}
                    <circle r="2" fill="currentColor">
                        <animateMotion path="M-55 0 L 0 0" dur="6s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                    </circle>

                    {/* Outer Node */}
                    <circle r="8" fill="white" stroke="currentColor" strokeWidth="2" />
                    <circle r="3" fill="currentColor" opacity="0.5" />
                </g>
            ))}

        </svg>
    )
}
