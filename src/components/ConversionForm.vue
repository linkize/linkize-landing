<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  fullName: '',
  whatsapp: '',
  email: ''
});

const handleSubmit = () => {
  console.log('Dados do formulário:', form.value);
  alert('Cadastro enviado com sucesso! (Verifique o console para ver os dados)');
  // Reset form
  form.value.fullName = '';
  form.value.whatsapp = '';
  form.value.email = '';
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
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg rounded-pill mt-3">Quero testar a Linkize</button>
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
