"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    setLoaded(true)
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-concrete-950">
      {/* Fire glow that follows cursor */}
      <div
        className="absolute pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(234,88,12,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Smoke particles */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 opacity-30">
        <div className="absolute bottom-0 w-16 h-16 bg-concrete-700 rounded-full animate-smoke-rise" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-0 left-8 w-20 h-20 bg-concrete-600 rounded-full animate-smoke-drift" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 right-4 w-12 h-12 bg-concrete-800 rounded-full animate-smoke-rise" style={{ animationDelay: "4s" }} />
      </div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 opacity-20">
        <div className="absolute bottom-0 left-12 w-14 h-14 bg-concrete-700 rounded-full animate-smoke-drift" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 w-10 h-10 bg-concrete-600 rounded-full animate-smoke-rise" style={{ animationDelay: "3s" }} />
      </div>

      {/* Ember floaters */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ember-float"
          style={{
            left: `${15 + i * 15}%`,
            bottom: `${10 + (i % 3) * 15}%`,
            animationDelay: `${i * 1.2}s`,
            width: "4px",
            height: "4px",
            background: "#f97316",
            borderRadius: "0%",
            boxShadow: "0 0 6px #ea580c, 0 0 12px #f97316",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal slash */}
      <div
        className="absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fire-800 to-transparent z-[2] opacity-40"
      />

      {/* Decorative corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-fire-800 z-[3] opacity-50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-fire-800 z-[3] opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        <div
          className={`overflow-hidden mb-4 ${loaded ? "animate-slide-up" : "opacity-0"}`}
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.5em] text-fire-600 uppercase">
            Churrasqueria Artesanal — Est. 2019
          </span>
        </div>

        <div
          className={`overflow-hidden ${loaded ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.85] tracking-[0.05em] text-concrete-100">
            <span className="block animate-text-glitch">TRAÇO</span>
            <span className="block animate-text-glitch text-fire-500" style={{ animationDelay: "0.1s" }}>
              &amp; FOGO
            </span>
          </h1>
        </div>

        <div
          className={`overflow-hidden mt-6 sm:mt-8 ${loaded ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 sm:w-24 bg-fire-700" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-concrete-500 uppercase">
              Carne crua. Fogo real. Sem atalhos.
            </p>
            <div className="h-[1px] w-12 sm:w-24 bg-fire-700" />
          </div>
        </div>

        <div
          className={`overflow-hidden mt-10 sm:mt-14 ${loaded ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cardapio"
              className="group relative font-mono text-sm tracking-[0.3em] bg-fire-600 text-concrete-950 px-10 py-4 hover:bg-fire-500 transition-all duration-200 hover:shadow-[6px_6px_0px_#ea580c] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] uppercase"
            >
              Ver Cardápio
            </a>
            <a
              href="#reservas"
              className="font-mono text-sm tracking-[0.3em] border-2 border-concrete-600 text-concrete-300 px-10 py-4 hover:border-fire-600 hover:text-fire-500 transition-all duration-300 uppercase"
            >
              Reservar Mesa
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto border-t-2 border-concrete-800 pt-8 ${loaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "1.2s" }}
        >
          {[
            { num: "12h", label: "defumação lenta" },
            { num: "100%", label: "carvão natural" },
            { num: "7", label: "anos de brasa" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl text-fire-500">{stat.num}</div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-concrete-500 mt-1 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 ${loaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "2s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-concrete-600 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-fire-600 to-transparent relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-fire-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
