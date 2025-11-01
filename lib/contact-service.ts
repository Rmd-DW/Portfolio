export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: result.error || "Error al enviar el mensaje. Por favor, intenta nuevamente.",
      }
    }

    return {
      success: true,
      message: result.message || "¡Mensaje enviado exitosamente!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      error: "Error de conexión. Por favor, escríbeme directamente a r.munizaga.d@gmail.com",
    }
  }
}
