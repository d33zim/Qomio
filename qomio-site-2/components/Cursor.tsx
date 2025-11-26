'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      const cursorDot = document.querySelector('.cursor-dot') as HTMLElement
      const cursorCircle = document.querySelector('.cursor-circle') as HTMLElement

      if (!cursorDot || !cursorCircle) return

      let mouseX = 0
      let mouseY = 0
      let cursorX = 0
      let cursorY = 0

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX
        mouseY = e.clientY
        gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 })
      }

      document.addEventListener('mousemove', handleMouseMove)

      gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.2
        cursorY += (mouseY - cursorY) * 0.2
        cursorCircle.style.left = cursorX + 'px'
        cursorCircle.style.top = cursorY + 'px'
      })

      // Hover effects
      const interactiveElements = document.querySelectorAll('a, button, .magnetic-btn')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'))
      })

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </>
  )
}
