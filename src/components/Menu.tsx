"use client"

import { useState, useEffect, useRef } from "react"

type MenuItem = {
  name: string
  desc: string
  price: string
  tag?: string
  time?: string
}

type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: "nobres",
    label: "CORTES NOBRES",
    items: [
      { name: "Picanha Premium", desc: "Seleção Angus, capa de gordura 3mm, sal grosso artesanal", price: "R$ 89", tag: "★ ASSINATURA", time: "25 min" },
      { name: "Costela 12h", desc: "Defumação lenta em lenha de eucalipto, cai na boca", price: "R$ 95", time: "12h de brasa" },
      { name: "Cupim no Bafo", desc: "Amaciado naturalmente, crosta caramelizada no fogo baixo", price: "R$ 79", tag: "FAVORITO", time: "8 min" },
      { name: "Bife de Chorizo", desc: "Corte argentino 400g, ponto argentino no sal e fogo", price: "R$ 109", time: "15 min" },
    ],
  },
  {
    id: "brasa",
    label: "NA BRASA",
    items: [
      { name: "Cordeiro Patagônico", desc: "Perna inteira no espeto, alecrim da serra e alho negro", price: "R$ 119", tag: "RARIDADE", time: "30 min" },
      { name: "Linguiça Artesanal", desc: "Produção própria, suína e bovina, com pimenta biquinho", price: "R$ 42", time: "12 min" },
      { name: "Fraldinha na Brasa", desc: "Marinação secreta, corte rente à fibra", price: "R$ 75", time: "18 min" },
      { name: "Maminha Inteira", desc: "Selada dos dois lados, interior rosado, suco próprio", price: "R$ 85", time: "20 min" },
    ],
  },
  {
    id: "acompanhamentos",
    label: "ACOMPANHAMENTOS",
    items: [
      { name: "Farofa de Brasa", desc: "Torrada na banha, bacon crocante, cebola caramelizada", price: "R$ 28" },
      { name: "Vinagrete do Fogo", desc: "Tomate assado na brasa, cebola roxa, coentrão fresco", price: "R$ 22" },
      { name: "Mandioca na Brasa", desc: "Cozida e depois selada, manteiga de garrafa", price: "R$ 24" },
      { name: "Arroz de Carreteiro", desc: "Com carne seca desfiada, alho frito e pimenta", price: "R$ 32" },
      { name: "Queijo Coalho", desc: "Assado no espeto com melado de cana e orégano", price: "R$ 26" },
    ],
  },
  {
    id: "bebidas",
    label: "BEBIDAS",
    items: [
      { name: "Caipirinha Artesanal", desc: "Cachaça artesanal mineira, limão siciliano, açúcar demerara", price: "R$ 32" },
      { name: "Cerveja de Defumação", desc: "Stout defumada em parceria com cervejaria parceira", price: "R$ 38", tag: "NOVIDADE" },
      { name: "Suco de Uva Integral", desc: "Uva bordô, prensamento artesanal, sem adição", price: "R$ 18" },
      { name: "Água Mineral", desc: "Com ou sem gás, garrafa de vidro 500ml", price: "R$ 12" },
    ],
  },
]

function MenuItemRow({ item, index }: { item: MenuItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group border-b-2 border-concrete-800 py-5 sm:py-6 px-4 sm:px-6 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display text-xl sm:text-2xl text-concrete-200 group-hover:text-fire-500 transition-colors duration-200 tracking-wide">
              {item.name}
            </h3>
            {item.tag && (
              <span className="font-mono text-[10px] tracking-[0.2em] bg-fire-700/30 text-fire-500 px-2 py-0.5 border border-fire-800">
                {item.tag}
              </span>
            )}
          </div>
          <p className="font-body text-sm text-concrete-500 mt-1 max-w-xl leading-relaxed">
            {item.desc}
          </p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 pt-2 sm:pt-0">
          {item.time && (
            <span className="font-mono text-[10px] tracking-wider text-concrete-600 hidden sm:block">
              {item.time}
            </span>
          )}
          <span className={`font-display text-2xl sm:text-3xl transition-all duration-300 ${isHovered ? "text-fire-500 scale-110" : "text-concrete-400"}`}>
            {item.price}
          </span>
        </div>
      </div>
      {/* Hover fill effect */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[2px] bg-fire-600 origin-left transition-transform duration-500"
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
      />
    </div>
  )
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].id)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const activeCategory = menuData.find((c) => c.id === activeTab)

  return (
    <section id="cardapio" ref={ref} className="relative bg-concrete-900 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 sm:py-32 relative z-10">
        {/* Section header */}
        <div className={`mb-12 sm:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-mono text-xs tracking-[0.5em] text-fire-600 block mb-4">02 / CARDÁPIO</span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-concrete-100 leading-[0.9]">
            DIRETO DA<br />
            <span className="text-fire-500">BRASA</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap gap-2 sm:gap-4 mb-10 sm:mb-14 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-mono text-xs sm:text-sm tracking-[0.2em] px-4 sm:px-6 py-3 border-2 transition-all duration-200 ${
                activeTab === cat.id
                  ? "border-fire-600 bg-fire-600/10 text-fire-500"
                  : "border-concrete-700 text-concrete-500 hover:border-concrete-500 hover:text-concrete-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="relative">
          {menuData.map((cat) => (
            <div
              key={cat.id}
              className={`transition-all duration-500 ${
                activeTab === cat.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"
              }`}
            >
              {cat.items.map((item, i) => (
                <MenuItemRow key={item.name} item={item} index={i} />
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 sm:mt-16 pt-8 border-t-2 border-concrete-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="font-mono text-sm text-concrete-500">
              → Cardápio completo disponível no restaurante. Consulte valores de rodízio.
            </p>
          </div>
          <a
            href="#reservas"
            className="font-mono text-xs tracking-[0.2em] border-2 border-fire-700 text-fire-500 px-6 py-3 hover:bg-fire-600 hover:text-concrete-950 transition-all duration-200 flex-shrink-0"
          >
            FAZER RESERVA →
          </a>
        </div>
      </div>
    </section>
  )
}
