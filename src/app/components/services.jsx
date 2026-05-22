"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import {
  LayoutGrid,
  AlertTriangle,
  Cable,
  Plug,
  Lightbulb,
  Zap,
  ShieldCheck,
  PanelTop,
  Activity,
  Cog,
  FileCheck,
  Wrench,
  AirVent,
  Check,
  ExternalLink,
  Home,
  Factory,
  Send,
  X,
} from "lucide-react"

const services = [
  {
    id: "tablero-electrico",
    categories: ["Residencial", "Industrial"],
    title: "Mantenimiento de Tablero Eléctrico",
    description: "Revisión, ajuste y mantenimiento de tableros para garantizar operación segura",
    icon: LayoutGrid,
  },
  {
    id: "sobrecargas",
    categories: ["Residencial", "Industrial"],
    title: "Sobrecargas",
    description: "Diagnóstico y corrección de sobrecargas en circuitos y equipos eléctricos",
    icon: AlertTriangle,
  },
  {
    id: "instalaciones-electricas",
    categories: ["Residencial", "Industrial"],
    title: "Instalaciones Eléctricas",
    description: "Instalación de sistemas eléctricos nuevos y ampliaciones con norma técnica",
    icon: Cable,
  },
  {
    id: "tomas",
    categories: ["Residencial", "Industrial"],
    title: "Revisión y Cambio de Tomas",
    description: "Inspección, reparación y reemplazo de tomas eléctricas dañadas o antiguas",
    icon: Plug,
  },
  {
    id: "lamparas",
    categories: ["Residencial", "Industrial"],
    title: "Revisión y Cambio de Lámparas",
    description: "Mantenimiento y cambio de luminarias en interiores y exteriores",
    icon: Lightbulb,
  },
  {
    id: "instalaciones-led",
    categories: ["Residencial", "Industrial"],
    title: "Instalaciones LED",
    description: "Iluminación LED eficiente para hogares, locales y espacios industriales",
    icon: Zap,
  },
  {
    id: "breakers",
    categories: ["Residencial", "Industrial"],
    title: "Revisión y Cambio de Breakers",
    description: "Prueba, ajuste y reemplazo de breakers para protección del circuito",
    icon: ShieldCheck,
  },
  {
    id: "cuadros-electricos",
    categories: ["Residencial", "Industrial"],
    title: "Cuadros Eléctricos",
    description: "Instalación y mantenimiento de cuadros de distribución eléctrica",
    icon: PanelTop,
  },
  {
    id: "corrientes-parasitas",
    categories: ["Residencial", "Industrial"],
    title: "Revisión de Corrientes Parásitas",
    description: "Detección de fugas y corrientes parásitas que afectan su consumo y seguridad",
    icon: Activity,
  },
  {
    id: "motobomba",
    categories: ["Industrial"],
    title: "Mantenimiento de Motobomba",
    description: "Servicio preventivo y correctivo de motobombas industriales y comerciales",
    icon: Cog,
  },
  {
    id: "motores-electricos",
    categories: ["Industrial"],
    title: "Revisión de Motores Eléctricos",
    description: "Diagnóstico y mantenimiento de motores eléctricos en planta industrial",
    icon: Wrench,
  },
  {
    id: "certificaciones",
    categories: ["Industrial"],
    title: "Certificaciones Eléctricas",
    description: "Certificación y cumplimiento normativo de instalaciones eléctricas industriales",
    icon: FileCheck,
  },
  {
    id: "armado-tableros",
    categories: ["Industrial"],
    title: "Armado de Tableros Eléctricos",
    description: "Diseño y armado de tableros eléctricos a medida para su operación industrial",
    icon: LayoutGrid,
  },
  {
    id: "aires-acondicionados",
    categories: ["Refrigeración"],
    title: "Revisión de Aires Acondicionados",
    description: "Refrigeración en refrielectricos.com — sitio aliado",
    icon: AirVent,
    externalLink: "https://refrielectricos.com",
  },
]

const categories = [
  { id: "Todos", icon: Zap },
  { id: "Residencial", icon: Home },
  { id: "Industrial", icon: Factory },
  { id: "Refrigeración", icon: AirVent },
]

export function Services() {
  const [selectedServices, setSelectedServices] = useState([])
  const [filter, setFilter] = useState("Todos")
  const [isInContactSection, setIsInContactSection] = useState(false)

  const filteredServices =
    filter === "Todos" ? services : services.filter((s) => s.categories.includes(filter))

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contacto")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        setIsInContactSection(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleService = (service) => {
    if (service.externalLink) {
      window.open(service.externalLink, "_blank", "noopener,noreferrer")
      return
    }
    setSelectedServices((prev) =>
      prev.includes(service.id) ? prev.filter((id) => id !== service.id) : [...prev, service.id],
    )
  }

  const handleRequestServices = () => {
    if (selectedServices.length === 0) {
      alert("Por favor selecciona al menos un servicio")
      return
    }
    const names = services
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.title)
      .join("\n• ")
    const message = `¡Hola! Me interesan los siguientes servicios de Soluciones Eléctricas de la Costa:\n\n• ${names}\n\nPor favor, contáctame para más información.`
    window.open(
      `https://api.whatsapp.com/send?phone=573122140141&text=${encodeURIComponent(message)}`,
      "_blank",
    )
  }

  return (
    <section id="servicios" className="py-14 sm:py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar — no pills centrados como el sitio original */}
          <aside className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Catálogo</p>
              <h2 className="text-2xl font-extrabold text-neutral-900 mb-1">Servicios</h2>
              <p className="text-sm text-neutral-500 mb-6 hidden lg:block">
                Clic en cada fila para agregar a tu solicitud.
              </p>

              <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible scrollbar-hide">
                {categories.map(({ id, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFilter(id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                      filter === id
                        ? "bg-orange-600 text-white shadow-md"
                        : "bg-white text-neutral-700 border border-neutral-200 hover:border-orange-300 hover:text-orange-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {id}
                  </button>
                ))}
              </nav>

              {selectedServices.length > 0 && (
                <div className="hidden lg:block mt-8 p-4 bg-white rounded-xl border-2 border-orange-200 shadow-sm">
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Tu selección</p>
                  <p className="text-2xl font-black text-neutral-900">{selectedServices.length}</p>
                  <p className="text-xs text-neutral-500 mb-3">
                    {selectedServices.length === 1 ? "servicio" : "servicios"}
                  </p>
                  <Button onClick={handleRequestServices} className="w-full gradient-primary text-white text-sm">
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    Enviar
                  </Button>
                </div>
              )}
            </div>
          </aside>

          {/* Lista horizontal — no grid 3 columnas */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-neutral-500 mb-4 lg:hidden">
              Toca un servicio para seleccionarlo
            </p>

            <ul className="space-y-3">
              {filteredServices.map((service) => {
                const isSelected = selectedServices.includes(service.id)
                const isExternal = Boolean(service.externalLink)
                const Icon = service.icon

                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`w-full text-left flex items-stretch gap-0 rounded-xl overflow-hidden border transition-all duration-200 group ${
                        isSelected
                          ? "border-orange-400 bg-white shadow-md ring-2 ring-orange-200"
                          : "border-neutral-200 bg-white hover:border-orange-300 hover:shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-1.5 shrink-0 ${
                          isSelected ? "bg-orange-500" : "bg-neutral-200 group-hover:bg-orange-300"
                        }`}
                      />
                      <div className="flex flex-1 items-center gap-4 p-4 min-w-0">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "gradient-primary text-white"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-1.5 mb-1">
                            {service.categories.map((cat) => (
                              <span
                                key={cat}
                                className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-neutral-100 text-neutral-600"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                          <p className="font-bold text-neutral-900 text-sm sm:text-base leading-snug">
                            {service.title}
                          </p>
                          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 line-clamp-2">
                            {service.description}
                          </p>
                          {isExternal && (
                            <span className="inline-flex items-center gap-1 text-xs text-orange-600 font-medium mt-1">
                              <ExternalLink className="w-3 h-3" />
                              refrielectricos.com
                            </span>
                          )}
                        </div>
                        <div className="shrink-0 self-center pr-1">
                          {isExternal ? (
                            <ExternalLink className="w-5 h-5 text-neutral-400" />
                          ) : isSelected ? (
                            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-neutral-300 group-hover:border-orange-400" />
                          )}
                        </div>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>

            {filteredServices.length === 0 && (
              <p className="text-center text-neutral-500 py-12">No hay servicios en esta categoría.</p>
            )}
          </div>
        </div>
      </div>

      {/* Barra móvil / cuando no está en contacto */}
      {selectedServices.length > 0 && !isInContactSection && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
          <div className="bg-neutral-900 text-white px-4 py-3 flex items-center justify-between gap-3 safe-area-pb">
            <div>
              <p className="text-xs text-orange-300 font-medium">Seleccionados</p>
              <p className="font-bold">{selectedServices.length} servicios</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedServices([])}
                className="p-2 rounded-lg bg-white/10"
                aria-label="Limpiar"
              >
                <X className="w-5 h-5" />
              </button>
              <Button onClick={handleRequestServices} className="gradient-primary text-white font-semibold px-5">
                <Send className="w-4 h-4 mr-1.5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
