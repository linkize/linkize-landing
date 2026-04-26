<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const form = ref({
  fullName: '',
  whatsapp: '',
  email: ''
});

const loading = ref(false);
const success = ref(false);
const error = ref<string | null>(null);

const getUtmFromSearch = (search = window.location.search) => {
  try {
    const params = new URLSearchParams(search);
    return {
      utm_campaign: params.get('utm_campaign') || null,
      utm_medium: params.get('utm_medium') || null,
      utm_source: params.get('utm_source') || null
    };
  } catch (e) {
    return { utm_campaign: null, utm_medium: null, utm_source: null };
  }
};

const normalizeWhatsapp = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (!digits) return null;
  // se 11 dígitos (55 + 9), assume BR e prefixa +
  if (digits.length === 11) return `+55${digits}`;
  // se já tiver country code (12+), prefixa +
  if (digits.length > 11) return `+${digits}`;
  // se menos, devolve digits (backend pode validar)
  return digits;
};

const handleSubmit = async () => {
  error.value = null;
  success.value = false;
  loading.value = true;

  try {
    // validação simples
    if (!form.value.fullName || !form.value.email) {
      throw new Error('Nome e e-mail são obrigatórios');
    }

    const whatsappNormalized = normalizeWhatsapp(form.value.whatsapp || '');
    const utm = getUtmFromSearch();

    const payload: any = {
      full_name: form.value.fullName,
      email: form.value.email,
      whatsapp: whatsappNormalized,
      source: 'landing_page',
      utm_campaign: utm.utm_campaign,
      utm_medium: utm.utm_medium,
      utm_source: utm.utm_source,
      metadata: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
        referrer: typeof document !== 'undefined' ? document.referrer : null,
        landingPath: typeof window !== 'undefined' ? window.location.pathname : null
      }
    };

    // Inserir no Supabase
    const { data, error: supabaseError } = await supabase
      .from('leads')
      .insert(payload)
      .select('id')
      .single();

    if (supabaseError) {
      throw supabaseError;
    }

    // Disparar email de notificação (não bloqueia o fluxo)
    const emailServerUrl = import.meta.env.VITE_EMAIL_SERVER_URL || 'http://localhost:3001';
    
    fetch(`${emailServerUrl}/api/send-lead-notification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.warn('Falha ao enviar email de notificação:', err);
      // Não falha o fluxo do usuário
    });

    success.value = true;
    // reset form
    form.value.fullName = '';
    form.value.whatsapp = '';
    form.value.email = '';
  } catch (err: any) {
    error.value = err?.message || 'Erro ao enviar. Tente novamente.';
    // eslint-disable-next-line no-console
    console.error('Lead submit error:', err);
  } finally {
    loading.value = false;
  }
};
</script>

<script lang="ts">
import { IMaskDirective } from 'vue-imask';

export default {
  directives: {
    imask: IMaskDirective
  }
}
</script>

<template>
  <section id="conversion-form" class="signup-section">
    <div class="section-container">
      <div class="signup-layout">
        <div class="signup-copy">
          <p class="copy-badge">Teste sem compromisso</p>
          <h2>Comece a vender melhor hoje</h2>
          <p>
            Crie sua conta gratuita, publique seu catálogo em minutos e receba pedidos prontos no
            WhatsApp.
          </p>
          <ul>
            <li><i class="bi bi-check2"></i> 30 dias grátis</li>
            <li><i class="bi bi-check2"></i> Sem cartão para começar</li>
            <li><i class="bi bi-check2"></i> Setup simples e guiado</li>
          </ul>
        </div>

        <div class="signup-card">
          <div class="card-head">
            <h3>Criar minha conta grátis</h3>
            <p>Leva menos de 1 minuto.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="signup-form">
            <label for="fullName">Nome completo</label>
            <input type="text" id="fullName" v-model="form.fullName" required>

            <label for="whatsapp">WhatsApp</label>
            <input
              type="text"
              id="whatsapp"
              v-model="form.whatsapp"
              v-imask="{ mask: '(00) 00000-0000' }"
              required
            >

            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="form.email" required>

            <div v-if="error" class="status-box status-error">{{ error }}</div>
            <div v-if="success" class="status-box status-success">Cadastro enviado com sucesso!</div>

            <button :disabled="loading" type="submit" class="submit-btn">
              <span v-if="!loading">Quero testar a Linkize</span>
              <span v-else>Enviando...</span>
            </button>
          </form>

          <p class="micro-copy">Ao continuar, voce concorda em receber contato comercial da Linkize.</p>
          </div>
        </div>
      </div>
  </section>
</template>


<style scoped>
.signup-section {
  padding: 5rem 0;
}

.signup-layout {
  background: linear-gradient(145deg, #12241a, #193322);
  border-radius: 30px;
  padding: 1.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.signup-copy {
  color: #f4fff5;
  padding: 1.2rem;
}

.copy-badge {
  margin: 0;
  display: inline-flex;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  font-size: 0.84rem;
}

.signup-copy h2 {
  margin: 1rem 0 0;
  font-size: clamp(1.8rem, 3.2vw, 2.7rem);
  line-height: 1.05;
}

.signup-copy p {
  margin: 0.9rem 0 0;
  color: rgba(241, 251, 243, 0.86);
  line-height: 1.6;
}

.signup-copy ul {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 0;
  display: grid;
  gap: 0.55rem;
}

.signup-copy li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.signup-card {
  border-radius: 20px;
  border: 1px solid #d4e2d7;
  background: #fff;
  padding: 1.2rem;
}

.card-head h3 {
  margin: 0;
  font-size: 1.35rem;
}

.card-head p {
  margin: 0.4rem 0 0;
  color: var(--muted);
}

.signup-form {
  margin-top: 1rem;
  display: grid;
  gap: 0.45rem;
}

.signup-form label {
  font-size: 0.9rem;
  color: #2b4134;
}

.signup-form input {
  border: 1px solid #ccdbcf;
  border-radius: 12px;
  background: #f6faf5;
  color: #1b2f23;
  min-height: 48px;
  padding: 0 0.85rem;
}

.signup-form input:focus {
  border-color: #36b76a;
  outline: 3px solid rgba(37, 211, 102, 0.2);
}

.submit-btn {
  margin-top: 0.65rem;
  border: none;
  border-radius: 12px;
  min-height: 48px;
  color: #fff;
  background: var(--accent);
  font-weight: 700;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.submit-btn:hover {
  filter: brightness(0.94);
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.72;
  cursor: not-allowed;
}

.status-box {
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  font-size: 0.9rem;
}

.status-error {
  color: #8f2234;
  border: 1px solid #f0b8c2;
  background: #fff2f4;
}

.status-success {
  color: #155935;
  border: 1px solid #c2e8d0;
  background: #f0fff5;
}

.micro-copy {
  margin: 0.9rem 0 0;
  color: #6e7a70;
  font-size: 0.78rem;
}

@media (max-width: 991px) {
  .signup-layout {
    grid-template-columns: 1fr;
  }
}
</style>
