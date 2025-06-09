"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "STAFFPRO",
      description:
        "Sistema moderno de administración de recursos humanos. CRUD completo de empleados con interfaz intuitiva y funcionalidades avanzadas de gestión.",
      image: "/images/staffpro-crud.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://v0-crud-jade.vercel.app/",
      category: "web",
    },
    {
      title: "CONTROL FINANCIERO",
      description:
        "Aplicación web responsiva para gestión financiera personal. Dashboard interactivo con control de gastos, ingresos y análisis financiero en tiempo real.",
      image: "/images/finance-app.png",
      tags: ["React", "Next.js", "Responsive Design", "Financial Dashboard"],
      liveUrl: "https://v0-responsive-finance-app.vercel.app/",
      category: "fintech",
    },
    {
      title: "ANATOLINGO",
      description:
        "Plataforma educativa interactiva para aprender anatomía humana de forma divertida. Sistema gamificado con módulos de aprendizaje, ranking de usuarios y desafíos diarios.",
      image: "/images/anatolingo.png",
      tags: ["React", "Next.js", "Gamification", "E-learning"],
      liveUrl: "https://v0-anatolingo.vercel.app/",
      category: "education",
    },
    {
      title: "BELLA PIZZA",
      description:
        "Auténtica experiencia pizza italiana. Sitio web corporativo con diseño gastronómico profesional, sistema de pedidos online, reservas de mesa y promociones especiales.",
      image: "/images/bella-pizza.png",
      tags: ["Next.js", "React", "Tailwind CSS", "UX/UI Design"],
      liveUrl: "https://v0-modern-pizzeria-website-three.vercel.app/",
      category: "restaurant",
    },
    {
      title: "ION CHILE DEFENSA",
      description:
        "Sitio web corporativo para empresa especializada en equipos de defensa y seguridad. Catálogo de productos tácticos, chalecos antibalas y equipamiento para fuerzas policiales.",
      image: "/images/ion-chile.png",
      tags: ["WordPress", "PHP", "Corporate Design", "E-commerce"],
      liveUrl: "https://www.ionchile.cl/",
      category: "corporate",
    },
    {
      title: "PLANSAT",
      description:
        "Monitoreo y Análisis de Impacto de incendios Forestales. PLANSAT proporciona herramientas avanzadas para el análisis de vegetación afectada por incendios forestales en la región de Ñuble, Chile.",
      image: "/images/plansat.png",
      tags: ["Next.js", "TypeScript", "Geospatial Analysis", "Environmental Tech"],
      liveUrl: "https://v0-plansat-git-primeramaqueta-robs-projects-1ebc061f.vercel.app/",
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
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Proyectos Destacados</h2>
          <p className="text-xl text-palette-light-gray max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="block">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group overflow-hidden cursor-pointer ${project.liveUrl === "#" ? "pointer-events-none" : ""}`}
              >
                <Card className="bg-palette-dark-gray/80 border-palette-medium-gray/30 hover-scale relative overflow-hidden">
                  {/* Category indicator */}
                  <div
                    className={`absolute top-4 right-4 w-3 h-3 rounded-full ${getCategoryColor(project.category)} z-10`}
                  ></div>

                  {/* Live indicator for functional projects */}
                  {project.liveUrl !== "#" && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10 flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  )}

                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-palette-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-palette-white">{project.title}</h3>
                    <p className="text-palette-light-gray mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-palette-cyan/20 text-palette-cyan border border-palette-cyan/30 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl !== "#" && (
                      <div className="mt-4 text-palette-cyan text-sm font-medium flex items-center gap-1">
                        <span>Ver proyecto en vivo</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
