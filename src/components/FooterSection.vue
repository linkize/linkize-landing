<template>
  <footer class="text-center text-white py-4" :style="footerStyle">
    <div class="container">
      <div class="mb-1">✨ Linkize — conversa que vira venda</div>
      <small class="text-white-50">© 2025 Linkize. Todos os direitos reservados.</small>
    </div>
  </footer>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'

const footerStyle = computed(() => ({ backgroundColor: '#111' }))
</script>
