import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // SendGrid API configuration
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

    if (!SENDGRID_API_KEY) {
      console.error("[v0] SendGrid API key not found")
      return NextResponse.json({ success: false, error: "Configuración de email no disponible" }, { status: 500 })
    }

    // Send email using SendGrid
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "r.munizaga.d@gmail.com" }],
            subject: `Mensaje desde portafolio - ${name}`,
          },
        ],
        from: {
          email: "noreply@robertomunizaga.com",
          name: "Portafolio Roberto Munizaga",
        },
        reply_to: {
          email: email,
          name: name,
        },
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #00EBFE;">Nuevo mensaje desde tu portafolio</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Nombre:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                </div>
                <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #00EBFE;">
                  <h3>Mensaje:</h3>
                  <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
                </div>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
                <p style="color: #666; font-size: 12px;">
                  Enviado desde tu portafolio web<br>
                  Responde directamente a este email para contactar al cliente.
                </p>
              </div>
            `,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[v0] SendGrid error:", errorData)
      return NextResponse.json({ success: false, error: "Error al enviar el mensaje" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, error: "Error inesperado al enviar el mensaje" }, { status: 500 })
  }
}
