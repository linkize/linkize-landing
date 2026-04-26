export const generateLeadEmailHtml = (data: {
  fullName: string
  email: string
  whatsapp: string
  utmSource?: string | null
  utmMedium?: string | null
  utmCampaign?: string | null
  referrer?: string | null
}) => {
  const utmInfo = [
    data.utmSource && `Origem: ${data.utmSource}`,
    data.utmMedium && `Tipo: ${data.utmMedium}`,
    data.utmCampaign && `Campanha: ${data.utmCampaign}`
  ].filter(Boolean).join(' • ');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #111827;
      background: #f4f7f2;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(21, 43, 28, 0.08);
    }
    .header {
      background: linear-gradient(135deg, #12241a 0%, #1f3a2b 100%);
      color: white;
      padding: 32px 24px;
      text-align: center;
    }
    .header-logo {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-weight: 700;
      font-size: 18px;
    }
    .logo-icon {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: #25d366;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .header h1 {
      margin: 12px 0 0;
      font-size: 24px;
      font-weight: 800;
    }
    .body {
      padding: 32px 24px;
    }
    .greeting {
      font-size: 16px;
      margin-bottom: 24px;
      color: #111827;
    }
    .card {
      background: #f4f7f2;
      border: 1px solid #d8e6da;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .card-title {
      font-weight: 700;
      color: #1f3a2b;
      margin: 0 0 12px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .card-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e0ede2;
    }
    .card-row:last-child {
      border-bottom: none;
    }
    .card-label {
      color: #5b6474;
      font-weight: 500;
    }
    .card-value {
      color: #111827;
      font-weight: 700;
      text-align: right;
      word-break: break-word;
    }
    .utm-info {
      background: #eef5ee;
      border: 1px solid #d0e2d2;
      border-radius: 8px;
      padding: 12px;
      font-size: 13px;
      color: #1f3a2b;
      margin-bottom: 24px;
    }
    .cta-button {
      display: inline-block;
      background: #25d366;
      color: white;
      padding: 12px 28px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 700;
      margin: 24px 0;
      transition: background 0.2s;
    }
    .cta-button:hover {
      background: #1fa956;
    }
    .footer {
      background: #f9fafb;
      border-top: 1px solid #e5e7eb;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
    .footer-brand {
      font-weight: 700;
      color: #111827;
      margin-bottom: 8px;
    }
    a {
      color: #25d366;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    center {
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="header-logo">
        <div class="logo-icon">📱</div>
        <span>Linkize</span>
      </div>
      <h1>Novo Lead Interessado!</h1>
    </div>

    <div class="body">
      <p class="greeting">Olá! Um novo usuário se cadastrou na landing page. Aqui estão os detalhes:</p>

      <div class="card">
        <h3 class="card-title">👤 Informações de Contato</h3>
        <div class="card-row">
          <span class="card-label">Nome:</span>
          <span class="card-value">${data.fullName}</span>
        </div>
        <div class="card-row">
          <span class="card-label">Email:</span>
          <span class="card-value"><a href="mailto:${data.email}">${data.email}</a></span>
        </div>
        <div class="card-row">
          <span class="card-label">WhatsApp:</span>
          <span class="card-value"><a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}">${data.whatsapp}</a></span>
        </div>
      </div>

      ${utmInfo ? `
      <div class="utm-info">
        <strong>📊 Origem do Lead:</strong><br>
        ${utmInfo}${data.referrer ? `<br>Referrer: ${data.referrer}` : ''}
      </div>
      ` : ''}

      <center>
        <a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" class="cta-button">💬 Conversar via WhatsApp</a>
      </center>

      <p style="color: #5b6474; font-size: 14px; margin-top: 20px; text-align: center;">
        ⏰ <strong>Responda rápido</strong> — este lead acabou de se cadastrar!
      </p>
    </div>

    <div class="footer">
      <div class="footer-brand">🚀 Linkize</div>
      <p style="margin: 0;">O Shopify do WhatsApp raiz brasileiro</p>
      <p style="margin-top: 12px; color: #9ca3af;">Enviado automático para leads da landing page</p>
    </div>
  </div>
</body>
</html>
  `;
};
