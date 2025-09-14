<template>
  <section
    id="hero"
    class="d-flex flex-column justify-content-center align-items-center text-center text-white"
    :style="heroStyle"
  >
    <img src="/logo.png" alt="Logo Linkize" class="mb-4" style="width: 96px; height: 96px; object-fit: contain;" />
    <h1 class="display-4 fw-bold">Linkize</h1>
    <p class="lead mb-4">Vendedor Automático 24h por WhatsApp</p>
    <a href="#beneficios" class="btn btn-light btn-lg px-4 py-2">Começar agora grátis</a>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const gradient = 'linear-gradient(135deg, #0077B6 0%, #00B1D1 50%, #00E3A3 100%)'
const heroStyle = computed(() => ({
  minHeight: '100vh',
  width: '100%',
  background: gradient,
}))
</script>

<style scoped>
#hero {
  padding: 88px 16px 72px;
}
</style>
