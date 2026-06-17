'use client'
import { Users, Heart, DollarSign, Brain, Building2, BarChart2 } from 'lucide-react'

const nodes = [
  { icon: Users, label: 'Cosmos\nIntake', color: '#00D4FF' },
  { icon: Heart, label: 'Cosmos\nEHR', color: '#00B8FF' },
  { icon: DollarSign, label: 'Cosmos\nBilling', color: '#0099FF' },
  { icon: Brain, label: 'Cosmos\nAI', color: '#00D4FF', center: true },
  { icon: Building2, label: 'Cosmos\nClearinghouse', color: '#00B8FF' },
  { icon: Users, label: 'Cosmos\nPatient Portal', color: '#0099FF' },
  { icon: BarChart2, label: 'Cosmos\nAnalytics', color: '#00D4FF' },
]

const whyCosmos = [
  'AI-Assisted Documentation',
  'NF2 Automation',
  'NF3 Automation',
  'Digital Signatures',
  'Integrated Billing',
  'Revenue Analytics',
  'CPT Assistance',
  'ICD-10 Assistance',
  'Patient Intake',
  'Practice Management',
]

export default function EcosystemSection() {
  return (
    <section style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 1.5rem',
      background: 'rgba(4,14,32,0.4)',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '80vw',
        height: '60vw',
        background: 'radial-gradient(ellipse, rgba(0,60,160,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Ecosystem */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.8rem',
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: '20px',
            marginBottom: '1.25rem',
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', color: '#00D4FF', textTransform: 'uppercase' }}>
              Interconnected
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}>
            The{' '}
            <span style={{ color: '#00D4FF' }}>Cosmos</span>
            {' '}Ecosystem
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', maxWidth: '420px', margin: '0 auto' }}>
            A connected platform. Unlimited possibilities.
          </p>
        </div>

        {/* Nodes */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '5rem',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(0,212,255,0.5), rgba(0,212,255,0.3), transparent)',
          }} />

          {nodes.map((node, i) => {
            const Icon = node.icon
            const isCenter = node.center
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', zIndex: 1 }}>
                <div
                  className={isCenter ? 'eco-node center-node' : 'eco-node'}
                  style={{
                    width: isCenter ? '88px' : '72px',
                    height: isCenter ? '88px' : '72px',
                    borderRadius: '50%',
                    background: isCenter
                      ? 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,102,204,0.4))'
                      : 'rgba(10,30,61,0.9)',
                    border: `1px solid ${isCenter ? 'rgba(0,212,255,0.5)' : 'rgba(0,212,255,0.2)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: node.color,
                    boxShadow: isCenter ? '0 0 30px rgba(0,212,255,0.25)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  <Icon size={isCenter ? 26 : 20} />
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.6)',
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.3,
                }}>
                  {node.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Cosmos */}
        <div style={{ borderTop: '1px solid rgba(0,212,255,0.1)', paddingTop: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              Why{' '}
              <span style={{ color: '#00D4FF' }}>Cosmos</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
          }}>
            {whyCosmos.map((item, i) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.9rem 1.25rem',
                  background: 'rgba(10,30,61,0.5)',
                  border: '1px solid rgba(0,212,255,0.1)',
                  borderRadius: '8px',
                  cursor: 'default',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,212,255,0.3)'
                  el.style.background = 'rgba(0,212,255,0.06)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,212,255,0.1)'
                  el.style.background = 'rgba(10,30,61,0.5)'
                }}
              >
                <div style={{
                  width: '20px', height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(0,212,255,0.15)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
