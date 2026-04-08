export default function Footer() {
  return (
    <footer className="bg-concrete-950 border-t-4 border-concrete-800 relative overflow-hidden">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-fire-700 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-3xl text-fire-500 tracking-[0.2em] mb-3">
              TRAÇO & FOGO
            </h3>
            <p className="font-mono text-xs text-concrete-600 tracking-wider leading-relaxed">
              Churrasqueria artesanal<br />
              Vila Madalena, São Paulo<br />
              Desde 2019
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-fire-700 mb-4 uppercase">Navegação</h4>
            <ul className="space-y-2">
              {["Conceito", "Cardápio", "Reservas", "Local"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-mono text-xs text-concrete-500 hover:text-fire-500 transition-colors duration-200 hover-line inline-block py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-fire-700 mb-4 uppercase">Funcionamento</h4>
            <div className="font-mono text-xs text-concrete-500 space-y-1">
              <p>Ter–Sex: 11h–15h / 18h–23h</p>
              <p>Sáb–Dom: 11h–00h</p>
              <p className="text-concrete-700">Segunda: Fechado</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-fire-700 mb-4 uppercase">Redes</h4>
            <div className="space-y-2">
              {[
                { label: "Instagram", url: "#" },
                { label: "WhatsApp", url: "#" },
                { label: "iFood", url: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="block font-mono text-xs text-concrete-500 hover:text-fire-500 transition-colors duration-200 hover-line py-1"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-concrete-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-concrete-700 tracking-wider">
            © 2026 TRAÇO & FOGO. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="font-mono text-[10px] text-concrete-800 tracking-wider">
            FEITO COM FOGO E CÓDIGO
          </p>
        </div>
      </div>
    </footer>
  )
}
