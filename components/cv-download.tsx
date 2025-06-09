"use client"

import { Download } from "lucide-react"
import { useState } from "react"

const cvData = {
  personalInfo: {
    name: "ROBERTO MUNIZAGA DIAZ",
    title: "Product Designer / Instructor Design thinking",
    email: "r.munizaga.d@gmail.com",
    phone: "+569 39662430",
    location: "Viña del mar, Chile",
    linkedin: "https://www.linkedin.com/in/rob-ux/",
    github: "https://github.com/Rmd-DW",
  },
  about:
    "Profesional con enfoque centrado en el usuario, experiencia en diseño de experiencias digitales y formación en programas como Talento Digital. He trabajado como relator, instructor y facilitador de contenidos en bootcamps intensivos, guiando a estudiantes en entornos virtuales mediante metodologías ágiles y herramientas como Design Thinking. Capacitado en diseño de interfaces, sistemas de diseño, prototipos, pruebas de usabilidad y desarrollo web. Siempre en constante actualización y comprometido con el aprendizaje colaborativo.",
  experience: [
    {
      title: "Coach instructor bootcamp Diseño UX/UI",
      company: "Universidad del Desarrollo",
      period: "Nov 2022 / Actualmente",
      responsibilities: [
        "Lograr los objetivos de aprendizaje de la sesión.",
        "Revisar, evaluar y dar feedback a los proyectos.",
        "Planificar las sesiones semanales y retos para los alumnos.",
        "Reunirse con el STAFF para feedback y revisión de agenda.",
        "Monitorear la evolución y dar seguimiento de los Bootcampers.",
        "Resolver dudas académicas y técnicas en clase y en los foros.",
        "Compartir y anticipar el tema para la siguiente clase.",
        "Tomar una capacitación una vez al mes con el equipo de staff",
      ],
    },
    {
      title: "Diseñador / Desarrollador web/ Webmaster",
      company: "Trabajo de manera freelance a nivel global",
      period: "actualmente",
      responsibilities: [
        "Apoyo a Pymes en el proceso de digitalización",
        "Estrategia de posicionamientos en la web.",
        "Desarrollo de productos digitales como sitios webs, landing pages, dashboards",
        "Diseño de interfaces y experiencia de usuarios.",
        "Diseño de banners y elementos web.",
        "Mantenciones en sitios web y servidores CPANEL.",
      ],
    },
    {
      title: "Relator Diseño UX/UI programa Talento digital",
      company: "Adalid",
      period: "ene 2023 / diciembre 2023",
      responsibilities: [
        "Impartir plan formativo diseñado para desarrollar las habilidades necesarias para diseñar experiencia e interfaces, flujos de navegación y prototipos centrados en la experiencia de los usuarios.",
        "Utilizar metodología de diseño que asegure la satisfacción de las personas y la accesibilidad de los productos digitales.",
        "Aplicar técnicas de investigación de usuarios y benchmarking.",
      ],
    },
  ],
  education: [
    "Bootcamp desarrollador front end / Talento digital 2024",
    "Desarrollador fullstack MERN / Universidad del Desarrollo 2023",
    "Licenciatura en Diseño / Universidad de Valparaiso 2022-2024",
    "Bootcamp Diseñador UX/UI / AIEP 2021",
    "Técnico en administración y marketing / UDLA 2019-2020",
    "Analista programador de sistemas / INACAP 2014-2017",
  ],
  certifications: [
    "Service Design / Universidad del Desarrollo 2021-2022",
    "Desarrollo Web / Coderhouse 2021-2022",
    "Fundamentos del marketing digital / Google 2021",
    "Iniciación a la Fotografia / Camara lucida 2014",
  ],
  methodologies: ["Design Thinking", "Lean UX", "Scrum", "Kanban", "Gestión de proyectos", "Miró", "Teams", "Trello"],
  tools: [
    "FIGMA",
    "A.XD",
    "A.Photoshop",
    "A.Illustrator",
    "Procreate",
    "A.Dreamweaver",
    "A.Premier",
    "Wordpress",
    "joomla",
  ],
  programming: ["HTML", "CSS", "JavaScript", "Vue", "React", "Bootstrap", "Tailwind CSS", "Bulma"],
}

export default function CVDownload() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateCV = () => {
    setIsGenerating(true)

    const cvContent = `
${cvData.personalInfo.name}
${cvData.personalInfo.title}
Email: ${cvData.personalInfo.email}
Teléfono: ${cvData.personalInfo.phone}
Ubicación: ${cvData.personalInfo.location}
LinkedIn: ${cvData.personalInfo.linkedin}
GitHub: ${cvData.personalInfo.github}

SOBRE MI
${cvData.about}

EXPERIENCIA
${cvData.experience.map((exp) => `• ${exp.title} - ${exp.company} (${exp.period})`).join("\n")}

FORMACIÓN
${cvData.education.map((edu) => `• ${edu}`).join("\n")}

HABILIDADES
Diseño: ${cvData.tools.join(", ")}
Desarrollo: ${cvData.programming.join(", ")}
Metodologías: ${cvData.methodologies.join(", ")}
    `

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Roberto_Munizaga_CV.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    setTimeout(() => {
      setIsGenerating(false)
    }, 1000)
  }

  return (
    <button
      onClick={generateCV}
      disabled={isGenerating}
      className="btn-secondary group w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
          Descargar Curriculum Vitae
        </>
      )}
    </button>
  )
}
