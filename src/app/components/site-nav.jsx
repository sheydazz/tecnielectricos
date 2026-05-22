"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-9 sm:h-9"
            />
            <span className="font-bold text-sm sm:text-base text-neutral-900 leading-tight hidden min-[400px]:block">
              Soluciones<span className="text-orange-600"> Eléctricas</span>
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-6 text-sm font-medium">
            <Link
              href="#servicios"
              className="px-3 py-2 text-neutral-600 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50"
            >
              Servicios
            </Link>
            <Link
              href="#electricista-atlantico"
              className="px-3 py-2 text-neutral-600 hover:text-orange-600 transition-colors rounded-lg hover:bg-orange-50 hidden sm:inline"
            >
              Zona
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full gradient-primary text-white text-xs sm:text-sm shadow-sm hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Llamar</span>
              <span className="sm:hidden">Contacto</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
