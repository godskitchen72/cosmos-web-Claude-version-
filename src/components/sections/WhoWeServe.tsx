'use client'

const specialties = [
  {
    emoji: '🛡️',
    title: 'No-Fault Practices',
    desc: 'Purpose-built for NY No-Fault compliance. Automated NF2/NF3 generation, IME tracking, AOB management, and carrier coordination.',
  },
  {
    emoji: '⚖️',
    title: 'Personal Injury Clinics',
    desc: 'Full PI workflow from intake to billing. Attorney coordination, lien tracking, and legal-ready documentation.',
  },
  {
    emoji: '🦴',
    title: 'Chiropractors',
    desc: 'Chiropractic-specific SOAP notes, visit workflows, CPT coding, and insurance billing optimized for musculoskeletal care.',
  },
  {
    emoji: '🏃',
    title: 'Physical Therapy',
    desc: 'PT documentation, progress notes, exercise tracking, and functional outcome measures integrated with billing.',
  },
  {
    emoji: '🔬',
    title: 'Orthopedics',
    desc: 'Orthopedic templates, surgical documentation support, DME billing, and specialist referral workflows.',
  },
  {
    emoji: '🏥',
    title: 'Multi-Specialty Groups',
    desc: 'Centralized practice management for multi-provider groups — single platform, multiple specialties, unified billing.',
  },
]

export default function WhoWeServe() {
  return (
    <section id="solutions" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 1.5rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
              Specialty Focus
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
            Built For{' '}
            <span style={{ color: '#00D4FF', textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
              Your Specialty
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto' }}>
            Cosmos adapts to your clinical workflow — not the other way around.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {specialties.map((spec, i) => (
            <div
              key={spec.title}
              className="glass-card glass-card-hover"
              style={{
                padding: '2rem',
                borderRadius: '12px',
                cursor: 'default',
                position: 'relative',
              }}
            >
              {/* Number */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2rem',
                fontWeight: 700,
                color: 'rgba(0,212,255,0.06)',
                lineHeight: 1,
              }}>
                0{i + 1}
              </div>

              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{spec.emoji}</div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '0.6rem',
              }}>
                {spec.title}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
              }}>
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
