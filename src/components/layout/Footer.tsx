'use client'
import { Linkedin, Facebook, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Partners', 'News'],
  Solutions: ['Overview', 'Clinical', 'Billing', 'No-Fault'],
  Resources: ['Blog', 'Documentation', 'Webinars', 'Support'],
  Contact: ['Request Demo', 'Contact Sales', '(888) 555-0123', 'info@cosmosmedtech.com'],
}

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(0,212,255,0.1)',
      background: 'rgba(4,10,24,0.95)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
          className="grid-cols-1 md:grid-cols-5">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <path d="M32 10 Q20 4 10 12 Q4 17 4 22 Q4 30 12 34 Q20 38 30 34"
                  stroke="url(#footCGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <rect x="15.5" y="12" width="3" height="11" rx="1.5" fill="url(#footCross)" />
                <rect x="11" y="16.5" width="12" height="3" rx="1.5" fill="url(#footCross)" />
                <circle cx="35" cy="8" r="1.2" fill="#00D4FF" opacity="0.9" />
                <circle cx="37" cy="11" r="0.8" fill="#00B8FF" opacity="0.7" />
                <circle cx="38" cy="14" r="0.6" fill="#00B8FF" opacity="0.5" />
                <defs>
                  <linearGradient id="footCGrad" x1="32" y1="10" x2="4" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#0066CC" />
                  </linearGradient>
                  <linearGradient id="footCross" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#0099FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.12em', color: '#fff' }}>COSMOS</div>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.18em', color: '#00B8FF', fontWeight: 500 }}>MEDICAL TECHNOLOGIES</div>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '280px' }}>
              Navigate Healthcare With Intelligence.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#00B8FF', fontStyle: 'italic' }}>
              Smart Billing. Better Care.
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: '34px', height: '34px',
                    borderRadius: '6px',
                    background: 'rgba(10,30,61,0.8)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.45)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = '#00D4FF'
                    el.style.borderColor = 'rgba(0,212,255,0.35)'
                    el.style.background = 'rgba(0,212,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'rgba(255,255,255,0.45)'
                    el.style.borderColor = 'rgba(0,212,255,0.15)'
                    el.style.background = 'rgba(10,30,61,0.8)'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '1.25rem',
              }}>
                {section}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {links.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = '#00D4FF' }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(0,212,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Cosmos Medical Technologies. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Security'].map(item => (
              <a
                key={item}
                href="#"
                style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#00D4FF' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.3)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
