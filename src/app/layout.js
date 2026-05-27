import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Electricista en el Atlántico | Soluciones Eléctricas de la Costa - Barranquilla y Soledad",
  description:
    "¿Buscas un electricista en el Atlántico? Soluciones Eléctricas de la Costa atiende Barranquilla, Soledad y toda la región. Mantenimiento eléctrico residencial e industrial, paneles solares, tableros, breakers e instalaciones LED. ¡Contáctanos!",
  keywords:
    "electricista en el atlántico, electricista Barranquilla, electricista Soledad, buscar electricista atlántico, mantenimiento eléctrico Barranquilla, electricista cerca de mí atlántico, instalaciones eléctricas costa caribe, paneles solares Barranquilla, sistemas fotovoltaicos, tableros eléctricos, Soluciones Eléctricas de la Costa",
  authors: [{ name: "Soluciones Eléctricas de la Costa" }],
  robots: "index, follow",
  openGraph: {
    title: "Electricista en el Atlántico | Soluciones Eléctricas de la Costa",
    description:
      "Electricista en Barranquilla, Soledad y el Atlántico. Mantenimiento eléctrico residencial e industrial. Contáctanos.",
    type: "website",
    locale: "es_CO",
    siteName: "Soluciones Eléctricas de la Costa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones Eléctricas de la Costa",
    description: "Electricista en el Atlántico — Barranquilla, Soledad y Costa Caribe",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Metadatos adicionales para SEO local */}
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla, Atlántico, Colombia" />
        <meta name="geo.position" content="10.9685;-74.7813" />
        <meta name="ICBM" content="10.9685, -74.7813" />
        
        {/* Información del negocio */}
        <meta name="business:contact_data:locality" content="Barranquilla" />
        <meta name="business:contact_data:region" content="Atlántico" />
        <meta name="business:contact_data:country_name" content="Colombia" />
        
        {/* Schema.org para negocio local */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Soluciones Eléctricas de la Costa",
            "description": "Electricista en el Atlántico, Colombia. Servicios eléctricos residenciales e industriales en Barranquilla, Soledad y la Costa Caribe.",
            "telephone": "+57-312-2140141",
            "areaServed": ["Barranquilla", "Soledad", "Malambo", "Atlántico", "Colombia"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barranquilla",
              "addressRegion": "Atlántico",
              "addressCountry": "CO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "10.9685",
              "longitude": "-74.7813"
            },
            "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "10.9685",
                "longitude": "-74.7813"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios Eléctricos Residenciales e Industriales",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mantenimiento de Tablero Eléctrico"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalaciones Eléctricas y LED"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalación y Mantenimiento de Paneles Solares y Sistemas Fotovoltaicos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Certificaciones y Tableros Industriales"
                  }
                }
              ]
            }
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
