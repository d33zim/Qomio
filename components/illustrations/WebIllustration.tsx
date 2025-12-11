'use client'

export default function WebIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            <defs>
                {/* Mask for the 'New' clean content */}
                <clipPath id="scan-mask">
                    <rect x="0" y="0" width="400" height="300">
                        {/* Mask grows from top to bottom, revealing the new content */}
                        <animate attributeName="height" values="0;320;320;0" dur="6s" repeatCount="indefinite" keyTimes="0;0.3;0.8;1" />
                    </rect>
                </clipPath>
            </defs>

            {/* Frame */}
            <rect x="50" y="40" width="300" height="220" rx="8" stroke="currentColor" strokeWidth="2" strokeOpacity="1" />
            <path d="M50 80 H350" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
            <circle cx="70" cy="60" r="3" fill="currentColor" fillOpacity="0.2" />
            <circle cx="85" cy="60" r="3" fill="currentColor" fillOpacity="0.2" />
            <circle cx="100" cy="60" r="3" fill="currentColor" fillOpacity="0.2" />

            {/* --- OLD / BAD LAYOUT (Underneath) --- */}
            <g opacity="0.4">
                {/* Chaotic Elements */}
                <rect x="70" y="100" width="80" height="60" rx="2" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="180" y="110" width="140" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="180" y="140" width="100" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="70" y="180" width="250" height="60" rx="2" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

                {/* 'Error' Crosses */}
                <path d="M90 120 L130 140" stroke="currentColor" strokeWidth="1" />
                <path d="M130 120 L90 140" stroke="currentColor" strokeWidth="1" />
            </g>

            {/* --- NEW / CLEAN LAYOUT (Revealed by Mask) --- */}
            <g clipPath="url(#scan-mask)">
                <rect x="50" y="40" width="300" height="220" rx="8" fill="#FAFAF8" /> {/* Cover background */}
                <path d="M50 80 H350" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" /> {/* Header separator again */}
                {/* Re-draw dots over background */}
                <circle cx="70" cy="60" r="3" fill="currentColor" fillOpacity="0.5" />
                <circle cx="85" cy="60" r="3" fill="currentColor" fillOpacity="0.5" />
                <circle cx="100" cy="60" r="3" fill="currentColor" fillOpacity="0.5" />

                {/* Clean Grid */}
                <rect x="70" y="100" width="120" height="140" rx="6" stroke="currentColor" strokeWidth="2" fill="rgba(37,99,235,0.05)" />
                <rect x="210" y="100" width="120" height="65" rx="6" stroke="currentColor" strokeWidth="2" fill="rgba(37,99,235,0.05)" />
                <rect x="210" y="175" width="120" height="65" rx="6" stroke="currentColor" strokeWidth="2" fill="rgba(37,99,235,0.05)" />

                {/* Checkmarks */}
                <circle cx="130" cy="170" r="15" fill="rgba(37,99,235,0.1)" />
                <path d="M122 170 L128 176 L138 164" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* --- SCAN LINE --- */}
            <path d="M50 0 H350" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8" className="drop-shadow-[0_0_10px_rgba(37,99,235,1)]">
                <animate attributeName="d" values="M50 40 H350; M50 260 H350; M50 260 H350; M50 40 H350" dur="6s" repeatCount="indefinite" keyTimes="0;0.3;0.8;1" />
                <animate attributeName="opacity" values="1;1;0;0" dur="6s" repeatCount="indefinite" keyTimes="0;0.3;0.31;1" />
            </path>

        </svg>
    )
}
