"use client";

import { useEffect, useState } from "react";

const words = ["BRASA.", "FUMO.", "CARBONO.", "SABOR."];

function smokeParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 5 + i * 20 + Math.random() * 10,
    delay: i * 2.2 + Math.random() * 2,
    size: 80 + Math.random() * 60,
    duration: 10 + Math.random() * 6,
  }));
}

function emberParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 3 + Math.random() * 94,
    bottom: 10 + Math.random() * 30,
    delay: i * 0.8 + Math.random() * 3,
    duration: 5 + Math.random() * 5,
    size: 2 + Math.random() * 2,
  }));
}

export default function Hero() {
  const [word, setWord] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const w = setInterval(() => setWord((w) => (w + 1) % words.length), 2500);
    const t = setInterval(() => setTick((t) => t + 1), 1);
    return () => { clearInterval(w); clearInterval(t); };
  }, []);

  const smokes = smokeParticles(6);
  const embers = emberParticles(15);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Smoke wisps */}
      {smokes.map((s) => (
        <div
          key={s.id}
          className="smoke-wisp"
          style={{
            left: `${s.left}%`,
            bottom: "15%",
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Ember particles */}
      {embers.map((e) => {
        const phase = tick + e.id * 7;
        const x = Math.sin(phase * 0.02) * 8;
        const y = -Math.abs(Math.sin(phase * 0.015)) * 80;
        const op = Math.max(0, 1 - Math.abs(Math.sin(phase * 0.015)) * 1.5);
        return (
          <div
            key={e.id + "e"}
            className="ember-particle"
            style={{
              left: `${e.left}%`,
              bottom: `${e.bottom}%`,
              width: e.size,
              height: e.size,
              animationDelay: `${e.delay}s`,
              animationDuration: `${e.duration}s`,
            }}
          />
        );
      })}

      {/* Gradient overlay from bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(192,67,45,0.04) 0%, rgba(26,21,19,0.8) 60%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.3em] mb-8">
          Churrasqueira desde 1987 — Lisboa
        </p>

        <h1
          className="font-[var(--font-display)] text-[8rem] sm:text-[10rem] md:text-[13rem] leading-[0.85] tracking-wider text-[#e8dccd]"
          style={{ letterSpacing: "0.06em" }}
        >
          <span className="block">TRAÇO</span>
          <span
            className="block text-[#c0432d] text-[5rem] sm:text-[6rem] md:text-[7rem] tracking-wider"
            style={{ letterSpacing: "0.1em" }}
          >
            &
          </span>
          <span className="block heat-glow">FOGO</span>
        </h1>

        {/* Rotating word */}
        <div className="mt-10 h-8 flex items-center justify-center overflow-hidden">
          <div className="relative w-48 h-8 flex items-center justify-center">
            {words.map((w, i) => (
              <span
                key={w}
                className="absolute font-[var(--font-brut)] text-[#6b6259] text-[0.65rem] uppercase tracking-[0.25em] transition-all duration-700 ease-out"
                style={{
                  opacity: word === i ? 1 : 0,
                  transform: word === i ? "translateY(0)" : "translateY(8px)",
                }}
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#carta" className="btn-fogo">
            Ver Carta
          </a>
          <a href="#reservas" className="btn-outline">
            Reservar Mesa
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 sm:gap-20">
          {[
            { num: "37", label: "Anos na brasa" },
            { num: "1200°C", label: "Na grelha" },
            { num: "0", label: "Atalhos" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-[var(--font-display)] text-3xl sm:text-4xl tracking-wider text-[#c0432d]">
                {s.num}
              </div>
              <div className="font-[var(--font-brut)] text-[0.55rem] uppercase tracking-[0.25em] text-[#6b6259] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-[var(--font-brut)] text-[0.5rem] uppercase tracking-[0.3em] text-[#6b6259]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[#2d2624] relative overflow-hidden">
          <div className="absolute w-full bg-[#c0432d] scroll-line" />
        </div>
      </div>
    </section>
  );
}
