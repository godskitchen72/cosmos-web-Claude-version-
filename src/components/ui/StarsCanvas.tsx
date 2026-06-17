'use client'
import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  twinkleSpeed: number
  twinkleOffset: number
}

interface ConstellationPoint {
  x: number
  y: number
  connections: number[]
}

export default function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const stars: Star[] = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }))

    // Constellation points (top area)
    const constellationPoints: ConstellationPoint[] = [
      { x: 0.65, y: 0.08, connections: [1, 3] },
      { x: 0.72, y: 0.12, connections: [0, 2, 4] },
      { x: 0.78, y: 0.09, connections: [1, 5] },
      { x: 0.68, y: 0.18, connections: [0, 4] },
      { x: 0.75, y: 0.20, connections: [1, 3, 5] },
      { x: 0.82, y: 0.15, connections: [2, 4] },
      { x: 0.60, y: 0.15, connections: [0, 3] },
      { x: 0.55, y: 0.10, connections: [6] },
      { x: 0.88, y: 0.07, connections: [5] },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Draw stars
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 100 + star.twinkleOffset)
        const currentOpacity = star.opacity * (0.7 + twinkle * 0.3)

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 230, 255, ${currentOpacity})`
        ctx.fill()

        // Bright stars get a glow
        if (star.size > 1.4) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 212, 255, ${currentOpacity * 0.12})`
          ctx.fill()
        }
      })

      // Draw constellation lines
      const pulse = Math.sin(time * 0.5) * 0.15 + 0.25
      constellationPoints.forEach((point, i) => {
        const px = point.x * canvas.width
        const py = point.y * canvas.height

        point.connections.forEach(j => {
          if (j > i) {
            const qx = constellationPoints[j].x * canvas.width
            const qy = constellationPoints[j].y * canvas.height
            ctx.beginPath()
            ctx.moveTo(px, py)
            ctx.lineTo(qx, qy)
            ctx.strokeStyle = `rgba(0, 212, 255, ${pulse})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })

        // Constellation node dot
        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${pulse + 0.2})`
        ctx.fill()
      })

      // Subtle earth horizon glow at bottom
      const horizonGrad = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 1.1,
        canvas.height * 0.1,
        canvas.width * 0.5, canvas.height * 1.1,
        canvas.height * 0.7
      )
      horizonGrad.addColorStop(0, 'rgba(0, 80, 180, 0.08)')
      horizonGrad.addColorStop(0.5, 'rgba(0, 50, 120, 0.04)')
      horizonGrad.addColorStop(1, 'transparent')
      ctx.fillStyle = horizonGrad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="stars-canvas"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
