"use client"

import { useState, useRef, useEffect } from "react"
import { useId } from "react"

export default function Reservations() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState<{
    name: string; email: string; date: string; time: string; guests: string; notes: string
  }>({ name: "", email: "", date: "", time: "", guests: "2", notes: "" })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const inputBase = (field: string) =>
    `w-full bg-concrete-900 border-2 ${
      focusedField === field ? "border-fire-600" : "border-concrete-700"
    } px-4 py-4 font-mono text-sm text-concrete-200 placeholder:text-concrete-600 focus:outline-none focus:border-fire-600 transition-colors duration-200`

  if (submitted) {
    return (
      <section id="reservas" className="bg-concrete-950 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-32 sm:py-40 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="font-display text-6xl sm:text-8xl text-fire-500 mb-6 animate-burn">✓</div>
            <h2 className="font-display text-4xl sm:text-6xl text-concrete-100 mb-4">RESERVA FEITA</h2>
            <p className="font-body text-lg text-concrete-400 mb-8">
              Você vai receber a confirmação por e-mail. Prepare o estômago e deixe a roupa justa em casa.
            </p>
            <div className="border-t-2 border-concrete-800 pt-6">
              <span className="font-mono text-xs tracking-[0.3em] text-concrete-600">
                DÚVIDAS → (11) 98765-4321
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservas" ref={ref} className="bg-concrete-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          `,
          backgroundSize: "60px",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left text */}
          <div className={`lg:col-span-5 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="font-mono text-xs tracking-[0.5em] text-fire-600 block mb-4">03 / RESERVAS</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-concrete-100 leading-[0.9] mb-6">
              GARANTA<br />
              <span className="text-fire-500">SUA</span> MESA
            </h2>
            <div className="space-y-4 mt-8">
              {[
                { label: "Telefone", value: "(11) 98765-4321" },
                { label: "Horário", value: "Ter-Dom · 11h às 23h" },
                { label: "Capacidade", value: "80 lugares · 3 salões" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <span className="font-mono text-fire-700 text-xs mt-1 flex-shrink-0">→</span>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-concrete-600 block uppercase">{info.label}</span>
                    <span className="font-body text-sm text-concrete-300">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-l-4 border-fire-700 pl-4">
              <p className="font-body text-sm text-concrete-500 italic">
                Para grupos acima de 10 pessoas ou eventos privados, entre em contato diretamente pelo telefone. Reservamos o salão completo.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-concrete-500 block mb-2 uppercase">Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className={inputBase("name")}
                    value={formState.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-concrete-500 block mb-2 uppercase">E-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className={inputBase("email")}
                    value={formState.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-concrete-500 block mb-2 uppercase">Data</label>
                  <input
                    type="date"
                    required
                    className={inputBase("date")}
                    value={formState.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    onFocus={() => setFocusedField("date")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-concrete-500 block mb-2 uppercase">Horário</label>
                  <select
                    required
                    className={inputBase("time")}
                    value={formState.time}
                    onChange={(e) => handleChange("time", e.target.value)}
                    onFocus={() => setFocusedField("time")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Escolher</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-concrete-500 block mb-2 uppercase">Pessoas</label>
                  <select
                    required
                    className={inputBase("guests")}
                    value={formState.guests}
                    onChange={(e) => handleChange("guests", e.target.value)}
                    onFocus={() => setFocusedField("guests")}
                    onBlur={() => setFocusedField(null)}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "pessoa" : "pessoas"}</option>
                    ))}
                    <option value="10+">10+ (ligar)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-[0.3em] text-concrete-500 block mb-2 uppercase">Observações</label>
                <textarea
                  rows={3}
                  placeholder="Alergias, ocasião especial, preferências de mesa..."
                  className={inputBase("notes") + " resize-none"}
                  value={formState.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  onFocus={() => setFocusedField("notes")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <button
                type="submit"
                className="w-full font-mono text-sm tracking-[0.3em] bg-fire-600 text-concrete-950 px-8 py-5 hover:bg-fire-500 transition-all duration-200 hover:shadow-[6px_6px_0px_#ea580c] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] uppercase"
              >
                CONFIRMAR RESERVA →
              </button>

              <p className="font-mono text-[10px] text-concrete-600 text-center tracking-wider">
                A confirmação será enviada por e-mail em até 2 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
