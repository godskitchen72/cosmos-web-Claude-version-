'use client'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section style={{
      position: 'relative',
      zIndex: 1,
      padding: '8rem 1.5rem',
      overflow: 'hidden',
    }}>
      {/* Big glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,100,200,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* C logo watermark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          opacity: 0.04,
          fontSize: '20rem',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          color: '#00D4FF',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}>
          C
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.3rem 0.8rem',
          background: 'rgba(0,212,255,0.08)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: '20px',
          marginBottom: '1.5rem',
        }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', color: '#00D4FF', textTransform: 'uppercase' }}>
            Get Started
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '1.25rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}>
          Ready To Transform{' '}
          <span style={{ color: '#00D4FF', textShadow: '0 0 30px rgba(0,212,255,0.4)' }}>
            Your Practice?
          </span>
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.7,
          marginBottom: '3rem',
          maxWidth: '520px',
          margin: '0 auto 3rem',
        }}>
          Join forward-thinking practices using Cosmos to streamline No-Fault
          compliance, accelerate revenue, and deliver better patient care.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '1rem',
              padding: '1rem 2.25rem',
            }}
          >
            <Calendar size={18} />
            Request A Demo
            <ArrowRight size={16} />
          </button>
          <button
            className="btn-secondary"
            style={{
              fontSize: '1rem',
              padding: '1rem 2rem',
            }}
          >
            Contact Sales
          </button>
        </div>

        {/* Sub text */}
        <p style={{
          marginTop: '1.75rem',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.3)',
        }}>
          No commitment required · HIPAA compliant · Dedicated onboarding support
        </p>
      </div>
    </section>
  )
}
