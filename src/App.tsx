import Nav from "@/components/site/Nav"
import Hero from "@/components/site/Hero"
import Features from "@/components/site/Features"
import Pricing from "@/components/pricing/Pricing"
import Gallery from "@/components/site/Gallery"
import Reviews from "@/components/site/Reviews"
import Contact from "@/components/site/Contact"
import Footer from "@/components/site/Footer"
import NotFound from "@/components/site/NotFound"
import { HOME } from "@/config/site"

export default function App() {
  const isHome = window.location.pathname === HOME

  if (!isHome) {
    return <NotFound />
  }

  return (
    <div className="bg-mena-bg text-mena-text min-h-screen">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
