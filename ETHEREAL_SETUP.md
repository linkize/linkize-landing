# 📧 Ethereal Mail - Sandbox Infinito Grátis

A forma **mais simples** de testar emails - grátis forever, zero setup real.

## ⚡ 2 Passos (1 minuto)

### 1️⃣ Deploy da Função (30 seg)

```bash
supabase functions deploy send-lead-notification --project-id YOUR_PROJECT_ID
```

**Pronto!** Ethereal não precisa de credenciais no Supabase.

### 2️⃣ Testar (30 seg)

```bash
npm run dev
```

Preencha o formulário e veja os logs na função! 🎉

---

## 🎯 Como Funciona

- ✅ **Sandbox SMTP infinito** (ethereal.email)
- ✅ **Grátis forever** - sem vencer, sem limites, sem config real
- ✅ **Local testing** - emails não saem de verdade
- ✅ **Preview disponível** - pode visualizar os emails no Ethereal
- ✅ **Perfeito para dev** - teste a lógica sem enviar emails reais

---

## 📊 Fluxo

```
1. Preencher formulário na landing
         ↓
2. Lead inserido no Supabase
         ↓
3. Edge Function chamada
         ↓
4. Email queued em ethereal.email (sandbox)
         ↓
5. Você vê os logs no Supabase Dashboard
         ↓
6. Pronto para produção!
```

---

## 🚀 Para Passar Para Produção

Quando quiser enviar **de verdade**, escolha um:\

| Opção | Setup | Custo |
|-------|-------|-------|
| **Gmail** | 5 min | Grátis |
| **Mailgun** | 5 min | Grátis (50k/mês) |
| **SendGrid** | 5 min | Grátis (100/dia) |
| **Brevo** | 5 min | Grátis (300/dia) |

Todos usam a mesma integração que você já tem! 🎉

---

## ✅ O que Será Logado

```
📧 Email enviado (Ethereal Sandbox):
   Para: alessandro.rodrigues01a@gmail.com, laisgbueno62@gmail.com
   Assunto: Novo Lead: João Silva
   HTML: 2450 caracteres
```

Veja os logs em: **Supabase Dashboard → Functions → send-lead-notification → Logs**

---

## 📝 Próxima Etapa

Quando estiver pronto para integração real, use um destes guias:
- [GMAIL_SETUP.md](GMAIL_SETUP.md) - Gmail pessoal
- [MAILGUN_SETUP.md](MAILGUN_SETUP.md) - Mailgun grátis
- Ou crie novo guia para SendGrid/Brevo

Mesma Edge Function, troca apenas o SMTP! 💚
