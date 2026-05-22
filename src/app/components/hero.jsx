"use client"

import { Button } from "./ui/button"
import { ArrowRight, Phone, Home, Factory, Zap, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-[42%_1fr] min-h-[calc(100vh-4rem)]">
        {/* Panel naranja — estructura distinta al hero centrado original */}
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-6 sm:px-10 py-12 lg:py-16 flex flex-col justify-between">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 12px,
                white 12px,
                white 13px
              )`,
            }}
          />

          <div className="relative z-10">
            <p className="text-orange-100 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Costa Caribe · Colombia
            </p>
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-3 shadow-2xl mb-8 rotate-[-2deg]">
              <Image
                src="/assets/logo.png"
                alt="Soluciones Eléctricas de la Costa"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="relative z-10 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight">
              Soluciones
              <br />
              Eléctricas
              <br />
              <span className="text-orange-200">de la Costa</span>
            </h1>
            <div className="flex gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Home className="w-3.5 h-3.5" />
                Residencial
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/25 px-3 py-1.5 rounded-full">
                <Factory className="w-3.5 h-3.5" />
                Industrial
              </span>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-12 lg:py-16 bg-white relative">
          <div className="absolute top-8 right-8 w-24 h-24 border-4 border-orange-200 rounded-full opacity-40 hidden lg:block" />
          <div className="absolute bottom-12 right-16 w-3 h-3 bg-orange-500 rounded-full hidden lg:block" />
          <div className="absolute bottom-20 right-24 w-2 h-2 bg-orange-300 rounded-full hidden lg:block" />

          <div className="max-w-xl space-y-8 relative z-10">
            <div>
              <p className="text-orange-600 font-semibold text-sm mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 fill-orange-500" />
                Electricistas profesionales
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-snug">
                Tu hogar y tu empresa, con energía segura
              </p>
            </div>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed border-l-4 border-orange-400 pl-5">
              Tableros, breakers, instalaciones LED y mantenimiento industrial en Barranquilla, Soledad y todo el
              departamento del Atlántico.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={scrollToServices}
                className="gradient-primary text-white font-semibold h-12 px-8 text-base group border-0"
              >
                Explorar servicios
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="#contacto">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  312 214 0141
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
              {[
                { label: "Respuesta", value: "Rápida" },
                { label: "Cobertura", value: "Atlántico" },
              ].map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">{item.label}</p>
                  <p className="text-sm font-bold text-orange-600">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-neutral-400">*Según disponibilidad — consulta por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
