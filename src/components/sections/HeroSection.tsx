'use client'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '8rem 1.5rem 4rem',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '70vw',
        height: '70vw',
        maxWidth: '900px',
        maxHeight: '900px',
        background: 'radial-gradient(ellipse, rgba(0,100,200,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">

          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.9rem',
              background: 'rgba(0,212,255,0.1)',
              border: '1px solid rgba(0,212,255,0.25)',
              borderRadius: '20px',
              marginBottom: '1.75rem',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D4FF', boxShadow: '0 0 8px #00D4FF' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: '#00D4FF', textTransform: 'uppercase' }}>
                New York No-Fault Platform
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              One Platform.{' '}
              <span style={{
                color: '#00D4FF',
                textShadow: '0 0 30px rgba(0,212,255,0.4)',
              }}>
                Complete Control.
              </span>
            </h1>

            {/* Subheadline */}
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1rem',
              letterSpacing: '0.01em',
            }}>
              Navigate Healthcare With Intelligence.
            </h2>

            {/* Body */}
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: '480px',
            }}>
              AI-Powered Medical Documentation, No-Fault Workflow Automation,
              Revenue Cycle Management, and Practice Operations — built for
              Personal Injury and No-Fault clinics in New York.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
                Request Demo
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', padding: '0.85rem 1.75rem' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'rgba(0,212,255,0.15)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Play size={10} fill="currentColor" />
                </div>
                Explore Platform
              </button>
            </div>
          </div>

          {/* Right: C logo mark + dashboard preview */}
          <div className="hero-visual-wrap" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Large glowing C */}
            <div className="hero-logo-box" style={{ position: 'relative', width: '100%', maxWidth: '520px', aspectRatio: '1' }}>
              {/* Outer glow ring */}
              <div style={{
                position: 'absolute',
                inset: '5%',
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(0,212,255,0.06)',
                boxShadow: '0 0 80px rgba(0,100,200,0.15)',
              }} className="spin-slow" />

              {/* Real Cosmos logo mark */}
              <Image
                src="/cosmos-logo-mark.png"
                alt="Cosmos Medical Technologies"
                fill
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 50px rgba(0,150,255,0.35))' }}
                priority
              />

              {/* Floating stat card - top left */}
              <div className="hero-stat-card hero-stat-card-top" style={{
                position: 'absolute',
                top: '8%',
                left: '-5%',
                background: 'rgba(10,30,61,0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '10px',
                padding: '0.9rem 1.2rem',
                minWidth: '150px',
              }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Claims Processed</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: '#00D4FF' }}>$2.4M</div>
                <div style={{ fontSize: '0.7rem', color: '#4ade80' }}>▲ 18.6% this month</div>
              </div>

              {/* Floating stat card - bottom right */}
              <div className="hero-stat-card hero-stat-card-bottom" style={{
                position: 'absolute',
                bottom: '12%',
                right: '-5%',
                background: 'rgba(10,30,61,0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '10px',
                padding: '0.9rem 1.2rem',
                minWidth: '150px',
              }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>NF3s Generated</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>2,847</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Across 45 practices</div>
              </div>
            </div>

            {/* Mobile-only stat row, rendered below the logo instead of overlapping it */}
            <div className="hero-stats-mobile-row">
              <div className="hero-stat-card-mobile">
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Claims Processed</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#00D4FF' }}>$2.4M</div>
                <div style={{ fontSize: '0.7rem', color: '#4ade80' }}>▲ 18.6% this month</div>
              </div>
              <div className="hero-stat-card-mobile">
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>NF3s Generated</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>2,847</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Across 45 practices</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, transparent, rgba(4,14,32,0.8))',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
