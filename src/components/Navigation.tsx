"use client"

import { useState } from "react"

const links = [
  { label: "CONCEITO", href: "#conceito" },
  { label: "CARDÁPIO", href: "#cardapio" },
  { label: "RESERVAS", href: "#reservas" },
  { label: "LOCAL", href: "#local" },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50)
    })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-concrete-950/95 backdrop-blur-sm border-b-4 border-fire-600"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="group relative">
            <span className="font-display text-2xl sm:text-3xl tracking-[0.3em] text-fire-500 group-hover:text-fire-400 transition-colors duration-200">
              TRAÇO & FOGO
            </span>
            <span className="block h-[2px] w-0 bg-fire-600 group-hover:w-full transition-all duration-500 ease-out mt-1" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-[0.2em] text-concrete-400 hover:text-fire-500 transition-colors duration-200 hover-line py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservas"
              className="font-mono text-xs tracking-[0.2em] bg-fire-600 text-concrete-950 px-5 py-3 hover:bg-fire-500 transition-all duration-200 hover:shadow-[4px_4px_0px_#f97316] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              RESERVAR →
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-mono text-fire-500 text-sm tracking-widest p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? "[FECHAR]" : "[MENU]"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t-2 border-concrete-800 py-6 space-y-4 animate-fade-in">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-mono text-sm tracking-[0.2em] text-concrete-400 hover:text-fire-500 transition-colors py-2"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-fire-700 mr-3">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
