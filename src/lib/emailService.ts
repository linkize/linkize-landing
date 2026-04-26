import nodemailer from 'nodemailer';

// Configurar transportador (mude conforme seu provedor)
let transporter: any = null;

export const initEmailService = async () => {
  // Opção 1: Gmail (recomendado)
  // Precisa de GMAIL_USER e GMAIL_PASSWORD (app password) no .env
  if (process.env.GMAIL_USER && process.env.GMAIL_PASSWORD) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    console.log('✅ Email service initialized with Gmail');
    return;
  }

  // Opção 2: Ethereal (para testes)
  // Automaticamente grátis e infinito
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  console.log('✅ Email service initialized with Ethereal (sandbox)');
};

export interface LeadEmailPayload {
  full_name: string;
  email: string;
  whatsapp: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  metadata?: any;
}

export const sendLeadNotification = async (lead: LeadEmailPayload) => {
  if (!transporter) {
    await initEmailService();
  }

  const recipientEmails = [
    'alessandro.rodrigues01a@gmail.com',
    'laisgbueno62@gmail.com',
  ];

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
    .cta { display: inline-block; background: #25d366; color: white; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; text-align: center; }
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
          <span class="card-value">${lead.full_name}</span>
        </div>
        <div class="card-row">
          <span class="card-label">Email:</span>
          <span class="card-value"><a href="mailto:${lead.email}">${lead.email}</a></span>
        </div>
        <div class="card-row">
          <span class="card-label">WhatsApp:</span>
          <span class="card-value"><a href="https://wa.me/${lead.whatsapp.replace(/\D/g, '')}">${lead.whatsapp}</a></span>
        </div>
      </div>

      ${lead.utm_source || lead.utm_medium || lead.utm_campaign ? `
      <div class="utm-info">
        <strong>📊 Origem do Lead:</strong><br>
        ${lead.utm_source ? `Fonte: ${lead.utm_source}<br>` : ''}${lead.utm_medium ? `Tipo: ${lead.utm_medium}<br>` : ''}${lead.utm_campaign ? `Campanha: ${lead.utm_campaign}` : ''}
      </div>
      ` : ''}

      <div style="text-align: center; margin: 24px 0;">
        <a href="https://wa.me/${lead.whatsapp.replace(/\D/g, '')}" class="cta">💬 Conversar via WhatsApp</a>
      </div>

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
  `;

  try {
    // Enviar para cada destinatário
    const results = await Promise.all(
      recipientEmails.map((to) =>
        transporter.sendMail({
          from: process.env.GMAIL_USER || 'noreply@linkize.com',
          to,
          subject: `Novo Lead: ${lead.full_name}`,
          html: emailHtml,
        })
      )
    );

    console.log(`✅ Emails enviados com sucesso para ${recipientEmails.length} destinatários`);
    
    // Se for Ethereal, mostrar preview URL
    if (!process.env.GMAIL_USER) {
      results.forEach((info) => {
        const previewUrl = nodemailer.getTestMessageUrl(info);
        if (previewUrl) {
          console.log(`📧 Preview: ${previewUrl}`);
        }
      });
    }

    return { success: true, message: 'Emails enviados com sucesso' };
  } catch (error: any) {
    console.error('❌ Erro ao enviar emails:', error);
    throw new Error(`Falha ao enviar emails: ${error.message}`);
  }
};
