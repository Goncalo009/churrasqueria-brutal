"use client";

import { useEffect, useRef } from "react";

export default function Concept() {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section ref={ref} className="py-28 sm:py-36 px-6" id="concepto">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal mb-14">
          <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.35em]">
            01 — Concepto
          </span>
        </div>

        {/* Title block — left aligned, brutal */}
        <div className="reveal mb-16 sm:mb-24">
          <h2
            className="font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#e8dccd] leading-[0.9]"
          >
            NADA DE
          </h2>
          <h2
            className="font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#c0432d] leading-[0.9] mt-1"
          >
            COMPlicações.
          </h2>
          <h2
            className="font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#e8dccd] leading-[0.9] mt-1"
          >
            SÓ CARVÃO
          </h2>
          <h2
            className="font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#e8dccd] leading-[0.9] mt-1"
          >
            E CARNE.
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — manifesto */}
          <div className="md:col-span-7">
            <p className="reveal text-lg sm:text-xl leading-relaxed text-[#b5a99a] max-w-lg font-[var(--font-body)]">
              Aqui não há{" "}
              <span className="text-[#c0432d]">sous-vide</span>, não há espuma,
              não há pinceladas de chefs na televisão. Há uma grelha de ferro com
              cinquenta anos, um forno de lenha, e um homem que sabe o ponto
              exacto entre o cru e o queimado.
            </p>
            <p className="reveal text-lg sm:text-xl leading-relaxed text-[#8a8176] max-w-lg mt-6 font-[var(--font-body)]">
              O resto é conversa. A carne fala por si.
            </p>
          </div>

          {/* Right — cards */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {[
              {
                title: "LENHA",
                desc: "Sobreiro e azinheira. Fogo lento 6 horas antes de abrir portas.",
              },
              {
                title: "GRELHA",
                desc: "Ferro fundido, 30 anos de uso. Quanto mais velha, mais carácter.",
              },
              {
                title: "TEMPO",
                desc: "Nada sai antes da hora. Se o ponto não está, espera. É assim.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="reveal-right border border-[#2d2624] px-6 py-5 transition-all duration-300 hover:border-[#c0432d] group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="font-[var(--font-display)] text-3xl tracking-wider text-[#e8dccd] group-hover:text-[#c0432d] transition-colors">
                  {card.title}
                </div>
                <p className="text-[#8a8176] text-sm mt-2 font-[var(--font-body)] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Blockquote — thick left border */}
        <div className="reveal mt-24 sm:mt-32 pl-8 border-l-2 border-[#c0432d]">
          <blockquote
            className="font-[var(--font-display)] text-3xl sm:text-5xl tracking-wider text-[#e8dccd] leading-tight"
          >
            "Se não consegue ver o fogo, não é churrasco."
          </blockquote>
          <cite className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.2em] mt-4 block not-italic">
            — Mestre José, fundador
          </cite>
        </div>
      </div>
    </section>
  );
}
