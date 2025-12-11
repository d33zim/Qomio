'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted')
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-black/10 shadow-2xl p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
                <div className="text-secondary text-sm leading-relaxed max-w-3xl">
                    <p>
                        Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.
                        Weitere Informationen finden Sie in unserer{' '}
                        <Link href="/datenschutz" className="text-primary underline hover:text-cyan-500 transition-colors">
                            Datenschutzerklärung
                        </Link>.
                    </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button
                        onClick={handleDecline}
                        className="flex-1 md:flex-none px-4 py-2 text-xs font-mono uppercase tracking-widest border border-black/10 hover:bg-black/5 transition-colors rounded-sm"
                    >
                        Ablehnen
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-2 text-xs font-mono uppercase tracking-widest bg-primary text-white hover:bg-cyan-500 transition-colors rounded-sm"
                    >
                        Akzeptieren
                    </button>
                </div>
            </div>
        </div>
    )
}
