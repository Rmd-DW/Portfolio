"use client"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portafolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 section-gradient">
      {/* Animated geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-20 w-px h-40 rotate-45 bg-palette-cyan float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-px h-32 rotate-12 bg-palette-cyan float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-px h-24 -rotate-45 bg-palette-cyan float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-px h-36 rotate-75 bg-palette-cyan float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-px h-28 rotate-30 bg-palette-cyan float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-px h-20 -rotate-60 bg-palette-cyan float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Animated logo watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Image
          src="/images/logotipo.svg"
          alt="Logo Background"
          width={300}
          height={300}
          className="w-72 h-72 rotate-on-hover"
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <p
            className={`text-lg md:text-xl mb-8 text-gray-300 font-light transition-all duration-1000 ${isVisible ? "slide-in-left" : "opacity-0"}`}
          >
            Diseñador ux/ui | Desarrollador Front end
          </p>

          <h1
            className={`font-bold mb-12 leading-tight transition-all duration-1200 ${isVisible ? "slide-up" : "opacity-0"}`}
            style={{ fontSize: "28px", animationDelay: "0.3s" }}
          >
            <span className="text-white">Hola! mi nombre es </span>
            <span className="text-palette-cyan pulse-glow">Roberto Munizaga</span>
            <span className="text-gray-300">
              , diseño experiencias digitales que conectan personas, ideas y tecnología.
            </span>
          </h1>

          <div
            className={`transition-all duration-1000 ${isVisible ? "bounce-in" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <button onClick={scrollToPortfolio} className="btn-primary ripple group">
              Ver Portafolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm mb-4 fade-in" style={{ animationDelay: "1s" }}>
          Scroll Down
        </p>
        <ChevronDown className="w-6 h-6 text-gray-400 mx-auto float" style={{ animationDelay: "1.2s" }} />
      </div>
    </section>
  )
}
