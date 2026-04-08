"use client";

import { useState, useEffect, useRef } from "react";

const categories = ["CARNE", "PORCO", "FRANGO", "ACOMPS"];

type MenuItem = { name: string; desc: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  CARNE: [
    { name: "Bife de Vazia", desc: "300g, grelhado na brasa com sal grosso, servido no ferro.", price: "22€" },
    { name: "Entrecosto", desc: "Assado lento em lenha de sobreiro durante 4 horas.", price: "18€" },
    { name: "Chuleta", desc: "600g para duas pessoas. Mal passada como deve ser.", price: "34€" },
    { name: "Picanha", desc: "Corte brasileiro selado ao vivo no ferro quente.", price: "26€" },
    { name: "Alcatra", desc: "Pedaço nobre, grelhado sobre brasas de azinheira.", price: "24€" },
  ],
  PORCO: [
    { name: "Costeletas", desc: "Marinadas em alho e colorau, grelhadas ao ponto.", price: "15€" },
    { name: "Secretos", desc: "Corte ibérico fumado 3 horas em lenha de sobreiro.", price: "17€" },
    { name: "Presa", desc: "Grelhada com pimentão, acompanhada de milho assado.", price: "16€" },
    { name: "Papo Seco de Leitão", desc: "Pão rijo com leitão assado à Bairrada.", price: "12€" },
  ],
  FRANGO: [
    { name: "Frango no Churrasco", desc: "Metade, marinado 24h em alho e limão, grelha directa.", price: "10€" },
    { name: "Coxas Desossadas", desc: "Grelhadas com ervas, crocantes por fora, sumosas por dentro.", price: "12€" },
    { name: "Asas Defumadas", desc: "Defumadas com aparas de sobreiro durante 2 horas.", price: "9€" },
  ],
  ACOMPS: [
    { name: "Batata a Murro", desc: "Forno de lenha, alho e coentros frescos.", price: "5€" },
    { name: "Salada Simples", desc: "Alface, tomate, cebola roxa e azeite virgem.", price: "4€" },
    { name: "Milho Assado", desc: "Na brasa com manteiga e pimenta preta.", price: "4€" },
    { name: "Pão de Alho", desc: "Feito na brasa, manteiga caseira e alho confitado.", price: "3€" },
    { name: "Feijão Verde", desc: "Cozido com chouriço, fogo lento como manda a tradição.", price: "5€" },
    { name: "Arroz de Tomate", desc: "Receita da avó Maria, feito ao minuto.", price: "4€" },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("CARNE");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(
              ".reveal, .menu-item-brutal"
            );
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".menu-item-brutal");
    items?.forEach((el, i) => {
      el.classList.remove("visible");
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  }, [activeTab]);

  const items = menuData[activeTab] || [];

  return (
    <section ref={ref} className="py-28 sm:py-36 px-6" id="carta">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal mb-6">
          <span className="font-[var(--font-brut)] text-[#c0432d] text-[0.55rem] uppercase tracking-[0.35em]">
            02 — Carta
          </span>
        </div>

        <h2 className="reveal font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl tracking-wider text-[#e8dccd] leading-[0.9] mb-14">
          O QUE SAI DA <span className="text-[#c0432d]">GRELHA.</span>
        </h2>

        {/* Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-[var(--font-brut)] text-[0.65rem] uppercase tracking-[0.15em] px-5 py-3 border transition-all duration-200 ${
                activeTab === cat
                  ? "border-[#c0432d] text-[#c0432d] bg-[#c0432d]/10"
                  : "border-[#2d2624] text-[#8a8176] hover:border-[#8a8176]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="menu-item-brutal py-6 border-b border-[#2d2624] flex items-baseline justify-between cursor-default"
              tabIndex={0}
            >
              <div className="flex-1 pr-4">
                <h3 className="font-[var(--font-display)] text-2xl tracking-wider text-[#e8dccd]">
                  {item.name}
                </h3>
                <p className="font-[var(--font-brut)] text-[0.72rem] text-[#8a8176] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="font-[var(--font-display)] text-2xl tracking-wider text-[#c0432d] shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal mt-10 font-[var(--font-brut)] text-[#6b6259] text-[0.6rem] uppercase tracking-[0.1em] leading-relaxed">
          * Os preços podem variar conforme o corte e o dia. Pergunte ao balcão para o especial do dia.
        </p>
      </div>
    </section>
  );
}
