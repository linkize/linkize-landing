<template>
  <section
    id="hero"
    class="d-flex flex-column justify-content-center align-items-center text-center text-white"
  >
    <img src="/logo.png" alt="Logo Linkize" class="mb-4" style="width: 96px; height: 96px; object-fit: contain;" />
    <h1 class="display-4 fw-bold">Vendedor Automático 24h no WhatsApp</h1>
    <p class="lead mb-4">Transforme conversas em vendas com checkout rápido.</p>
    <a href="#conversion-form" class="btn btn-light btn-lg px-4 py-2 rounded-pill btn-cta">Cadastre-se agora</a>
  </section>
</template>

<script setup lang="ts">
// O estilo do gradiente foi movido para a tag <style> para usar animações
</script>

<style scoped>
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#hero {
  min-height: 100vh;
  width: 100%;
  padding: 88px 16px 72px;
  background: linear-gradient(-45deg, #0077B6, #00B1D1, #00E3A3, #00B1D1);
  background-size: 400% 400%;
  animation: gradient-animation 15s ease infinite;
}

.btn-cta {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
