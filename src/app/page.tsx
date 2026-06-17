import StarsCanvas from '@/components/ui/StarsCanvas'
import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import PlatformOverview from '@/components/sections/PlatformOverview'
import DashboardSection from '@/components/sections/DashboardSection'
import WhoWeServe from '@/components/sections/WhoWeServe'
import EcosystemSection from '@/components/sections/EcosystemSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main style={{ position: 'relative', background: '#040E20', minHeight: '100vh' }}>
      {/* Animated starfield background */}
      <StarsCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Page sections */}
      <HeroSection />
      <TrustSection />
      <DashboardSection />
      <PlatformOverview />
      <WhoWeServe />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </main>
  )
}
