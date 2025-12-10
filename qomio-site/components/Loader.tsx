'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const loaderProgress = document.getElementById('loader-progress')
    const loaderText = document.getElementById('loader-text')
    const loader = document.getElementById('loader')

    if (!loaderProgress || !loaderText || !loader) return

    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false)
    })

    tl.to(loaderProgress, {
      width: '100%',
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: function() {
        loaderText.innerText = Math.round((this.progress() || 0) * 100) + '%'
      }
    })
    .to(loader, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power4.inOut',
      delay: 0.1
    })
  }, [])

  if (!isVisible) return null

  return (
    <div className="loader" id="loader">
      <div className="flex flex-col items-center gap-4">
        <div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter" id="loader-text">
          0%
        </div>
        <div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent w-0" id="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}
