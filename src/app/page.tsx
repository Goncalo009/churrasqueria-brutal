import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Menu from "@/components/Menu";
import Reservations from "@/components/Reservations";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1513] text-[#e8dccd] overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="brutal-divider" />
      <Concept />
      <div className="brutal-divider" />
      <Menu />
      <div className="brutal-divider" />
      <Reservations />
      <div className="brutal-divider" />
      <Location />
      <div className="brutal-divider" />
      <Footer />
    </main>
  );
}
