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

      const tickerCallback = () => {
        cursorX += (mouseX - cursorX) * 0.2
        cursorY += (mouseY - cursorY) * 0.2
        cursorCircle.style.left = cursorX + 'px'
        cursorCircle.style.top = cursorY + 'px'
      }

      gsap.ticker.add(tickerCallback)

      // Hover effects
      const interactiveElements = document.querySelectorAll('a, button, .magnetic-btn')
      const hoverHandlers = new Map<Element, { enter: EventListener; leave: EventListener }>()

      interactiveElements.forEach(el => {
        const enterHandler = () => document.body.classList.add('hover-active')
        const leaveHandler = () => document.body.classList.remove('hover-active')

        el.addEventListener('mouseenter', enterHandler)
        el.addEventListener('mouseleave', leaveHandler)
        hoverHandlers.set(el, { enter: enterHandler, leave: leaveHandler })
      })

      // Cleanup function
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        gsap.ticker.remove(tickerCallback)
        hoverHandlers.forEach((h, el) => {
          el.removeEventListener('mouseenter', h.enter)
          el.removeEventListener('mouseleave', h.leave)
        })
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
