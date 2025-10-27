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
  <section id="conversion-form" class="py-5" style="background-color: #F9FAFB;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="text-center mb-4">
            <h2 class="display-5 fw-bold">Comece grátis agora</h2>
            <p class="lead text-muted">Cadastre-se e descubra como transformar conversas em vendas.</p>
          </div>
          <div class="card shadow-sm border-0 rounded-4">
            <div class="card-body p-4 p-md-5">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="fullName" class="form-label">Nome completo</label>
                  <input type="text" class="form-control form-control-lg" id="fullName" v-model="form.fullName" required>
                </div>
                <div class="mb-3">
                  <label for="whatsapp" class="form-label">WhatsApp</label>
                  <input 
                    type="text" 
                    class="form-control form-control-lg" 
                    id="whatsapp" 
                    v-model="form.whatsapp"
                    v-imask="{ mask: '(00) 00000-0000' }"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">E-mail</label>
                  <input type="email" class="form-control form-control-lg" id="email" v-model="form.email" required>
                </div>
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <div v-if="success" class="alert alert-success">Cadastro enviado com sucesso!</div>

                <div class="d-grid">
                  <button :disabled="loading" type="submit" class="btn btn-primary btn-lg rounded-pill mt-3">
                    <span v-if="!loading">Quero testar a Linkize</span>
                    <span v-else>Enviando…</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.btn-primary {
    background-color: #0077B6;
    border-color: #0077B6;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
    background-color: #005f94;
    transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#conversion-form {
  animation: fadeIn 1s ease-out forwards;
}
</style>
