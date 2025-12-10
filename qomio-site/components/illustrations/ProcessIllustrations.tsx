'use client'

// Step 1: Meeting - Chat bubbles interacting
export function ProcessMeeting() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Bubble 1 (User) */}
            <g transform="translate(80, 80)">
                <path d="M0 20 Q 0 0, 20 0 H 120 Q 140 0, 140 20 V 80 Q 140 100, 120 100 H 20 Q 0 100, 0 80 Z" fill="white" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />
                <rect x="20" y="30" width="80" height="6" rx="3" fill="currentColor" opacity="0.1" />
                <rect x="20" y="45" width="100" height="6" rx="3" fill="currentColor" opacity="0.1" />
                <rect x="20" y="60" width="60" height="6" rx="3" fill="currentColor" opacity="0.1" />

                <animateTransform attributeName="transform" type="translate" values="80 80; 80 75; 80 80" dur="4s" repeatCount="indefinite" />
            </g>

            {/* Bubble 2 (Agent) */}
            <g transform="translate(180, 140)">
                <path d="M0 20 Q 0 0, 20 0 H 120 Q 140 0, 140 20 V 80 Q 140 100, 120 100 H 20 L 0 120 V 20 Z" fill="rgba(37,99,235,0.05)" stroke="currentColor" strokeWidth="2" strokeOpacity="1" />
                <rect x="20" y="30" width="90" height="6" rx="3" fill="currentColor" opacity="0.2" />
                <rect x="20" y="45" width="70" height="6" rx="3" fill="currentColor" opacity="0.2" />

                {/* Typing Dots */}
                <circle cx="30" cy="70" r="3" fill="currentColor">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="0s" />
                </circle>
                <circle cx="45" cy="70" r="3" fill="currentColor">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="60" cy="70" r="3" fill="currentColor">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" begin="1s" />
                </circle>

                <animateTransform attributeName="transform" type="translate" values="180 140; 180 145; 180 140" dur="4s" repeatCount="indefinite" begin="0.5s" />
            </g>
        </svg>
    )
}

// Step 2: Concept - Blueprint lines drawing
export function ProcessConcept() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Grid Background */}
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.05" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Blueprint Wireframe */}
            <g transform="translate(100, 50)">
                {/* Header */}
                <rect x="0" y="0" width="200" height="40" rx="4" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5 5" fill="none" />

                {/* Main Area */}
                <rect x="0" y="60" width="130" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="none">
                    <animate attributeName="stroke-dasharray" values="0,500; 500,0" dur="3s" fill="freeze" />
                </rect>

                {/* Sidebar */}
                <rect x="150" y="60" width="50" height="120" rx="4" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5 5" fill="none" />

                {/* Connection Lines (Measurements) */}
                <path d="M-20 60 V 180" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" markerStart="url(#dot)" markerEnd="url(#dot)" />
                <text x="-35" y="120" fontSize="10" fill="currentColor" opacity="0.5">100%</text>
            </g>

            {/* Pencil/Cursor drawing */}
            <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.5">
                <animateMotion path="M100 110 H 230 V 230 H 100 Z" dur="6s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

// Step 3: Implementation - Blocks stacking
export function ProcessBuild() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            <g transform="translate(200, 250)">
                {/* Block 1 (Base) */}
                <path d="M-80 0 L 0 40 L 80 0 L 0 -40 Z" fill="rgba(37,99,235,0.05)" stroke="currentColor" strokeWidth="2">
                    <animateTransform attributeName="transform" type="translate" values="0 50; 0 0" dur="1s" fill="freeze" />
                    <animate attributeName="opacity" values="0;1" dur="1s" fill="freeze" />
                </path>
                {/* Block 2 (Middle) */}
                <path d="M-80 -40 L 0 0 L 80 -40 L 0 -80 Z" fill="rgba(37,99,235,0.1)" stroke="currentColor" strokeWidth="2">
                    <animateTransform attributeName="transform" type="translate" values="0 -100; 0 0" dur="1s" begin="0.5s" fill="freeze" />
                    <animate attributeName="opacity" values="0;1" dur="1s" begin="0.5s" fill="freeze" />
                </path>
                {/* Block 3 (Top) */}
                <path d="M-80 -80 L 0 -40 L 80 -80 L 0 -120 Z" fill="rgba(37,99,235,0.2)" stroke="currentColor" strokeWidth="2">
                    <animateTransform attributeName="transform" type="translate" values="0 -100; 0 0" dur="1s" begin="1s" fill="freeze" />
                    <animate attributeName="opacity" values="0;1" dur="1s" begin="1s" fill="freeze" />
                </path>

                {/* Code Symbols floating */}
                <text x="-120" y="-80" fontSize="20" fill="currentColor" opacity="0.3">{`</>`}
                    <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -20" dur="3s" repeatCount="indefinite" />
                </text>
            </g>
        </svg>
    )
}

// Step 4: Launch - Rocket/Pulse
export function ProcessLaunch() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Pulse Rings */}
            <circle cx="200" cy="150" r="20" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <animate attributeName="r" values="20;100" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="150" r="20" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <animate attributeName="r" values="20;100" dur="2s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>

            {/* Central Icon (Rocket/Check) */}
            <circle cx="200" cy="150" r="30" fill="currentColor" className="text-accent" />
            <path d="M190 150 L 198 158 L 215 138" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

            {/* Particles */}
            <g transform="translate(200, 150)">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <line key={i} x1="40" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="2" transform={`rotate(${deg})`}>
                        <animate attributeName="x1" values="40;60" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="60;80" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
                    </line>
                ))}
            </g>
        </svg>
    )
}

// Step 5: Support - Infinity Loop
export function ProcessSupport() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            <path d="M100 150 C 100 100, 150 100, 200 150 C 250 200, 300 200, 300 150 C 300 100, 250 100, 200 150 C 150 200, 100 200, 100 150 Z"
                stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.2" />

            <path d="M100 150 C 100 100, 150 100, 200 150 C 250 200, 300 200, 300 150 C 300 100, 250 100, 200 150 C 150 200, 100 200, 100 150 Z"
                stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="20 400">
                <animate attributeName="stroke-dashoffset" values="0;840" dur="4s" repeatCount="indefinite" />
            </path>

            {/* Orbiting Dot */}
            <circle r="6" fill="currentColor">
                <animateMotion path="M100 150 C 100 100, 150 100, 200 150 C 250 200, 300 200, 300 150 C 300 100, 250 100, 200 150 C 150 200, 100 200, 100 150 Z" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Gear Icon in center */}
            <g transform="translate(184, 134) scale(0.5)">
                <path d="M16 4C16 1.79 17.79 0 20 0C22.21 0 24 1.79 24 4V7.2C25.24 7.74 26.39 8.41 27.42 9.21L29.7 7.7C31.5 6.55 33.81 7.15 34.96 8.95C36.11 10.75 35.51 13.06 33.71 14.21L31.42 15.68C31.79 16.99 32 18.36 32 19.8C32 21.24 31.79 22.61 31.42 23.92L33.71 25.39C35.51 26.54 36.11 28.85 34.96 30.65C33.81 32.45 31.5 33.05 29.7 31.9L27.42 30.39C26.39 31.19 25.24 31.86 24 32.4V35.6C24 37.81 22.21 39.6 20 39.6C17.79 39.6 16 37.81 16 35.6V32.4C14.76 31.86 13.61 31.19 12.58 30.39L10.3 31.9C8.5 33.05 6.19 32.45 5.04 30.65C3.89 28.85 4.49 26.54 6.29 25.39L8.58 23.92C8.21 22.61 8 21.24 8 19.8C8 18.36 8.21 16.99 8.58 15.68L6.29 14.21C4.49 13.06 3.89 10.75 5.04 8.95C6.19 7.15 8.5 6.55 10.3 7.7L12.58 9.21C13.61 8.41 14.76 7.74 16 7.2V4ZM20 12C15.58 12 12 15.58 12 20C12 24.42 15.58 28 20 28C24.42 28 28 24.42 28 20C28 15.58 24.42 12 20 12Z" fill="currentColor" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="10s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    )
}
