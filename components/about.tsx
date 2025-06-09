"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const designTools = ["Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "After effects", "Procreate"]

  const developmentTools = ["HTML", "CSS", "JavaScript", "Next.js", "Vue.js", "React"]

  const methodologies = ["Design Thinking", "UX Lean", "Scrum"]

  return (
    <section ref={sectionRef} className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className={`text-sm text-palette-medium-gray mb-4 tracking-widest uppercase transition-all duration-800 ${isVisible ? "slide-up opacity-100" : "opacity-0"}`}
          >
            ACERCA DE MI
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 ${isVisible ? "slide-up opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Biografía Profesional
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Photo */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "slide-in-left opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative group">
              <Image
                src="/images/roberto-bio.png"
                alt="Roberto Munizaga - Diseñador UX/UI"
                width={500}
                height={600}
                className="w-full rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Experience overlay */}
              {/*
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-palette-cyan/30">
                <div className="text-3xl font-bold text-palette-cyan mb-1">4 Años</div>
                <div className="text-sm text-palette-light-gray">Experiencia profesional</div>
              </div>
              */}

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-palette-cyan/10 rounded-full blur-xl group-hover:bg-palette-cyan/20 transition-colors duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-palette-teal/10 rounded-full blur-xl group-hover:bg-palette-teal/20 transition-colors duration-500"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "slide-in-right opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-palette-light-gray leading-relaxed">
                Soy Diseñador especializado en la creación de experiencias digitales, intuitivas y accesibles que
                equilibran estética y funcionalidad. Mi enfoque combina pensamiento estratégico con resolución creativa
                de problemas para ofrecer diseños centrados en el usuario y altamente efectivos.
              </p>
            </div>

            {/* Metodologías & Herramientas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Metodologías & Herramientas</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Diseño */}
                <div className="bg-palette-dark-gray/50 rounded-lg p-6 border border-palette-medium-gray/20 card-hover group">
                  <h4 className="text-lg font-semibold text-palette-cyan mb-4 group-hover:text-palette-white transition-colors duration-300">
                    Diseño
                  </h4>
                  <ul className="space-y-3">
                    {designTools.map((tool, index) => (
                      <li
                        key={index}
                        className="flex items-center text-palette-light-gray text-sm group-hover:text-white transition-all duration-300 interactive-element"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-palette-cyan rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desarrollo */}
                <div className="bg-palette-dark-gray/50 rounded-lg p-6 border border-palette-medium-gray/20 card-hover group">
                  <h4 className="text-lg font-semibold text-palette-teal mb-4 group-hover:text-palette-white transition-colors duration-300">
                    Desarrollo
                  </h4>
                  <ul className="space-y-3">
                    {developmentTools.map((tool, index) => (
                      <li
                        key={index}
                        className="flex items-center text-palette-light-gray text-sm group-hover:text-white transition-all duration-300 interactive-element"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-palette-teal rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metodologías */}
                <div className="bg-palette-dark-gray/50 rounded-lg p-6 border border-palette-medium-gray/20 card-hover group">
                  <h4 className="text-lg font-semibold text-white mb-4 transition-colors duration-300">Metodologías</h4>
                  <ul className="space-y-3">
                    {methodologies.map((methodology, index) => (
                      <li
                        key={index}
                        className="flex items-center text-palette-light-gray text-sm group-hover:text-white transition-all duration-300 interactive-element"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-palette-dark-teal rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {methodology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contribuciones */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contribuciones</h3>
              <p className="text-palette-light-gray leading-relaxed">
                Coach instructor y asesor en iniciativas públicas y privadas como Talento Digital, Universidad del
                Desarrollo, Adalid, Mindhub y diversas plataformas educativas, proporcionando formación, mentoría y
                orientación estratégica a la próxima generación de diseñadores digitales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
