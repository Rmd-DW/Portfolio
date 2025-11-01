"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink, FileText } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "STAFFPRO",
      description:
        "Sistema moderno de administración de recursos humanos. CRUD completo de empleados con interfaz intuitiva y funcionalidades avanzadas de gestión.",
      image: "/images/staffpro-crud.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://v0-crud-jade.vercel.app/",
      processUrl: "#",
      category: "web",
    },
    {
      title: "CONTROL FINANCIERO",
      description:
        "Aplicación web responsiva para gestión financiera personal. Dashboard interactivo con control de gastos, ingresos y análisis financiero en tiempo real.",
      image: "/images/finance-app.png",
      tags: ["React", "Next.js", "Responsive Design", "Financial Dashboard"],
      liveUrl: "https://v0-responsive-finance-app.vercel.app/",
      processUrl: "#",
      category: "fintech",
    },
    {
      title: "ANATOLINGO",
      description:
        "Plataforma educativa interactiva para aprender anatomía humana de forma divertida. Sistema gamificado con módulos de aprendizaje, ranking de usuarios y desafíos diarios.",
      image: "/images/anatolingo.png",
      tags: ["React", "Next.js", "Gamification", "E-learning"],
      liveUrl: "https://v0-anatolingo.vercel.app/",
      processUrl: "#",
      category: "education",
    },
    {
      title: "BELLA PIZZA",
      description:
        "Auténtica experiencia pizza italiana. Sitio web corporativo con diseño gastronómico profesional, sistema de pedidos online, reservas de mesa y promociones especiales.",
      image: "/images/bella-pizza.png",
      tags: ["Next.js", "React", "Tailwind CSS", "UX/UI Design"],
      liveUrl: "https://v0-modern-pizzeria-website-three.vercel.app/",
      processUrl: "#",
      category: "restaurant",
    },
    {
      title: "ION CHILE DEFENSA",
      description:
        "Sitio web corporativo para empresa especializada en equipos de defensa y seguridad. Catálogo de productos tácticos, chalecos antibalas y equipamiento para fuerzas policiales.",
      image: "/images/ion-chile.png",
      tags: ["WordPress", "PHP", "Corporate Design", "E-commerce"],
      liveUrl: "https://www.ionchile.cl/",
      processUrl: "#",
      category: "corporate",
    },
    {
      title: "PLANSAT",
      description:
        "Monitoreo y Análisis de Impacto de incendios Forestales. PLANSAT proporciona herramientas avanzadas para el análisis de vegetación afectada por incendios forestales en la región de Ñuble, Chile.",
      image: "/images/plansat.png",
      tags: ["Next.js", "TypeScript", "Geospatial Analysis", "Environmental Tech"],
      liveUrl: "https://v0-plansat-git-primeramaqueta-robs-projects-1ebc061f.vercel.app/",
      processUrl: "#",
      category: "app",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      web: "bg-palette-cyan",
      app: "bg-emerald-500",
      restaurant: "bg-orange-500",
      corporate: "bg-blue-500",
      fintech: "bg-green-500",
      education: "bg-purple-500",
      enterprise: "bg-palette-cyan",
    }
    return colors[category as keyof typeof colors] || "bg-palette-cyan"
  }

  return (
    <section className="py-12 md:py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-glow">Proyectos Destacados</h2>
          <p className="text-base md:text-xl text-palette-light-gray max-w-2xl mx-auto px-4">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="block">
              <Card className="bg-palette-dark-gray/80 border-palette-medium-gray/30 hover-scale relative overflow-hidden h-full flex flex-col">
                {/* Category indicator */}
                <div
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full ${getCategoryColor(project.category)} z-10`}
                ></div>

                {/* Live indicator */}
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10 flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-palette-black/50 to-transparent"></div>
                </div>

                <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-palette-white">{project.title}</h3>
                  <p className="text-palette-light-gray mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-palette-cyan/20 text-palette-cyan border border-palette-cyan/30 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-palette-cyan hover:bg-palette-cyan/90 text-black font-medium text-sm rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-palette-cyan/25"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver en vivo
                    </a>
                    <a
                      href={project.processUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-palette-cyan text-palette-cyan hover:bg-palette-cyan/10 font-medium text-sm rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      Ver proceso
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
