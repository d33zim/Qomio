'use client'

import { useEffect } from 'react'

interface Lenis {
  raf: (time: number) => void
  destroy: () => void
}

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: Lenis | null = null

    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default

      lenis = new Lenis({
        duration: 0.7,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return null
}
