"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

export default function Reservations() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(
              ".reveal, .reveal-left, .reveal-right"
            );
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-28 sm:py-36 px-6" id="reservas">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal mb-14">
          <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.35em]">
            03 — Reservas
          </span>
        </div>

        <h2 className="reveal font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#e8dccd] leading-[0.9] mb-16">
          RESERVE A SUA <span className="text-[#c0432d]">MESA.</span>
        </h2>

        {submitted ? (
          /* Submitted state */
          <div className="reveal border border-[#c0432d] px-8 py-12 text-center">
            <div className="font-[var(--font-display)] text-6xl sm:text-8xl tracking-wider text-[#c0432d] mb-4">
              FEITO.
            </div>
            <p className="font-[var(--font-body)] text-[#8a8176] text-lg max-w-md mx-auto leading-relaxed">
              A sua reserva foi registada. Entraremos em contacto para confirmar.
              Até à brasa.
            </p>
          </div>
        ) : (
          /* Two-column layout */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — contact info */}
            <div className="md:col-span-5">
              <div className="reveal-left flex flex-col gap-8">
                {/* Phone */}
                <div className="border-b border-[#2d2624] pb-6">
                  <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.25em] mb-2">
                    Telefone
                  </div>
                  <a href="tel:+351213456789" className="brutal-link font-[var(--font-display)] text-2xl tracking-wider text-[#e8dccd]">
                    +351 21 345 6789
                  </a>
                </div>

                {/* Email */}
                <div className="border-b border-[#2d2624] pb-6">
                  <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.25em] mb-2">
                    Email
                  </div>
                  <a href="mailto:reservas@trasoefogo.pt" className="brutal-link font-[var(--font-body)] text-[#b5a99a]">
                    reservas@trasoefogo.pt
                  </a>
                </div>

                {/* Hours */}
                <div className="border-b border-[#2d2624] pb-6">
                  <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.25em] mb-3">
                    Horário
                  </div>
                  <div className="space-y-1 font-[var(--font-body)] text-[#b5a99a] text-sm">
                    <div className="flex justify-between">
                      <span>Ter — Sex</span>
                      <span className="text-[#e8dccd]">12:00 – 15:00 / 19:00 – 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sáb — Dom</span>
                      <span className="text-[#e8dccd]">12:00 – 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Segunda</span>
                      <span className="text-[#c0432d]">Fechado</span>
                    </div>
                  </div>
                </div>

                {/* Events */}
                <div>
                  <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.25em] mb-2">
                    Eventos & Grupos
                  </div>
                  <p className="font-[var(--font-body)] text-[#8a8176] text-sm leading-relaxed">
                    Grupos até 20 pessoas. Para eventos privados, contacte-nos directamente por email ou telefone. Organizamos jantares de empresa, aniversários e o que a brasa permitir.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — reservation form */}
            <div className="md:col-span-7 reveal-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      required
                      className="input-brutal"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="input-brutal"
                      placeholder="email@exemplo.pt"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      className="input-brutal"
                      placeholder="+351 ..."
                    />
                  </div>
                  <div>
                    <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                      Nº de Pessoas
                    </label>
                    <select required className="input-brutal">
                      <option value="">Seleccionar</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "pessoa" : "pessoas"}
                        </option>
                      ))}
                      <option value="11-15">11–15</option>
                      <option value="16-20">16–20</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                      Data
                    </label>
                    <input
                      type="date"
                      required
                      className="input-brutal"
                    />
                  </div>
                  <div>
                    <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                      Hora
                    </label>
                    <select required className="input-brutal">
                      <option value="">Seleccionar</option>
                      <optgroup label="Almoço">
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                      </optgroup>
                      <optgroup label="Jantar">
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.15em] mb-2">
                    Notas
                  </label>
                  <textarea
                    className="input-brutal"
                    placeholder="Alergias, ocasião especial, pedidos..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn-fogo w-full sm:w-auto text-center">
                  Reservar Mesa
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
