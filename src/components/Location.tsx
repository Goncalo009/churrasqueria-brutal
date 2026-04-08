"use client"

import { useEffect, useRef, useState } from "react"

export default function Location() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="local" ref={ref} className="relative bg-concrete-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 sm:py-32">
        {/* Section header */}
        <div className={`mb-12 sm:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-mono text-xs tracking-[0.5em] text-fire-600 block mb-4">04 / LOCAL</span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-concrete-100 leading-[0.9]">
            ONDE <span className="text-fire-500">PEGA</span><br />FOGO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Info cards */}
          <div className={`lg:col-span-5 space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {[
              {
                icon: "📍",
                title: "ENDEREÇO",
                content: "Rua da Brasa, 741 — Vila Madalena\nSão Paulo, SP — CEP 05435-000",
              },
              {
                icon: "🕐",
                title: "HORÁRIO",
                content: "Terça a Domingo\n11h às 15h · Almoço\n18h às 23h · Jantar\n\nSegunda: fechado (a grelha descansa)",
              },
              {
                icon: "📞",
                title: "CONTATO",
                content: "(11) 98765-4321\ncontato@tracoefogo.com.br\n\n@tracoefogo — Instagram",
              },
            ].map((info, i) => (
              <div
                key={info.title}
                className={`brute-border bg-concrete-950/80 p-6 transition-all duration-300 cursor-default ${
                  hoveredInfo === i ? "border-fire-600 bg-concrete-950" : "border-concrete-700"
                }`}
                onMouseEnter={() => setHoveredInfo(i)}
                onMouseLeave={() => setHoveredInfo(null)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{info.icon}</span>
                  <div>
                    <h3 className="font-mono text-xs tracking-[0.3em] text-fire-600 mb-3">{info.title}</h3>
                    <p className="font-body text-sm text-concrete-400 whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Big CTA */}
            <a
              href="https://maps.google.com/?q=Rua+da+Brasa+741+Vila+Madalena+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-xs tracking-[0.3em] border-2 border-fire-700 text-fire-500 px-6 py-4 text-center hover:bg-fire-600 hover:text-concrete-950 transition-all duration-200 hover:shadow-[4px_4px_0px_#ea580c] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              ABRIR NO GOOGLE MAPS ↗
            </a>
          </div>

          {/* Map area */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative brute-border overflow-hidden bg-concrete-800" style={{ minHeight: "400px" }}>
              {/* Stylized map placeholder with brutalist treatment */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }} />

              {/* Grid coordinates */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-concrete-600 tracking-wider">
                -23.5432° S / 46.6913° W
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-concrete-600 tracking-wider">
                VILA MADALENA // SP
              </div>

              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                <div className="relative flex flex-col items-center">
                  <div className="w-8 h-8 bg-fire-600 border-2 border-concrete-100 flex items-center justify-center animate-pulse">
                    <span className="text-xs font-display text-concrete-950">T&F</span>
                  </div>
                  <div className="w-[1px] h-8 bg-fire-700" />
                  <div className="w-4 h-4 bg-fire-600 rotate-45 -mt-2" />
                  {/* Ripple */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-24 border border-fire-800 rounded-full animate-ping opacity-20" style={{ borderRadius: "0" }} />
                </div>
              </div>

              {/* Street labels (decorative) */}
              <div className="absolute bottom-16 left-8 font-mono text-[10px] text-concrete-700 tracking-[0.3em] rotate-90 origin-left">
                R. HARMONIA
              </div>
              <div className="absolute bottom-24 right-12 font-mono text-[10px] text-concrete-700 tracking-[0.3em]">
                R. DA BRASA
              </div>
              <div className="absolute bottom-36 left-20 font-mono text-[10px] text-concrete-700 tracking-[0.3em]">
                R. FRADIQUE MONTEIRO
              </div>

              {/* Border info */}
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-concrete-700 tracking-wider">
                MAP DATA © OPENSTREETMAP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
