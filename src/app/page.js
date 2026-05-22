import { SiteNav } from "./components/site-nav"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { SeoSection } from "./components/seo-section"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <Services />
      <SeoSection />
      <Contact />
      <Footer />
    </main>
  )
}
