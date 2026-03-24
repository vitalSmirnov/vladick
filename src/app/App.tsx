import { MobileAppBanner } from "features"
import { FAQ, Footer, Header, Hero, Pricing, Privacy, Referral } from "sections"

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Manrope',sans-serif] selection:bg-[#FF7F50] selection:text-white">
      <MobileAppBanner />
      <Header />
      <main>
        <Hero />

        <Privacy />
        <Pricing />
        <Referral />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
