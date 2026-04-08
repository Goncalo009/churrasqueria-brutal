"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#concepto", label: "Concepto" },
  { href: "#carta", label: "Carta" },
  { href: "#reservas", label: "Reservas" },
  { href: "#local", label: "Local" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-scrolled py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-[2px] group">
          <span className="font-[var(--font-display)] text-2xl tracking-wider text-[#e8dccd] group-hover:text-[#c0432d] transition-colors duration-300">
            TRAÇO
          </span>
          <span className="text-[#c0432d] text-sm mx-[1px]">&</span>
          <span className="font-[var(--font-display)] text-2xl tracking-wider text-[#e8dccd] group-hover:text-[#c0432d] transition-colors duration-300">
            FOGO
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="brutal-link text-xs text-[#8a8176] font-[var(--font-brut)] tracking-[0.08em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservas"
            className="btn-fogo !py-2 !px-5 text-[0.65rem] tracking-[0.15em]"
          >
            Reservar
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-[1px] bg-[#e8dccd] transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : "w-[22px]"
            }`}
          />
          <span
            className={`block h-[1px] bg-[#e8dccd] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : "w-[22px]"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-6 bg-[#1a1513] border-b border-[#2d2624] flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="brutal-link text-sm text-[#8a8176] font-[var(--font-brut)] tracking-[0.08em] uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
