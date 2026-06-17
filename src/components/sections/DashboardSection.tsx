'use client'

const patients = [
  { name: 'Maria Santos', provider: 'Dr. Williams', appt: '9:00 AM', status: 'Checked In', billing: 'Pending', flag: 'Needs MD Visit', flagColor: '#f59e0b' },
  { name: 'James Liu', provider: 'Dr. Martinez', appt: '9:30 AM', status: 'Confirmed', billing: 'NF3 Ready', flag: 'Incomplete NF3', flagColor: '#ef4444' },
  { name: 'Patricia Brown', provider: 'Dr. Williams', appt: '10:00 AM', status: 'Completed', billing: 'Submitted', flag: 'Completed Today', flagColor: '#22c55e' },
  { name: 'Robert Garcia', provider: 'Dr. Chen', appt: '10:30 AM', status: 'Scheduled', billing: 'Billing Ready', flag: 'Billing Ready', flagColor: '#00D4FF' },
  { name: 'Elena Russo', provider: 'Dr. Martinez', appt: '11:00 AM', status: 'Checked In', billing: 'In Review', flag: 'Needs MD Visit', flagColor: '#f59e0b' },
  { name: 'Michael Torres', provider: 'Dr. Chen', appt: '11:30 AM', status: 'Confirmed', billing: 'Submitted', flag: 'Completed Today', flagColor: '#22c55e' },
]

const statusColors: Record<string, string> = {
  'Checked In': 'rgba(0,212,255,0.2)',
  'Confirmed': 'rgba(99,102,241,0.2)',
  'Completed': 'rgba(34,197,94,0.2)',
  'Scheduled': 'rgba(148,163,184,0.15)',
}
const statusText: Record<string, string> = {
  'Checked In': '#00D4FF',
  'Confirmed': '#818cf8',
  'Completed': '#4ade80',
  'Scheduled': '#94a3b8',
}

const dashboardStats = [
  { label: "Today's Appointments", value: '28', sub: '14 checked in' },
  { label: 'Patient Intake', value: '12', sub: '12 pending' },
  { label: 'Billing Ready', value: '9', sub: 'Claims to submit' },
  { label: 'NF3 Alerts', value: '3', sub: 'Need attention' },
]

export default function DashboardSection() {
  return (
    <section id="dashboard" style={{
      position: 'relative',
      zIndex: 1,
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(7,27,58,0.3) 50%, transparent 100%)',
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
              Live Dashboard
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
            One Platform.{' '}
            <span style={{ color: '#00D4FF', textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
              Complete Control.
            </span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>
            Integrated solutions that work together to streamline your entire practice.
          </p>
        </div>

        {/* Mock dashboard UI */}
        <div style={{
          background: 'rgba(4,14,32,0.95)',
          border: '1px solid rgba(0,212,255,0.15)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.05), 0 0 60px rgba(0,100,200,0.1)',
        }}>
          {/* Dashboard top bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.5rem',
            background: 'rgba(7,27,58,0.8)',
            borderBottom: '1px solid rgba(0,212,255,0.1)',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Cosmos mini logo */}
              <div style={{
                width: '28px', height: '28px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,102,204,0.3))',
                border: '1px solid rgba(0,212,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700, color: '#00D4FF',
              }}>
                C+
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>
                Front Desk Dashboard
              </span>
            </div>
            <div className="dashboard-tabs" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Dashboard', 'Patients', 'Appointments', 'Intake', 'Billing', 'Tasks'].map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? '#00D4FF' : 'rgba(255,255,255,0.45)',
                    background: i === 0 ? 'rgba(0,212,255,0.1)' : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
              Mon, Jun 16, 2026
            </div>
          </div>

          <div style={{ padding: '1.5rem' }}>
            {/* Stat cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '0.875rem',
              marginBottom: '1.5rem',
            }}>
              {dashboardStats.map(stat => (
                <div
                  key={stat.label}
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(10,30,61,0.7)',
                    border: '1px solid rgba(0,212,255,0.1)',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.25rem' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Patient table */}
            <div style={{
              background: 'rgba(7,27,58,0.5)',
              border: '1px solid rgba(0,212,255,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              {/* Table header - hidden on mobile */}
              <div className="dashboard-table-header" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 90px 110px 100px 130px',
                padding: '0.6rem 1.25rem',
                background: 'rgba(0,212,255,0.04)',
                borderBottom: '1px solid rgba(0,212,255,0.08)',
                gap: '0.5rem',
              }}>
                {['Patient', 'Provider', 'Appt', 'Status', 'Billing', 'Flag'].map(h => (
                  <div key={h} style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {h}
                  </div>
                ))}
              </div>

              {/* Table rows - grid on desktop, stacked card on mobile */}
              {patients.map((p, i) => (
                <div
                  key={i}
                  className="dashboard-row dashboard-table-row"
                  style={{
                    borderBottom: i < patients.length - 1 ? '1px solid rgba(0,212,255,0.05)' : 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                >
                  <div className="dt-cell dt-name" style={{ fontSize: '0.8rem', fontWeight: 500, color: '#fff' }}>{p.name}</div>
                  <div className="dt-cell" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>{p.provider}</div>
                  <div className="dt-cell" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>{p.appt}</div>
                  <div className="dt-cell">
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      background: statusColors[p.status] || 'rgba(255,255,255,0.1)',
                      color: statusText[p.status] || '#fff',
                      whiteSpace: 'nowrap',
                    }}>
                      {p.status}
                    </span>
                  </div>
                  <div className="dt-cell" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>{p.billing}</div>
                  <div className="dt-cell">
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: `${p.flagColor}18`,
                      color: p.flagColor,
                      border: `1px solid ${p.flagColor}30`,
                      whiteSpace: 'nowrap',
                    }}>
                      {p.flag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
