"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const navItems = [
    { label: "Acerca de", href: "#acerca" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-palette-black border-t border-palette-medium-gray/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-6">
          {/* Left Side - Logo and Title */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">RM</h3>
            <p className="text-palette-medium-gray text-sm">Diseñador UX/UI / Desarrollo front end</p>
          </div>

          {/* Right Side - Navigation and Back to Top */}
          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-palette-light-gray hover:text-palette-cyan transition-colors duration-300 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-palette-cyan/20 hover:bg-palette-cyan border border-palette-cyan/30 hover:border-palette-cyan rounded-lg flex items-center justify-center group transition-all duration-300 hover:scale-110"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-palette-cyan group-hover:text-black transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-palette-medium-gray/20"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          {/* Copyright */}
          <p className="text-palette-medium-gray text-sm">© 2025 Roberto Munizaga. Todos los derechos reservados.</p>

          {/* Tagline */}
          <p className="text-palette-medium-gray text-sm text-center md:text-right">
            Diseñado y desarrollado con pasión por la innovación y la tecnología
          </p>
        </div>
      </div>
    </footer>
  )
}
