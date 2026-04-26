# 📧 Setup Mailgun - Rápido e Fácil

## ⚡ 5 Mini-Passos

### 1. Criar conta no Mailgun (2 min)
1. Acesse https://mailgun.com
2. Clique em **Sign Up**
3. Preencha email + senha (grátis!)
4. Verifique seu email

### 2. Copiar suas credenciais (1 min)
No painel do Mailgun:
1. Vá para **Sending → Domain Settings**
2. Procure por **API Key** → Copie (começa com `key-`)
3. Procure por **Domain Name** → Copie (algo como `mg.seusite.com` ou `sandbox...`)

### 3. Configurar no Supabase (2 min)
1. Acesse [Supabase Dashboard](https://app.supabase.com)
2. Seu projeto → **Settings → Edge Functions → Environment Variables**
3. Adicione 2 variáveis:

```
MAILGUN_API_KEY = key-xxx...
MAILGUN_DOMAIN = sandbox123abc.mailgun.org
```

4. Clique **Save**

### 4. Deploy da função (1 min)
No terminal do projeto:
```bash
supabase functions deploy send-lead-notification --project-id YOUR_PROJECT_ID
```

### 5. Testar! (1 min)
1. Acesse seu site localmente: `npm run dev`
2. Preencha o formulário de conversão
3. Cheque os 2 emails para confirmar que chegou

**Pronto! 🎉**

---

## 📛 Onde encontrar suas credenciais

| Item | Onde procurar |
|------|---------------|
| **API Key** | Mailgun Dashboard → Settings → API Keys → Private Key |
| **Domain** | Mailgun Dashboard → Sending → Domain Settings → Domain Name |

**Dica:** Se usar sandbox, pode enviар só para emails previamente verificados.

Para produção completo, ative seu domínio de verdade no Mailgun.

---

## ❓ Troubleshooting

| Erro | Solução |
|------|---------|
| 401 Unauthorized | API Key errada. Copie de novo do Mailgun |
| 404 Domain not found | Domain Name errado. Use exatamente como aparece no painel |
| Email não chega | Pode estar em spam. Checke a pasta **Promotions** |

---

## 🎯 Dados do Email Que Será Enviado

Cada email recebido terá:
- ✅ Nome completo
- ✅ Email de contato
- ✅ WhatsApp (link clicável)
- ✅ Origem (UTM source/medium/campaign)
- ✅ Data de cadastro
- ✅ User Agent + Referrer

**Destinatários:**
- alessandro.rodrigues01a@gmail.com
- laisgbueno62@gmail.com

---

Só isso! Se funcionar, você tá pronto. 🚀
