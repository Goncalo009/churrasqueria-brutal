import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Concept from "@/components/Concept"
import Menu from "@/components/Menu"
import Reservations from "@/components/Reservations"
import Location from "@/components/Location"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Concept />
      <Menu />
      
      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-fire-700 to-transparent" />
      
      <Reservations />
      <Location />
      <Footer />
    </main>
  )
}
