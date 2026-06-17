'use client'
import { Stethoscope, FileText, DollarSign, Bot, BarChart2, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Medical Documentation',
    desc: 'AI-assisted SOAP notes, pain charts, ICD-10 and CPT coding with real-time clinical templates.',
    color: '#00D4FF',
    items: ['SOAP Notes', 'Pain Charts', 'ICD-10 & CPT Assistance', 'ePrescribe & Orders'],
  },
  {
    icon: FileText,
    title: 'No-Fault Automation',
    desc: 'Generate NF2 and NF3 documents instantly with built-in compliance and payer requirements.',
    color: '#00B8FF',
    items: ['NF2 Generation', 'NF3 Generation', 'AOB & Forms', 'IME Tracking'],
  },
  {
    icon: DollarSign,
    title: 'Smart Billing',
    desc: 'Automate claims, reduce denials, and accelerate collections with real-time billing intelligence.',
    color: '#0099FF',
    items: ['Claims Management', 'Denial Management', 'Accounts Receivable', 'ERA Processing'],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Intelligent automation reduces documentation time and improves accuracy across your practice.',
    color: '#00D4FF',
    items: ['AI Documentation', 'Auto-Coding', 'Smart Templates', 'Workflow Rules'],
  },
  {
    icon: BarChart2,
    title: 'Analytics & Insights',
    desc: 'Powerful dashboards give you visibility to make smarter, faster decisions.',
    color: '#00B8FF',
    items: ['Revenue Reports', 'Provider Analytics', 'Claim Tracking', 'KPI Dashboards'],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    desc: 'Built-in NY No-Fault rules, HIPAA safeguards, and audit-ready documentation.',
    color: '#0099FF',
    items: ['NY No-Fault Rules', 'HIPAA Controls', 'Audit Trail', 'Form Validation'],
  },
]

export default function PlatformOverview() {
  return (
    <section id="platform" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 1.5rem',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '40vw',
        background: 'radial-gradient(ellipse, rgba(0,80,180,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
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
              Platform Overview
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Everything Your Practice Needs
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Integrated solutions that work together to streamline your entire practice — from intake to collections.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.25rem',
        }}>
          {features.map(feature => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="glass-card glass-card-hover"
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0, right: 0,
                  width: '80px', height: '80px',
                  background: `radial-gradient(circle at top right, ${feature.color}10, transparent)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '10px',
                  background: `rgba(0,212,255,0.1)`,
                  border: `1px solid ${feature.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: feature.color,
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={22} />
                </div>

                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '0.6rem',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}>
                  {feature.desc}
                </p>

                {/* Feature list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {feature.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '5px', height: '5px',
                        borderRadius: '50%',
                        background: feature.color,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
