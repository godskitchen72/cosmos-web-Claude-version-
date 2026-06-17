'use client'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  {
    label: 'Solutions',
    items: ['No-Fault Automation', 'Medical Documentation', 'Smart Billing', 'Practice Management'],
  },
  {
    label: 'Products',
    items: ['Front Desk Dashboard', 'MD Dashboard', 'No-Fault Center', 'Billing Intelligence', 'Patient Intake', 'AI Assistant'],
  },
  {
    label: 'Company',
    items: ['About Us', 'Careers', 'Partners', 'News'],
  },
  {
    label: 'Resources',
    items: ['Documentation', 'Blog', 'Webinars', 'Support'],
  },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(4,14,32,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            {/* SVG C with trailing stars logo mark */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Constellation C shape */}
              <path
                d="M32 10 Q20 4 10 12 Q4 17 4 22 Q4 30 12 34 Q20 38 30 34"
                stroke="url(#cGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"
              />
              {/* Cross/plus in center */}
              <rect x="15.5" y="12" width="3" height="11" rx="1.5" fill="url(#crossGrad)" />
              <rect x="11" y="16.5" width="12" height="3" rx="1.5" fill="url(#crossGrad)" />
              {/* Trailing star dots */}
              <circle cx="35" cy="8" r="1.2" fill="#00D4FF" opacity="0.9" />
              <circle cx="37" cy="11" r="0.8" fill="#00B8FF" opacity="0.7" />
              <circle cx="38" cy="14" r="0.6" fill="#00B8FF" opacity="0.5" />
              <circle cx="36" cy="5" r="0.6" fill="#00D4FF" opacity="0.6" />
              <defs>
                <linearGradient id="cGrad" x1="32" y1="10" x2="4" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0066CC" />
                </linearGradient>
                <linearGradient id="crossGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0099FF" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.15em', color: '#fff' }}>
                COSMOS
              </div>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: '#00B8FF', fontWeight: 500, marginTop: '-2px' }}>
                MEDICAL TECHNOLOGIES
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
            {navItems.map(item => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                    padding: '0.5rem 0.9rem',
                    background: 'transparent',
                    border: 'none',
                    color: activeDropdown === item.label ? '#00D4FF' : 'rgba(255,255,255,0.8)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                  <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>

                {/* Dropdown */}
                {activeDropdown === item.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    minWidth: '200px',
                    background: 'rgba(4,14,32,0.97)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    borderRadius: '8px',
                    padding: '0.5rem 0',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.05)',
                    zIndex: 200,
                  }}>
                    {item.items.map(sub => (
                      <a
                        key={sub}
                        href="#"
                        style={{
                          display: 'block',
                          padding: '0.6rem 1.2rem',
                          color: 'rgba(255,255,255,0.75)',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                          (e.target as HTMLElement).style.color = '#00D4FF'
                          ;(e.target as HTMLElement).style.background = 'rgba(0,212,255,0.05)'
                        }}
                        onMouseLeave={e => {
                          (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)'
                          ;(e.target as HTMLElement).style.background = 'transparent'
                        }}
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden md:flex">
            <button className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.4rem' }}>
              Request Demo
            </button>
            <button className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.4rem' }}>
              Contact Sales
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.5rem' }}
            className="md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{ padding: '1rem 1.5rem 1.5rem' }}>
          {navItems.map(item => (
            <div key={item.label} style={{ marginBottom: '1rem' }}>
              <div style={{ color: '#00D4FF', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {item.label}
              </div>
              {item.items.map(sub => (
                <a
                  key={sub}
                  href="#"
                  style={{ display: 'block', padding: '0.4rem 0', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}
                >
                  {sub}
                </a>
              ))}
            </div>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button className="btn-primary" style={{ flex: 1 }}>Request Demo</button>
            <button className="btn-secondary" style={{ flex: 1 }}>Contact Sales</button>
          </div>
        </div>
      )}
    </nav>
  )
}
