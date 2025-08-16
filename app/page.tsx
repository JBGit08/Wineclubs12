import Hero from "@/components/hero"
import SearchSection from "@/components/search-section"
import FeaturedClubs from "@/components/featured-clubs"
import MemberBenefits from "@/components/member-benefits"
import WineClubTable from "@/components/wine-club-table"
import WineryDirectory from "@/components/winery-directory"
import ContactSection from "@/components/contact-section"
import DataTimestamp from "@/components/data-timestamp"
import EnhancedLegalFooter from "@/components/enhanced-legal-footer"
import PerformanceMonitor from "@/components/performance-monitor"
import SkipNavigation from "@/components/skip-navigation"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <SkipNavigation />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>
        <Hero />
        <SearchSection />
        <FeaturedClubs />
        <MemberBenefits />
        <WineClubTable />
        <WineryDirectory />
        <ContactSection />
        <DataTimestamp />
        <EnhancedLegalFooter />
        <PerformanceMonitor />
      </main>
      <BackToTop />
    </>
  )
}
