"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "inicio", label: "Inicio", href: "#inicio" },
    { id: "acerca", label: "Acerca de", href: "#acerca" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "portafolio", label: "Portafolio", href: "#portafolio" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string, id: string) => {
    setActiveSection(id)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setActiveSection("inicio")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl" : "backdrop-blur-sm bg-black/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={scrollToTop} className="flex items-center space-x-2 hover-scale group">
              <Image
                src="/images/logotipo.svg"
                alt="Roberto Munizaga Logo"
                width={40}
                height={40}
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Bento-style navigation container */}
          <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-md rounded-2xl p-2 border border-white/10 shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href, item.id)
                }}
                className={`
                  relative px-4 lg:px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer
                  ${
                    activeSection === item.id
                      ? "bg-primary text-black shadow-lg shadow-primary/25"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }
                  ${
                    item.id === "contacto" && activeSection !== item.id
                      ? "border border-primary/50 text-primary hover:bg-primary/10"
                      : ""
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Glassmorphism hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* Active state glow */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent pointer-events-none" />
    </nav>
  )
}
