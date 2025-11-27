'use client'

import { useEffect, useRef } from 'react'

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number

  constructor(width: number, height: number) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.3
    this.vy = (Math.random() - 0.5) * 0.3
    this.size = Math.random() * 1.5
  }

  update(width: number, height: number) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) this.x = width
    if (this.x > width) this.x = 0
    if (this.y < 0) this.y = height
    if (this.y > height) this.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#cccccc'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles: Particle[] = []
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle(width, height))
    }

    let animationFrameId: number

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = 'rgba(0,0,0,0.04)'
      ctx.lineWidth = 1

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(width, height)
        particles[i].draw(ctx)
      }

      // Draw connections (start from i+1 to avoid duplicate connections)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
    />
  )
}
