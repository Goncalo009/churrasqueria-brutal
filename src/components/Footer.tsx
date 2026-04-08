"use client";

import { useState } from "react";

const navLinks = [
  { href: "#concepto", label: "Concepto" },
  { href: "#carta", label: "Carta" },
  { href: "#reservas", label: "Reservas" },
  { href: "#local", label: "Local" },
];

const hours = [
  { days: "Ter — Sex", time: "12:00 – 00:00" },
  { days: "Sáb — Dom", time: "12:00 – 00:00" },
  { days: "Segunda", time: "Fechado" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="py-20 px-6 border-t border-[#2d2624]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-baseline gap-[2px] mb-6">
              <span className="font-[var(--font-display)] text-4xl tracking-wider text-[#e8dccd]">
                TRAÇO
              </span>
              <span className="text-[#c0432d] text-lg">&</span>
              <span className="font-[var(--font-display)] text-4xl tracking-wider text-[#e8dccd]">
                FOGO
              </span>
            </div>
            <p className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] leading-relaxed">
              Churrasqueira de bairro com carácter.<br />
              Desde 1987 — Lisboa.<br />
              Carvão, grelha e carne como deve ser.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <div className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.25em] mb-6">
              Navegar
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="brutal-link font-[var(--font-body)] text-[#8a8176] text-sm tracking-wide transition-colors hover:text-[#e8dccd]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Hours */}
          <div>
            <div className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.25em] mb-6">
              Horário
            </div>
            <div className="space-y-2">
              {hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between font-[var(--font-body)] text-sm"
                >
                  <span className="text-[#8a8176]">{h.days}</span>
                  <span
                    className={
                      h.time === "Fechado" ? "text-[#c0432d]" : "text-[#e8dccd]"
                    }
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <div className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.25em] mb-6">
              Novidades
            </div>
            {subscribed ? (
              <div className="font-[var(--font-body)] text-[#e8dccd] text-sm">
                Inscrição feita. Receberá as novidades da brasa.
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <p className="font-[var(--font-body)] text-[#8a8176] text-sm mb-3 leading-relaxed">
                  Receba menus especiais e eventos directamente no email.
                </p>
                <div className="flex gap-0">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-brutal flex-1 text-sm min-w-0 rounded-none"
                    placeholder="o.seu@email.pt"
                  />
                  <button
                    type="submit"
                    className="btn-fogo !py-[14px] !px-5 text-[0.6rem] shrink-0 whitespace-nowrap"
                  >
                    Subscrever
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="brutal-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} Traço & Fogo. Todos os direitos reservados.
          </p>
          <p className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.15em]">
            Feito com carvão e ferro.
          </p>
        </div>
      </div>
    </footer>
  );
}
