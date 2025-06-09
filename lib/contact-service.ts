export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const subject = encodeURIComponent(`Mensaje desde portafolio - ${data.name}`)
    const body = encodeURIComponent(`
Hola Roberto,

Tienes un nuevo mensaje desde tu portafolio web:

Nombre: ${data.name}
Email: ${data.email}

Mensaje:
${data.message}

---
Enviado desde tu portafolio web
Responde directamente a este email para contactar al cliente.
    `)

    const mailtoLink = `mailto:r.munizaga.d@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_blank")

    return {
      success: true,
      message: "Abriendo tu cliente de email para enviar el mensaje directamente...",
    }
  } catch (error) {
    console.error("Error with email method:", error)
    return {
      success: false,
      error: "Error al abrir el cliente de email. Por favor, envía un email manualmente a r.munizaga.d@gmail.com",
    }
  }
}
