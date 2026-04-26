# 📧 Setup Gmail SMTP - Direto do Node

Solução ultrarrápida usando sua conta Gmail pessoal.

## ⚡ 4 Passos (5 minutos)

### 1️⃣ Gerar Senha de App do Gmail (2 min)

1. Acesse sua conta Google: https://myaccount.google.com
2. Vá para **Security** (Segurança)
3. Ative **2-Step Verification** (se ainda não tiver)
4. Depois vá para **App passwords**
5. Selecione: **Mail** e **Windows Computer** (ou seu SO)
6. Clique **Generate**
7. **Copie** a senha de 16 caracteres (ex: `abcd efgh ijkl mnop`)

### 2️⃣ Configurar no Supabase (1 min)

1. Acesse [Supabase Dashboard](https://app.supabase.com)
2. Seu projeto → **Settings → Edge Functions → Environment Variables**
3. Adicione 2 variáveis:

```
GMAIL_USER = seu.email@gmail.com
GMAIL_PASSWORD = abcd efgh ijkl mnop
```

4. Clique **Save**

### 3️⃣ Deploy da Função (1 min)

```bash
supabase functions deploy send-lead-notification --project-id YOUR_PROJECT_ID
```

### 4️⃣ Testar! (1 min)

```bash
npm run dev
```

Preencha o formulário e verifique os 2 emails:
- alessandro.rodrigues01a@gmail.com
- laisgbueno62@gmail.com

**Pronto! 🎉**

---

## 🔧 Como encontrar a Senha de App

| Passo | Local |
|-------|-------|
| 2FA ativado? | Google Account → Security → 2-Step Verification |
| Senha de App | Google Account → Security → App passwords |
| Formato | 16 caracteres (ex: `abcd efgh ijkl mnop`) |

---

## 📧 Variáveis Obrigatórias

| Variável | Formato | Exemplo |
|----------|---------|---------|
| `GMAIL_USER` | Email completo | seu.email@gmail.com |
| `GMAIL_PASSWORD` | Senha de app (16 chars) | `abcd efgh ijkl mnop` |

---

## ❓ Troubleshooting

| Erro | Solução |
|------|---------|
| 535 Authentication failed | Senha de app errada. Copie de novo! |
| 2-Factor Auth required | Ative 2FA em Google Account Settings |
| Email não chega | Cheque folder **Promotions** ou **Spam** |
| 534 App-less browser | Use senha de app, não de conta |

---

## 🎯 O que Será Enviado

- ✅ Nome + Email + WhatsApp
- ✅ Link direto para WhatsApp
- ✅ Origem e campanha (UTM)
- ✅ Branding Linkize (verde #25d366)
- ✅ 2 destinatários automáticos

---

**Obs:** Se usar essa mesma função com Resend, Mailgun ou outro, é só trocar a Engine Function (endpoint fica igual na integração).
