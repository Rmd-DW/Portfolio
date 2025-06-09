"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import CVDownload from "./cv-download"
import { submitContactForm, type ContactFormData } from "@/lib/contact-service"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      const result = submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setSubmitMessage(result.message)
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Error al enviar el mensaje.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Error inesperado. Por favor, escríbeme directamente a r.munizaga.d@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow slide-up">Trabajemos Juntos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto slide-up" style={{ animationDelay: "0.2s" }}>
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="slide-in-left">
            <Card className="bg-palette-black/60 border-palette-medium-gray/30 rounded-2xl card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-white">Enviar un mensaje</h3>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-400">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-palette-light-gray">Tu Nombre</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="nombre"
                      className="bg-palette-dark-gray/80 border-palette-medium-gray/40 text-white placeholder:text-palette-medium-gray h-12 rounded-lg focus:border-palette-cyan focus:ring-2 focus:ring-palette-cyan/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-palette-light-gray">Tu email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="user@example.com"
                      className="bg-palette-dark-gray/80 border-palette-medium-gray/40 text-white placeholder:text-palette-medium-gray h-12 rounded-lg focus:border-palette-cyan focus:ring-2 focus:ring-palette-cyan/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-palette-light-gray">Tu mensaje</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="cuentame sobre tu proyecto..."
                      rows={6}
                      className="bg-palette-dark-gray/80 border-palette-medium-gray/40 text-white placeholder:text-palette-medium-gray rounded-lg resize-none focus:border-palette-cyan focus:ring-2 focus:ring-palette-cyan/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-palette-cyan hover:bg-palette-cyan/90 text-black font-semibold text-base rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-palette-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 slide-in-right">
            <Card className="bg-palette-black/60 border-palette-medium-gray/30 rounded-2xl card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-white">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 interactive-element group">
                    <div className="w-12 h-12 bg-palette-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-palette-cyan/30 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-palette-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-palette-medium-gray mb-1">Email</p>
                      <p className="text-white font-medium group-hover:text-palette-cyan transition-colors duration-300">
                        r.munizaga.d@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 interactive-element group">
                    <div className="w-12 h-12 bg-palette-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-palette-cyan/30 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-palette-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-palette-medium-gray mb-1">Teléfono</p>
                      <p className="text-white font-medium group-hover:text-palette-cyan transition-colors duration-300">
                        939662430
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 interactive-element group">
                    <div className="w-12 h-12 bg-palette-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-palette-cyan/30 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-palette-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-palette-medium-gray mb-1">Ubicación</p>
                      <p className="text-white font-medium group-hover:text-palette-cyan transition-colors duration-300">
                        Viña del mar, Chile
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-palette-black/60 border-palette-medium-gray/30 rounded-2xl card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Sígueme</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rob-ux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-palette-dark-gray hover:bg-palette-cyan border border-palette-medium-gray/40 hover:border-palette-cyan rounded-lg flex items-center justify-center group transition-all duration-300 scale-on-hover"
                  >
                    <Linkedin className="w-5 h-5 text-palette-light-gray group-hover:text-black transition-colors duration-300" />
                  </a>
                  <a
                    href="https://github.com/Rmd-DW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-palette-dark-gray hover:bg-palette-cyan border border-palette-medium-gray/40 hover:border-palette-cyan rounded-lg flex items-center justify-center group transition-all duration-300 scale-on-hover"
                  >
                    <Github className="w-5 h-5 text-palette-light-gray group-hover:text-black transition-colors duration-300" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-palette-black/60 border-palette-medium-gray/30 rounded-2xl card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Vamos a crear algo increíble</h3>
                <p className="text-palette-light-gray mb-6 leading-relaxed">
                  Disponible para proyectos independientes y oportunidades de tiempo completo.
                </p>
                <CVDownload />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
