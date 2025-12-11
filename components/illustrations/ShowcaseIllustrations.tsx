'use client'

import { Calendar, TrendingUp, ShoppingCart, Search, User, CreditCard } from 'lucide-react'

// --- 1. BOOKING SYSTEM ILLUSTRATION ---
export function BookingIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Abstract Background Map */}
            <path d="M0 0 H400 V300 H0 Z" fill="#F8FAFC" />
            <path d="M50 50 Q 150 20, 250 80 T 400 120" stroke="currentColor" strokeWidth="2" strokeOpacity="0.05" fill="none" />
            <path d="M-20 150 Q 80 180, 200 150 T 420 200" stroke="currentColor" strokeWidth="2" strokeOpacity="0.05" fill="none" />

            {/* Calendar / Search Interface */}
            <g transform="translate(60, 60)">
                {/* Main Card */}
                <rect x="0" y="0" width="280" height="180" rx="12" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" className="drop-shadow-sm" />

                {/* Header */}
                <rect x="20" y="20" width="100" height="10" rx="5" fill="currentColor" opacity="0.1" />
                <rect x="230" y="20" width="30" height="30" rx="15" fill="currentColor" opacity="0.05" />

                {/* Date Picker Input */}
                <g transform="translate(20, 50)">
                    <rect x="0" y="0" width="240" height="40" rx="8" fill="#F1F5F9" />
                    <Calendar size={16} className="text-secondary" x="15" y="12" opacity="0.5" />
                    <rect x="40" y="15" width="80" height="6" rx="3" fill="currentColor" opacity="0.2" />
                    <rect x="40" y="25" width="40" height="4" rx="2" fill="currentColor" opacity="0.1" />

                    {/* Search Button */}
                    <rect x="190" y="5" width="45" height="30" rx="6" fill="currentColor" opacity="0.1" />
                    <Search size={14} className="text-accent" x="205" y="13" />
                </g>

                {/* Results List */}
                <g transform="translate(20, 110)">
                    {[0, 1, 2].map((i) => (
                        <g key={i} transform={`translate(0, ${i * 50})`}>
                            <rect x="0" y="0" width="240" height="40" rx="8" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.05" />
                            {/* Image placeholder */}
                            <rect x="5" y="5" width="40" height="30" rx="4" fill="currentColor" opacity="0.05" />
                            {/* Text lines */}
                            <rect x="55" y="10" width="80" height="6" rx="3" fill="currentColor" opacity="0.2" />
                            <rect x="55" y="22" width="50" height="4" rx="2" fill="currentColor" opacity="0.1" />
                            {/* Price Tag */}
                            <rect x="190" y="10" width="40" height="20" rx="4" fill="currentColor" opacity="0.05" />
                        </g>
                    ))}
                </g>

                {/* Selecting Animation Hand/Cursor */}
                <circle cx="210" cy="80" r="10" fill="rgba(37,99,235,0.2)" opacity="0">
                    <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="r" values="10;20" dur="2s" repeatCount="indefinite" begin="1s" />
                </circle>
            </g>
        </svg>
    )
}

// --- 2. SAAS ANALYTICS DASHBOARD ---
export function AnalyticsIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            <defs>
                <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Sidebar */}
            <rect x="40" y="40" width="50" height="220" rx="8" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.05" />
            {[...Array(5)].map((_, i) => (
                <rect key={i} x="55" y={70 + i * 25} width="20" height="20" rx="4" fill="currentColor" opacity={i === 0 ? "0.2" : "0.05"} />
            ))}

            {/* Main Dash */}
            <rect x="100" y="40" width="260" height="220" rx="8" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.05" />

            {/* Header */}
            <rect x="120" y="60" width="100" height="12" rx="4" fill="currentColor" opacity="0.1" />

            {/* Big Chart */}
            <g transform="translate(120, 100)">
                <rect x="0" y="0" width="220" height="100" rx="8" fill="#F8FAFC" />
                <path d="M0 80 Q 50 20, 110 50 T 220 30 V 100 H 0 Z" fill="url(#chart-fill)" />
                <path d="M0 80 Q 50 20, 110 50 T 220 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                    <animate attributeName="d" values="M0 80 Q 50 20, 110 50 T 220 30; M0 80 Q 50 40, 110 60 T 220 20; M0 80 Q 50 20, 110 50 T 220 30" dur="5s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Cards Row */}
            <g transform="translate(120, 210)">
                <rect x="0" y="0" width="65" height="40" rx="6" fill="#F8FAFC" />
                <TrendingUp size={12} className="text-green-500" x="10" y="14" />
                <rect x="30" y="12" width="20" height="4" rx="2" fill="currentColor" opacity="0.2" />

                <rect x="75" y="0" width="65" height="40" rx="6" fill="#F8FAFC" />
                <rect x="150" y="0" width="70" height="40" rx="6" fill="#F8FAFC" />
            </g>
        </svg>
    )
}

// --- 3. E-COMMERCE ILLUSTRATION ---
export function EcommerceIllustration() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-full text-accent" fill="none">
            {/* Mobile Phone Frame */}
            <rect x="140" y="20" width="120" height="260" rx="16" stroke="currentColor" strokeWidth="2" fill="white" />
            <rect x="170" y="30" width="60" height="4" rx="2" fill="currentColor" opacity="0.1" /> {/* Speaker */}

            <g transform="translate(140, 20)">
                {/* Hero Image Area */}
                <rect x="10" y="50" width="100" height="80" rx="8" fill="#F1F5F9" />
                <rect x="35" y="75" width="50" height="30" rx="4" fill="currentColor" opacity="0.05" />

                {/* Product Title & Price */}
                <rect x="10" y="140" width="70" height="8" rx="4" fill="currentColor" opacity="0.2" />
                <rect x="10" y="155" width="40" height="8" rx="4" fill="currentColor" opacity="0.1" />
                <rect x="80" y="155" width="30" height="8" rx="4" fill="currentColor" opacity="0.3" /> {/* Price */}

                {/* Size Selector */}
                <g transform="translate(10, 180)">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                    <text x="7" y="13" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="sans-serif">S</text>
                    <circle cx="35" cy="10" r="8" fill="currentColor" opacity="0.1" />
                    <text x="32" y="13" fontSize="8" fill="currentColor" fontWeight="bold" fontFamily="sans-serif">M</text>
                    <circle cx="60" cy="10" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                    <text x="58" y="13" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="sans-serif">L</text>
                </g>

                {/* Add to Cart Button */}
                <g transform="translate(10, 215)">
                    <rect x="0" y="0" width="100" height="30" rx="15" fill="currentColor" opacity="0.1" />

                    <g transform="translate(30, 8)">
                        <ShoppingCart size={14} className="text-accent" />
                        <rect x="20" y="4" width="30" height="6" rx="3" fill="currentColor" opacity="0.8" />
                    </g>

                    {/* Pulse Effect */}
                    <rect x="0" y="0" width="100" height="30" rx="15" stroke="currentColor" strokeWidth="2" opacity="0">
                        <animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="stroke-width" values="0;4" dur="2s" repeatCount="indefinite" />
                    </rect>
                </g>
            </g>

            {/* Floating Cart Notification */}
            <g transform="translate(240, 60)">
                <rect x="0" y="0" width="100" height="40" rx="8" fill="white" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" className="drop-shadow-md" />
                <div style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <CheckCircleIcon />
                </div>
            </g>
        </svg>
    )
}

function CheckCircleIcon() {
    return (
        <g transform="translate(10, 10)">
            <circle cx="10" cy="10" r="8" fill="rgba(34, 197, 94, 0.1)" />
            <path d="M6 10 L 9 13 L 14 7" stroke="rgb(34, 197, 94)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="25" y="6" width="50" height="4" rx="2" fill="currentColor" opacity="0.1" />
            <rect x="25" y="13" width="30" height="3" rx="1.5" fill="currentColor" opacity="0.05" />
        </g>
    )
}
