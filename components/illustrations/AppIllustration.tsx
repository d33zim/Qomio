'use client'

import { Bell, CheckCircle } from 'lucide-react'

export default function AppIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            <defs>
                <clipPath id="screen-mask">
                    <rect x="140" y="20" width="120" height="240" rx="16" />
                </clipPath>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Phone Frame */}
            <rect x="140" y="20" width="120" height="240" rx="16" stroke="currentColor" strokeWidth="3" fill="white" />
            <path d="M170 30 H230" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.1" />
            <path d="M180 245 H220" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.1" />

            {/* Screen Content Container */}
            <g clipPath="url(#screen-mask)">
                {/* Sliding Container for Swipe Effect */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0 0; -120 0; -120 0; 0 0; 0 0" dur="8s" repeatCount="indefinite" keyTimes="0;0.2;0.5;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1; 0 0 1 1" />

                    {/* --- SCREEN 1: DASHBOARD --- */}
                    <g transform="translate(140, 20)">
                        {/* Background */}
                        <rect x="0" y="0" width="120" height="240" fill="#FAFAF8" />

                        {/* Header */}
                        <rect x="0" y="0" width="120" height="50" fill="white" />
                        <rect x="15" y="15" width="20" height="20" rx="6" fill="rgba(37,99,235,0.1)" />
                        <path d="M22 21 L28 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <rect x="85" y="15" width="20" height="20" rx="10" fill="rgba(37,99,235,0.1)" />

                        {/* Dashboard Stats & Chart */}
                        <g transform="translate(0, 50)">
                            <rect x="10" y="10" width="100" height="60" rx="8" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                            <text x="20" y="30" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="sans-serif">Total Revenue</text>
                            <text x="20" y="45" fontSize="12" fill="currentColor" fontWeight="bold" fontFamily="sans-serif">€ 24.5k</text>

                            <path d="M20 55 Q 35 45, 50 52 T 80 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 70, strokeDashoffset: 70 }}>
                                <animate attributeName="stroke-dashoffset" to="0" dur="2s" begin="0.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
                            </path>
                            <path d="M20 55 Q 35 45, 50 52 T 80 40 V 70 H 20 Z" fill="url(#chart-gradient)" opacity="0">
                                <animate attributeName="opacity" to="1" dur="1s" begin="1.5s" fill="freeze" />
                            </path>
                        </g>

                        {/* Activity List */}
                        <g transform="translate(10, 130)">
                            <rect x="0" y="0" width="100" height="80" rx="8" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />

                            {[15, 40, 65].map((y, i) => (
                                <g key={i} transform={`translate(10, ${y})`}>
                                    <circle cx="10" cy="10" r="8" fill="rgba(37,99,235,0.1)" />
                                    <rect x="25" y="6" width={40 - i * 5} height="4" rx="2" fill="currentColor" opacity="0.2" />
                                    <rect x="25" y="13" width={20 - i * 2} height="3" rx="1.5" fill="currentColor" opacity="0.1" />
                                </g>
                            ))}
                        </g>
                    </g>

                    {/* --- SCREEN 2: PROFILE/SETTINGS --- */}
                    <g transform="translate(260, 20)">
                        <rect x="0" y="0" width="120" height="240" fill="#FAFAF8" />

                        {/* Profile Header */}
                        <rect x="0" y="0" width="120" height="80" fill="white" />
                        <circle cx="60" cy="35" r="20" fill="rgba(37,99,235,0.1)" />
                        <path d="M50 45 Q 60 55, 70 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none" />
                        <rect x="40" y="65" width="40" height="6" rx="3" fill="currentColor" opacity="0.2" />

                        {/* Settings List */}
                        <g transform="translate(10, 90)">
                            {[0, 1, 2, 3].map((i) => (
                                <g key={i} transform={`translate(0, ${i * 35})`}>
                                    <rect x="0" y="0" width="100" height="25" rx="6" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                                    <rect x="10" y="8" width="8" height="8" rx="2" fill="currentColor" opacity="0.2" />
                                    <rect x="25" y="10" width="40" height="4" rx="2" fill="currentColor" opacity="0.5" />
                                    {/* Toggle Switch */}
                                    <rect x="75" y="8" width="16" height="8" rx="4" fill={i === 0 || i === 2 ? "currentColor" : "#E5E7EB"} opacity={i === 0 || i === 2 ? "1" : "0.5"} />
                                    <circle cx={i === 0 || i === 2 ? 87 : 79} cy="12" r="2" fill="white" />
                                </g>
                            ))}
                        </g>
                    </g>

                </g>

                {/* Floating Notifications (Static relative to frame, fading in/out) */}
                <g transform="translate(150, 40)">
                    <foreignObject width="100" height="24">
                        <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm shadow-sm border border-black/5 text-[8px] font-medium text-secondary animate-in fade-in slide-in-from-bottom-2 duration-1000 fill-mode-forwards opacity-0"
                            style={{ animation: 'fade-in-out-notify 8s infinite 1s' }}>
                            <div className="w-3 h-3 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <Bell size={8} />
                            </div>
                            <span>Neue Nachricht</span>
                        </div>
                    </foreignObject>
                </g>
            </g>

            {/* Defined Keyframes for React/Tailwind usage if needed, mostly doing inline styles for SVG foreignObject */}
            <style>{`
        @keyframes fade-in-out-notify {
            0%, 20% { opacity: 0; transform: translateY(10px); }
            25%, 45% { opacity: 1; transform: translateY(0); }
            50%, 100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
        </svg>
    )
}
