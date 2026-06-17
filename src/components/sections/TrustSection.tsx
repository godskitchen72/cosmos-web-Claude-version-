'use client'
import { Shield, Lock, Cloud, Zap, Brain, BarChart3 } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'HIPAA Compliant', desc: 'PHI Protected' },
  { icon: Lock, label: 'Enterprise Security', desc: 'SOC 2 Type II' },
  { icon: Cloud, label: 'Cloud Infrastructure', desc: 'AWS / Vercel' },
  { icon: Zap, label: 'Real-Time Analytics', desc: 'Live Dashboards' },
  { icon: Brain, label: 'AI-Powered Workflow', desc: 'Documentation AI' },
  { icon: BarChart3, label: 'Revenue Cycle', desc: 'Full RCM Suite' },
]

export default function TrustSection() {
  return (
    <section style={{
      position: 'relative',
      zIndex: 1,
      padding: '4rem 1.5rem',
      borderTop: '1px solid rgba(0,212,255,0.08)',
      borderBottom: '1px solid rgba(0,212,255,0.08)',
      background: 'rgba(4,14,32,0.6)',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
          }}>
            Built for Enterprise Healthcare
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
        }}>
          {badges.map(badge => {
            const Icon = badge.icon
            return (
              <div
                key={badge.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1.25rem 1rem',
                  background: 'rgba(10,30,61,0.5)',
                  border: '1px solid rgba(0,212,255,0.1)',
                  borderRadius: '8px',
                  cursor: 'default',
                  transition: 'all 0.3s',
                  textAlign: 'center',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,212,255,0.35)'
                  el.style.background = 'rgba(0,212,255,0.06)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,212,255,0.1)'
                  el.style.background = 'rgba(10,30,61,0.5)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#00D4FF',
                }}>
                  <Icon size={18} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  {badge.label}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
                  {badge.desc}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
