<template>
  <section id="beneficios" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 display-5">Tudo que você precisa, sem complicação</h2>
      <div class="row g-4">
        <div class="col-12 col-md-4">
          <div class="card h-100 shadow border-0 rounded-4 card-benefit">
            <div class="card-body text-center p-4">
              <div class="display-3 mb-3">💬</div>
              <h5 class="card-title fw-bold">Conversa que vende</h5>
              <p class="card-text text-muted">Catálogo inteligente no WhatsApp.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card h-100 shadow border-0 rounded-4 card-benefit">
            <div class="card-body text-center p-4">
              <div class="display-3 mb-3">⚡</div>
              <h5 class="card-title fw-bold">Agilidade</h5>
              <p class="card-text text-muted">Checkout em segundos com Pix/MP.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card h-100 shadow border-0 rounded-4 card-benefit">
            <div class="card-body text-center p-4">
              <div class="display-3 mb-3">🛠️</div>
              <h5 class="card-title fw-bold">Simplicidade</h5>
              <p class="card-text text-muted">Lojista gerencia pelo próprio WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sem lógica por enquanto
</script>

<style scoped>
.card-benefit {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-benefit:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important;
}
</style>
