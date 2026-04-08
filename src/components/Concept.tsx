"use client"

import { useEffect, useRef, useState } from "react"

export default function Concept() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
    <section id="conceito" ref={ref} className="relative bg-concrete-950 overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 sm:py-32">
        {/* Section header */}
        <div className={`mb-16 sm:mb-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-mono text-xs tracking-[0.5em] text-fire-600 block mb-4">01 / CONCEITO</span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-concrete-100 leading-[0.9]">
            FOGO É A<br />
            <span className="text-fire-500">NOSSA</span><br />
            LINGUAGEM
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Big text block */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="border-l-4 border-fire-700 pl-6 sm:pl-8">
              <p className="text-lg sm:text-xl leading-relaxed text-concrete-300 mb-6">
                A <span className="text-fire-500 font-semibold">TRAÇO & FOGO</span> nasceu da obsessão com o ponto perfeito. Não existe termômetro que substitua o olho treinado. Não existe botão que faça o trabalho da brasa.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-concrete-400 mb-6">
                Cada corte é selecionado a dedo. Cada lenha é escolhida pelo aroma que solta. O sal grosso é manual, a espera é de horas, e o resultado é o que só o fogo lento e a paciência sabem produzir.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-concrete-500">
                Aqui você não vem só pra comer. Você vem pra sentir o rangido da gordura na grelha, o cheiro da fumaça subindo, o silêncio entre uma mordida e outra onde só existe sabor.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            {[
              { title: "Fogo de lenha", desc: "Eucalipto, carvalho e araçá. Cada madeira imprime uma alma diferente na carne." },
              { title: "Corte artesanal", desc: "Peito, costela, cupim, picanha — cada um respeitado no seu tempo e temperatura." },
              { title: "Sem pressa", desc: "De 8 a 14 horas de fogo baixo. Porque pressa é inimiga do sabor." },
            ].map((item, i) => (
              <div
                key={i}
                className="brute-border p-5 sm:p-6 bg-concrete-900/50 group hover:bg-concrete-900 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-fire-700 text-xs mt-1 flex-shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl text-concrete-200 group-hover:text-fire-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-concrete-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className={`mt-20 sm:mt-28 pt-12 border-t-4 border-concrete-800 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <blockquote className="font-display text-3xl sm:text-5xl md:text-6xl text-concrete-400 leading-[1.1] text-center max-w-4xl mx-auto">
            "QUEM TEM <span className="text-fire-500">FOGO</span> DENTRO<br />
            NÃO PRECISA DE <span className="text-fire-500">PRESSA</span>"
          </blockquote>
          <cite className="block text-center mt-6 font-mono text-xs tracking-[0.3em] text-concrete-600 not-italic">
            — MESTRE CAVIÚ, FUNDADOR
          </cite>
        </div>
      </div>
    </section>
  )
}
