# 📧 Configuração do Sistema de Email

Guia completo para configurar e deplacar o sistema de notificação de leads.

## ✅ Checklist de Configuração

### 1️⃣ **Obter API Key do Resend**

1. Acesse [resend.com](https://resend.com)
2. Faça login ou crie uma conta
3. Vá para **Settings → API Keys**
4. Clique em **"Create API Key"**
5. Copie a chave (começará com `re_`)

### 2️⃣ **Configurar no Supabase**

#### a) Adicionar variável de ambiente:
1. Acesse [Supabase Dashboard](https://app.supabase.com)
2. Selecione seu projeto `linkize-landing`
3. Vá para **Settings → Edge Functions → Environment Variables**
4. Adicione:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Cole a API Key do Resend (ex: `re_xxxxx...`)
5. Clique em **Save**

#### b) Verificar domínio de email:
1. No Resend, vá para **Domains**
2. Configure seu domínio (ou use `onboarding@resend.dev` para testes)
3. No Supabase Edge Function, garantir que o `from` email esteja verificado

### 3️⃣ **Deployar a Edge Function**

Opção A: **Usando Supabase CLI** (recomendado):

```bash
# Instalar CLI (se não tiver)
npm install -g supabase

# Fazer login
supabase login

# Deplacar função
supabase functions deploy send-lead-notification --project-id YOUR_PROJECT_ID
```

Opção B: **Pelo dashboard Supabase**:
1. Vá para **Functions**
2. Clique em **Create Function** ou use a UI para fazer upload

### 4️⃣ **Atualizar variável de ambiente no Vite**

Editar `.env.local` (criar se não existir):

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Obter esses valores em **Supabase Dashboard → Settings → API**

### 5️⃣ **Testar o fluxo**

1. Rodar o projeto localmente:
   ```bash
   npm run dev
   ```

2. Preencher o formulário de conversão
3. Verificar se chegou email nos 2 destinatários:
   - `alessandro.rodrigues01a@gmail.com`
   - `laisgbueno62@gmail.com`

4. Verificar logs no Supabase:
   - **Functions → send-lead-notification → Logs**

### 6️⃣ **Possíveis Problemas**

| Problema | Solução |
|----------|---------|
| Email não chega | Verificar se `RESEND_API_KEY` está correto no Supabase Settings |
| Erro 401 na função | Resend API Key inválida ou expirada |
| CORS error no browser | Verificar se função permite origin `*` (já configurado) |
| Função não existe (404) | Garantir que foi deployada com o nome `send-lead-notification` |

## 📝 Estrutura do Sistema

### Fluxo de Email:

```
1. User submete formulário
         ↓
2. ConversionForm.vue valida
         ↓
3. Insere lead no Supabase
         ↓
4. Chama Edge Function (async, não bloqueia)
         ↓
5. Edge Function formata HTML
         ↓
6. Envia para 2 destinatários via Resend
         ↓
7. Usuário vê confirmação (mesmo se email falhar)
```

### Arquivos envolvidos:

- **Edge Function:** `/supabase/functions/send-lead-notification/index.ts`
- **Integração:** `/src/components/ConversionForm.vue` (linha ~75: chamada fetch)
- **Dados enviados:**
  - `full_name`
  - `email`
  - `whatsapp`
  - `utm_source`, `utm_medium`, `utm_campaign`
  - `metadata` (userAgent, referrer, path)

### Email customizado:

- Template com branding Linkize (verde #25d366)
- Inclui nome, email, WhatsApp
- Links clicáveis para WhatsApp direto
- Info de origem do lead (UTM params)
- CTA para conversar via WhatsApp

## 🔗 Variáveis de Ambiente Necessárias

| Variável | Local | Valor |
|----------|-------|-------|
| `RESEND_API_KEY` | Supabase Settings | API Key do Resend |
| `VITE_SUPABASE_URL` | `.env.local` | URL do seu projeto Supabase |
| `VITE_SUPABASE_ANON_KEY` | `.env.local` | Chave anônima do Supabase |

## 📞 Support

Se tiver problemas:
1. Verificar logs da função no Supabase Dashboard
2. Confirmar que 2 destinatários estão corretos
3. Testar API Key do Resend isoladamente (curl test)
4. Verificar console do browser (devtools) para erros de rede
