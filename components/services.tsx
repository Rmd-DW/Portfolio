"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Layers, Code, Brain, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 200)
            })
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

  const services = [
    {
      icon: <Layers className="w-12 h-12 text-palette-cyan mb-6" />,
      title: "Diseño UX/UI",
      description:
        "El diseño de experiencias digitales efectivas comienza con un enfoque estratégico centrado en el usuario.",
      features: ["Investigación de Usuario", "Arquitectura de la información", "Wireframing", "Prototipado", "Testing"],
    },
    {
      icon: <Code className="w-12 h-12 text-palette-cyan mb-6" />,
      title: "Desarrollo web",
      description:
        "Creación de interfaces web modernas, responsivas y optimizadas, con código limpio y enfoque en rendimiento y accesibilidad.",
      features: ["Diseño responsivo", "Desarrollo Frontend", "Optimización", "SEO Implementación"],
    },
    {
      icon: <Brain className="w-12 h-12 text-palette-cyan mb-6" />,
      title: "Branding Digital",
      description:
        "Desarrollo de identidades visuales sólidas y estrategias digitales que reflejan la esencia de tu marca y conectan con tu audiencia.",
      features: ["Estrategia de marca", "Identidad visual", "Guía de estilos", "Marketing"],
    },
  ]

  const scrollToContact = () => {
    const element = document.querySelector("#contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-palette-medium-gray mb-4 tracking-widest uppercase slide-up">LO QUE OFREZCO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white slide-up" style={{ animationDelay: "0.2s" }}>
            Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-transparent border-2 border-palette-cyan/30 hover:border-palette-cyan transition-all duration-500 group relative overflow-hidden ${
                visibleCards.includes(index) ? "slide-up opacity-100" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-palette-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-palette-light-gray mb-6 leading-relaxed flex-grow">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-palette-light-gray text-sm">
                      <div className="w-1.5 h-1.5 bg-palette-cyan rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 border border-palette-cyan text-palette-cyan hover:bg-palette-cyan hover:text-black transition-all duration-300 rounded group/btn mt-auto"
                >
                  Cotizar
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
