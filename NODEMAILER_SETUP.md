# 📧 Nodemailer - Setup Local Simples

Usando Nodemailer direto do Node.js para enviar emails localmente.

## ⚡ Setup Rápido (3 opções)

### Opção 1: Gmail (Recomendado - 5 min)

1. **Gerar Senha de App** em Google Account:
   - https://myaccount.google.com → Security
   - 2-Step Verification (ativar se não tiver)
   - App passwords → Mail → gerar
   - Copiar senha de 16 caracteres

2. **Configurar .env:**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local`:
   ```env
   GMAIL_USER=seu.email@gmail.com
   GMAIL_PASSWORD=abcd efgh ijkl mnop
   ```

3. **Rodar ambos juntos:**
   ```bash
   npm run dev:all
   ```
   
   Isso roda:
   - ✅ Vite (http://localhost:5173)
   - ✅ Email Server (http://localhost:3001)

4. **Testar:**
   - Preencha o formulário da landing
   - Veja os logs no terminal do email-server 💚

---

### Opção 2: Ethereal (Sandbox Infinito - 1 min)

Deixar `GMAIL_USER` em branco no `.env.local`:

```env
# GMAIL_USER=
# GMAIL_PASSWORD=
VITE_EMAIL_SERVER_URL=http://localhost:3001
EMAIL_SERVER_PORT=3001
```

```bash
npm run dev:all
```

Ethereal cria credenciais automaticamente na primeira execução. Emails serão fake mas com preview URL! 🎉

---

### Opção 3: Apenas Servidor de Email

Se quiser só testar o servidor sem a landing:

```bash
npm run dev:email
```

Isso roda só em http://localhost:3001

---

## 🎯 O Que Funciona

| Feature | Status |
|---------|--------|
| Nova conta Ethereal auto | ✅ |
| Gmail com app password | ✅ |
| HTML template com branding | ✅ |
| 2 destinatários automático | ✅ |
| Preview URL (Ethereal) | ✅ |
| Logs no console | ✅ |

---

## 📮 Endpoints

### `POST /api/send-lead-notification`

**Payload (JSON):**
```json
{
  "full_name": "João Silva",
  "email": "joao@example.com",
  "whatsapp": "(11) 98765-4321",
  "utm_source": "landing_page",
  "utm_medium": "organic",
  "utm_campaign": "test"
}
```

**Response (sucesso):**
```json
{
  "success": true,
  "message": "Emails enviados com sucesso"
}
```

---

## 🔧 Variáveis de Ambiente

| Variável | Padrão | Descrição |
|----------|--------|-----------|
| `GMAIL_USER` | - | Email Gmail (deixar vazio = Ethereal) |
| `GMAIL_PASSWORD` | - | App password de 16 chars |
| `VITE_EMAIL_SERVER_URL` | `http://localhost:3001` | URL do servidor |
| `EMAIL_SERVER_PORT` | `3001` | Porta do servidor |

---

## 🚀 Próximas Etapas

### Desenvolvimento:
- Usar `npm run dev:all` para testar tudo
- Usar Ethereal para não poluir inbox
- Ver logs em tempo real

### Produção:
- Mude `VITE_EMAIL_SERVER_URL` para seu servidor real
- Use Gmail app password ou Mailgun/SendGrid
- Deploy do email-server em container/VPS

---

## ❓ Troubleshooting

| Erro | Solução |
|------|---------|
| `Cannot find module 'email-server.ts'` | Rodar `npm install` de novo |
| `GMAIL_USER não configurado` | Deixar vazio = Ethereal, ou preencher Gmail |
| Email não chega em 2 destinatários | Checar VITE_EMAIL_SERVER_URL no .env.local |
| Port 3001 já em uso | `EMAIL_SERVER_PORT=3002 npm run dev:all` |

---

## 📧 Exemplo Completo

```bash
# 1. Clone e instale
git clone <repo>
cd linkize-landing
npm install

# 2. Configure (copiar e editar)
cp .env.example .env.local

# 3. Rodar tudo
npm run dev:all

# 4. Preencha o formulário em http://localhost:5173
# 5. Veja os emails sendo enviados no terminal! 🎉
```

---

**Pronto!** Você tem email totalmente funcional localmente. 💚
