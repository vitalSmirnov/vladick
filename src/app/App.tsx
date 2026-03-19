import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Privacy } from "./components/Privacy"
import { Pricing } from "./components/Pricing"
import { Referral } from "./components/Referral"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Manrope',sans-serif] selection:bg-[#FF7F50] selection:text-white">
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
