"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen text-white section-gradient">
      <Preloader onLoadingComplete={handleLoadingComplete} />
      {!isLoading && <Navbar />}
      <section id="inicio">
        <Hero />
      </section>
      <section id="acerca">
        <About />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="portafolio">
        <Portfolio />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
