import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-orange-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div>
            <p className="font-extrabold text-neutral-900 text-lg">
              Soluciones <span className="text-orange-600">Eléctricas</span>
            </p>
            <p className="text-neutral-500 text-sm mt-1">de la Costa</p>
            <p className="text-neutral-600 text-sm mt-4 leading-relaxed">
              Electricidad residencial e industrial en el Atlántico.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Navegación</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#servicios" className="text-neutral-700 hover:text-orange-600 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#electricista-atlantico"
                  className="text-neutral-700 hover:text-orange-600 transition-colors"
                >
                  Zona Atlántico
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-neutral-700 hover:text-orange-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Contacto</p>
            <p className="flex items-center gap-2 text-sm text-neutral-700">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              Atlántico, Colombia
            </p>
            <a
              href="tel:3122140141"
              className="flex items-center gap-2 text-sm font-semibold text-orange-600 mt-2 hover:text-orange-700"
            >
              <Phone className="w-4 h-4" />
              312 214 0141
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 text-center sm:text-left text-xs text-neutral-400">
          © {new Date().getFullYear()} Soluciones Eléctricas de la Costa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
