"use client";

import { useEffect, useRef } from "react";

export default function Location() {
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
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 sm:py-36 px-6" id="local">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal mb-14">
          <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.35em]">
            04 — Onde Estamos
          </span>
        </div>

        <h2 className="reveal font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#e8dccd] leading-[0.9] mb-16">
          NO <span className="text-[#c0432d]">BAIRRO.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {/* Map placeholder — grid pattern */}
          <div className="md:col-span-7 reveal-left">
            <div
              className="relative w-full aspect-[4/3] border border-[#2d2624] overflow-hidden group"
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(45,38,36,0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(45,38,36,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Coordinate labels */}
              <div className="absolute top-3 left-3 font-[var(--font-brut)] text-[#6b6259] text-[0.5rem] tracking-widest">
                38.7223°N, 9.1393°W
              </div>
              {/* Street labels */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-[var(--font-brut)] text-[#8a8176] text-[0.6rem] tracking-wider uppercase">
                <span className="border-b border-[#c0432d] pb-1">
                  Rua da Grelha, 47
                </span>
                <span className="text-[#6b6259]">Alfama</span>
              </div>
              {/* Cross street label */}
              <div
                className="absolute top-1/2 right-4 font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] tracking-widest uppercase"
                style={{ transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center center", whiteSpace: "nowrap" }}
              >
                Beco do Carvão
              </div>
              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div
                    className="w-3 h-3 bg-[#c0432d] animate-ping opacity-40"
                    style={{ borderRadius: 0, position: "relative" }}
                  />
                  <div
                    className="w-3 h-3 bg-[#c0432d] -mt-3"
                    style={{ borderRadius: 0 }}
                  />
                  <div
                    className="w-10 h-10 border border-[#c0432d] opacity-40 -mt-[46px] -ml-[16px]"
                    style={{ borderRadius: 0, position: "relative" }}
                  />
                </div>
              </div>
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-[#c0432d]/0 group-hover:bg-[#c0432d]/[0.03] transition-colors duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Right — address & transport info */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="reveal-right border-b border-[#2d2624] pb-6">
              <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.25em] mb-2">
                Morada
              </div>
              <p className="font-[var(--font-display)] text-2xl tracking-wider text-[#e8dccd]">
                Rua da Grelha, 47
              </p>
              <p className="font-[var(--font-body)] text-[#b5a99a] mt-1">
                1100-129 Lisboa, Portugal
              </p>
            </div>

            <div className="reveal-right border-b border-[#2d2624] pb-6">
              <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.55rem] uppercase tracking-[0.25em] mb-3">
                Como Chegar
              </div>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.65rem] mt-[2px] min-w-[20px]">
                    M
                  </span>
                  <div>
                    <div className="font-[var(--font-body)] text-[#e8dccd] text-sm">
                      Metro — Santa Apolónia (Linha Azul)
                    </div>
                    <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] mt-0.5">
                      5 minutos a pé
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.65rem] mt-[2px] min-w-[20px]">
                    E
                  </span>
                  <div>
                    <div className="font-[var(--font-body)] text-[#e8dccd] text-sm">
                      Elétrico 28E — Paragem Sé
                    </div>
                    <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] mt-0.5">
                      3 minutos a pé
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.65rem] mt-[2px] min-w-[20px]">
                    A
                  </span>
                  <div>
                    <div className="font-[var(--font-body)] text-[#e8dccd] text-sm">
                      Autocarro — 737, 794
                    </div>
                    <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] mt-0.5">
                      Paragem Miradouro de Santa Luzia
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.65rem] mt-[2px] min-w-[20px]">
                    C
                  </span>
                  <div>
                    <div className="font-[var(--font-body)] text-[#e8dccd] text-sm">
                      Carro — Estacionamento na Rua dos Remédios
                    </div>
                    <div className="font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] mt-0.5">
                      Zona verde, tarifa normal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <a
                href="https://maps.google.com/?q=38.7223,-9.1393"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fogo w-full text-center"
              >
                Abrir no Mapa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
