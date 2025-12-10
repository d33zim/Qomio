'use client'

// 1. Regional - Map Pin
export function WhyRegional() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Map Grid */}
            <defs>
                <pattern id="city-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.05" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#city-grid)" transform="rotate(45 200 150) scale(1.5)" />

            {/* River/Road */}
            <path d="M0 250 Q 100 200, 200 220 T 400 200" stroke="currentColor" strokeWidth="10" strokeOpacity="0.05" fill="none" />

            {/* Pin */}
            <g transform="translate(200, 130)">
                <path d="M0 0 C -20 0, -20 -30, 0 -30 C 20 -30, 20 0, 0 0 L 0 40 Z" fill="rgba(37,99,235,0.1)" stroke="currentColor" strokeWidth="2" transform="translate(0, -20)">
                    <animateTransform attributeName="transform" type="translate" values="0 -20; 0 -30; 0 -20" dur="2s" repeatCount="indefinite" />
                </path>
                <ellipse cx="0" cy="20" rx="10" ry="4" fill="currentColor" opacity="0.2">
                    <animate attributeName="rx" values="10;5;10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
                </ellipse>
            </g>
        </svg>
    )
}

// 2. Modern - 3D Spheres/Tech
export function WhyTech() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Floating Elements */}
            <circle cx="150" cy="150" r="40" fill="url(#sphereGrad1)" opacity="0.8">
                <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="120" r="25" fill="url(#sphereGrad2)" opacity="0.6">
                <animate attributeName="cy" values="120;130;120" dur="5s" repeatCount="indefinite" />
            </circle>
            <rect x="180" y="180" width="60" height="60" rx="10" fill="rgba(37,99,235,0.1)" stroke="currentColor" strokeWidth="1">
                <animateTransform attributeName="transform" type="rotate" values="0 210 210; 360 210 210" dur="20s" repeatCount="indefinite" />
            </rect>

            <defs>
                <radialGradient id="sphereGrad1">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="currentColor" />
                </radialGradient>
                <radialGradient id="sphereGrad2">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
                </radialGradient>
            </defs>

            {/* Connection lines */}
            <line x1="150" y1="150" x2="240" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
            </line>
        </svg>
    )
}

// 3. Transparent - Glass Layers
export function WhyTransparent() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            <g transform="translate(140, 80)">
                {/* Bottom Layer */}
                <rect x="0" y="40" width="120" height="140" rx="8" fill="white" stroke="currentColor" strokeOpacity="0.1" />

                {/* Text Lines */}
                <rect x="20" y="60" width="80" height="4" rx="2" fill="currentColor" opacity="0.1" />
                <rect x="20" y="75" width="60" height="4" rx="2" fill="currentColor" opacity="0.1" />

                {/* Middle Layer */}
                <rect x="20" y="20" width="120" height="140" rx="8" fill="rgba(255,255,255,0.8)" stroke="currentColor" strokeOpacity="0.2">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 10 -10; 0 0" dur="4s" repeatCount="indefinite" />
                </rect>

                {/* Top Layer (Lens) */}
                <rect x="40" y="0" width="120" height="140" rx="8" fill="rgba(37,99,235,0.05)" stroke="currentColor" strokeWidth="2">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 20 -20; 0 0" dur="4s" repeatCount="indefinite" />
                </rect>

                {/* Check mark for clarity */}
                <circle cx="100" cy="70" r="15" fill="currentColor">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 20 -20; 0 0" dur="4s" repeatCount="indefinite" />
                </circle>
                <path d="M92 70 L 98 76 L 108 64" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <animateTransform attributeName="transform" type="translate" values="0 0; 20 -20; 0 0" dur="4s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    )
}

// 4. Flexible - Speed/Motion
export function WhyFast() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Speed Lines */}
            <g>
                {[0, 1, 2, 3].map((i) => (
                    <rect key={i} x="50" y={80 + i * 40} width="200" height="2" fill="url(#speedGrad)" rx="1">
                        <animate attributeName="x" from="400" to="-200" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
                    </rect>
                ))}
            </g>
            <defs>
                <linearGradient id="speedGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
                </linearGradient>
            </defs>

            {/* Arrow/Chevron */}
            <path d="M220 100 L 260 150 L 220 200" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8">
                <animate attributeName="d" values="M220 100 L 260 150 L 220 200; M230 100 L 270 150 L 230 200; M220 100 L 260 150 L 220 200" dur="0.5s" repeatCount="indefinite" />
            </path>
            <path d="M180 100 L 220 150 L 180 200" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3">
                <animate attributeName="d" values="M180 100 L 220 150 L 180 200; M190 100 L 230 150 L 190 200; M180 100 L 220 150 L 180 200" dur="0.5s" repeatCount="indefinite" begin="0.1s" />
            </path>
        </svg>
    )
}
