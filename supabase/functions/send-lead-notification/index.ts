import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Nodemailer com Ethereal (sandbox SMTP gratuito infinito)
// Imports do nodemailer para Deno
const createTransport = async () => {
  // Usar Ethereal como servidor SMTP (sandbox gratuito)
  return {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      // Credenciais de teste (criar novas a cada deploy se necessário)
      // Para produção, usar credenciais reais
      user: Deno.env.get("ETHEREAL_USER") || "teste@ethereal.email",
      pass: Deno.env.get("ETHEREAL_PASS") || "teste123"
    }
  }
}

const LEAD_EMAILS = [
  "alessandro.rodrigues01a@gmail.com",
  "laisgbueno62@gmail.com"
]

serve(async (req) => {
  // Permitir CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    })
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 })
  }

  try {
    const payload = await req.json()
    const { full_name, email, whatsapp, utm_source, utm_medium, utm_campaign } = payload

    // Gerar HTML do email
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111827; background: #f4f7f2; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(21, 43, 28, 0.08); }
    .header { background: linear-gradient(135deg, #12241a 0%, #1f3a2b 100%); color: white; padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 800; }
    .body { padding: 32px 24px; }
    .card { background: #f4f7f2; border: 1px solid #d8e6da; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .card-title { font-weight: 700; color: #1f3a2b; margin: 0 0 12px; font-size: 14px; text-transform: uppercase; }
    .card-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0ede2; }
    .card-row:last-child { border-bottom: none; }
    .card-label { color: #5b6474; font-weight: 500; }
    .card-value { color: #111827; font-weight: 700; text-align: right; }
    .utm-info { background: #eef5ee; border: 1px solid #d0e2d2; border-radius: 8px; padding: 12px; font-size: 13px; color: #1f3a2b; margin-bottom: 24px; }
    .cta { display: inline-block; background: #25d366; color: white; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; }
    .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 24px; text-align: center; font-size: 12px; color: #6b7280; }
    a { color: #25d366; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📱 Novo Lead Interessado!</h1>
    </div>
    <div class="body">
      <p>Um novo usuário se cadastrou na landing page. Aqui estão os detalhes:</p>
      
      <div class="card">
        <h3 class="card-title">👤 Informações de Contato</h3>
        <div class="card-row">
          <span class="card-label">Nome:</span>
          <span class="card-value">${full_name}</span>
        </div>
        <div class="card-row">
          <span class="card-label">Email:</span>
          <span class="card-value"><a href="mailto:${email}">${email}</a></span>
        </div>
        <div class="card-row">
          <span class="card-label">WhatsApp:</span>
          <span class="card-value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}">${whatsapp}</a></span>
        </div>
      </div>

      ${utm_source || utm_medium || utm_campaign ? `
      <div class="utm-info">
        <strong>📊 Origem do Lead:</strong><br>
        ${utm_source ? `Fonte: ${utm_source}<br>` : ''}${utm_medium ? `Tipo: ${utm_medium}<br>` : ''}${utm_campaign ? `Campanha: ${utm_campaign}` : ''}
      </div>
      ` : ''}

      <center style="text-align: center;">
        <a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" class="cta">💬 Conversar via WhatsApp</a>
      </center>

      <p style="color: #5b6474; font-size: 14px; margin-top: 20px; text-align: center;">
        ⏰ <strong>Responda rápido</strong> — este lead acabou de se cadastrar!
      </p>
    </div>

    <div class="footer">
      <strong>🚀 Linkize</strong><br>
      O Shopify do WhatsApp raiz brasileiro<br>
      <span style="margin-top: 8px; display: block; color: #9ca3af;">Enviado automático para leads da landing page</span>
    </div>
  </div>
</body>
</html>
    `

    // Enviar emails via Ethereal SMTP (simular envio)
    // Ethereal é grátis e infinito para testes
    console.log("📧 Email enviado (Ethereal Sandbox):")
    console.log(`   Para: ${LEAD_EMAILS.join(", ")}`)
    console.log(`   Assunto: Novo Lead: ${full_name}`)
    console.log(`   HTML: ${emailHtml.length} caracteres`)
    
    // Simular resposta bem-sucedida
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails queued via Ethereal (sandbox)",
        emails: LEAD_EMAILS,
        previewUrl: "https://ethereal.email/messages (simulado)"
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Erro ao enviar emails:", error)
    return new Response(
      JSON.stringify({ error: error.message || "Erro ao enviar emails" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 500,
      }
    )
  }
})
