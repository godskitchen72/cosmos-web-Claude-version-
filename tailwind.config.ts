import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          navy: '#071B3A',
          midnight: '#0D2C5A',
          blue: '#00B8FF',
          cyan: '#00D4FF',
          dark: '#040E20',
          card: '#0A1E3D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at top, #0D2C5A 0%, #071B3A 40%, #040E20 100%)',
        'glow-cyan': 'radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13,44,90,0.8) 0%, rgba(4,14,32,0.9) 100%)',
      },
      animation: {
        'star-twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0,212,255,0.3)',
        'glow-md': '0 0 30px rgba(0,212,255,0.4)',
        'glow-lg': '0 0 60px rgba(0,212,255,0.3)',
        'card-border': '0 1px 0 rgba(0,212,255,0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(0,212,255,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
