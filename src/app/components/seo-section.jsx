import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

export function SeoSection() {
  return (
    <section
      id="electricista-atlantico"
      className="relative py-8 sm:py-10 overflow-hidden"
      aria-labelledby="seo-heading"
    >
      <div className="absolute inset-0 bg-orange-500 skew-y-[-1deg] origin-center scale-110" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-white">
          <div>
            <h2 id="seo-heading" className="text-lg sm:text-xl font-bold">
              ¿Buscas electricista en el Atlántico?
            </h2>
            <p className="text-orange-100 text-sm mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Barranquilla · Soledad · Costa Caribe
            </p>
          </div>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-full text-sm hover:bg-orange-50 transition-colors shrink-0 self-start sm:self-center"
          >
            Contáctanos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
