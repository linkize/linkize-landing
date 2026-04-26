import express, { Request, Response } from 'express';
import cors from 'cors';
import { sendLeadNotification, initEmailService, LeadEmailPayload } from './src/lib/emailService';

const app = express();
const PORT = process.env.EMAIL_SERVER_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Inicializar serviço de email
await initEmailService();

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Email server running' });
});

// Endpoint para enviar email
app.post('/api/send-lead-notification', async (req: Request, res: Response) => {
  try {
    const payload: LeadEmailPayload = req.body;

    // Validação básica
    if (!payload.full_name || !payload.email) {
      return res.status(400).json({
        success: false,
        message: 'Nome e email são obrigatórios',
      });
    }

    // Enviar email
    const result = await sendLeadNotification(payload);
    
    res.json(result);
  } catch (error: any) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Erro ao enviar email',
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`📧 Email server running on http://localhost:${PORT}`);
  console.log(`📮 POST http://localhost:${PORT}/api/send-lead-notification`);
});
