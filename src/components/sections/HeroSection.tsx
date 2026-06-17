'use client'
import { ArrowRight, Play, Shield, Lock, Cloud } from 'lucide-react'

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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="grid-cols-1 md:grid-cols-2">

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
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
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

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Shield size={14} />, label: 'HIPAA Compliant' },
                { icon: <Lock size={14} />, label: 'SOC 2 Type II' },
                { icon: <Cloud size={14} />, label: 'Cloud Secure' },
              ].map(badge => (
                <div key={badge.label} className="trust-badge">
                  <span style={{ color: '#00B8FF' }}>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: C logo mark + dashboard preview */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Large glowing C */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px', aspectRatio: '1' }}>
              {/* Outer glow ring */}
              <div style={{
                position: 'absolute',
                inset: '5%',
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(0,212,255,0.06)',
                boxShadow: '0 0 80px rgba(0,100,200,0.15)',
              }} className="spin-slow" />

              {/* Big C SVG */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 40px rgba(0,150,255,0.3))' }}
              >
                <defs>
                  <linearGradient id="heroC" x1="350" y1="60" x2="60" y2="300" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#0099FF" />
                    <stop offset="100%" stopColor="#0044CC" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <radialGradient id="crossGrad2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#0066CC" />
                  </radialGradient>
                </defs>

                {/* Constellation C outline - polygon/star style */}
                {/* Main C arc */}
                <path
                  d="M320 80 Q340 65 330 50 Q230 20 140 60 Q60 95 40 180 Q20 265 70 330 Q120 390 220 390 Q300 390 340 350 Q360 330 350 310"
                  stroke="url(#heroC)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />

                {/* Constellation polygon overlay on C */}
                <path
                  d="M310 75 L340 55 L320 80 L350 70 L330 95 L310 75"
                  stroke="rgba(0,212,255,0.5)" strokeWidth="1" fill="none"
                />
                <path
                  d="M140 60 L110 45 L80 70 L60 110 L50 150"
                  stroke="rgba(0,212,255,0.3)" strokeWidth="1" fill="none"
                />
                <path
                  d="M50 250 L40 280 L55 310 L80 340 L120 370 L160 385 L210 390"
                  stroke="rgba(0,212,255,0.3)" strokeWidth="1" fill="none"
                />
                <path
                  d="M340 340 L360 320 L350 300 L360 280"
                  stroke="rgba(0,212,255,0.4)" strokeWidth="1" fill="none"
                />

                {/* Constellation node dots */}
                {[
                  [310, 75], [340, 55], [350, 70], [330, 95],
                  [140, 60], [110, 45], [80, 70], [60, 110],
                  [50, 150], [40, 220], [50, 280], [80, 340],
                  [160, 385], [260, 392], [340, 360], [355, 330],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill="#00D4FF" opacity="0.8" />
                ))}

                {/* Trailing stars (top right of C opening) */}
                {[
                  [370, 50, 3], [385, 65, 2], [395, 80, 1.5],
                  [380, 40, 2], [395, 55, 1.5], [370, 30, 1],
                ].map(([cx, cy, r], i) => (
                  <circle key={i} cx={cx} cy={cy} r={r} fill="#00D4FF" opacity={0.9 - i * 0.12} />
                ))}

                {/* Center cross */}
                <rect x="183" y="148" width="34" height="104" rx="6" fill="url(#crossGrad2)" opacity="0.95" />
                <rect x="148" y="183" width="104" height="34" rx="6" fill="url(#crossGrad2)" opacity="0.95" />

                {/* Cross glow */}
                <rect x="183" y="148" width="34" height="104" rx="6" fill="url(#crossGrad2)" opacity="0.3" style={{ filter: 'blur(8px)' }} />
              </svg>

              {/* Floating stat card - top left */}
              <div style={{
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
              <div style={{
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
