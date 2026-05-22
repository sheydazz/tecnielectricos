import Link from "next/link"
import { Phone, MessageCircle, MapPin, Clock, Shield } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="bg-neutral-950 text-white">
      <div className="grid lg:grid-cols-2">
        {/* Panel CTA — no es tarjeta centrada como el sitio original */}
        <div className="relative px-6 sm:px-10 py-14 sm:py-20 flex flex-col justify-center bg-gradient-to-br from-orange-600 to-orange-800">
          <p className="text-orange-200 text-sm font-medium uppercase tracking-widest mb-4">Hablemos hoy</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            ¿Listo para tu
            <br />
            servicio eléctrico?
          </h2>
          <p className="text-orange-100/90 mb-8 max-w-sm">
            Cuéntanos qué necesitas. Coordinamos visita en Barranquilla, Soledad y municipios del Atlántico.
          </p>

          <a
            href="tel:3122140141"
            className="text-4xl sm:text-5xl font-black tracking-tight hover:text-orange-200 transition-colors"
          >
            312 214 0141
          </a>
          <p className="text-orange-200/80 text-sm mt-2 mb-8">Brayan Merlano · Soluciones Eléctricas de la Costa</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:3122140141"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-bold px-6 py-3.5 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573122140141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Info lateral */}
        <div className="px-6 sm:px-10 py-14 sm:py-20 flex flex-col justify-center gap-8 bg-neutral-900">
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-orange-500" />
              Por qué elegirnos
            </h3>
            <ul className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Zona de cobertura",
                  text: "Atlántico, Colombia — Barranquilla, Soledad y alrededores.",
                },
                {
                  icon: Shield,
                  title: "Trabajo seguro",
                  text: "Mantenimiento residencial e industrial con enfoque en norma y protección.",
                },
                {
                  icon: Clock,
                  title: "Atención ágil",
                  text: "Cotiza por teléfono o WhatsApp y agenda tu visita.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-neutral-400 text-sm mt-0.5">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="#servicios"
            className="text-orange-400 text-sm font-medium hover:text-orange-300 inline-flex items-center gap-1"
          >
            ← Volver a servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
