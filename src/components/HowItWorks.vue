<template>
  <section id="como-funciona" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5 display-5">Vender no WhatsApp nunca foi tão fácil</h2>
      <div class="row g-4 text-center align-items-start position-relative">
        <!-- Linha conectora (apenas desktop) -->
        <div class="col-12 d-none d-lg-block position-absolute top-50 start-0 w-100" style="transform: translateY(-50%); z-index: 0;">
          <svg width="100%" height="2">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#dee2e6" stroke-width="2" stroke-dasharray="8, 8"/>
          </svg>
        </div>

        <div class="col-6 col-lg-3 step">
          <div class="step-icon">1</div>
          <div class="fw-bold mt-3">Cliente pede</div>
          <div class="text-muted small">“Quero um shampoo”</div>
        </div>
        <div class="col-6 col-lg-3 step">
          <div class="step-icon">2</div>
          <div class="fw-bold mt-3">Bot sugere</div>
          <div class="text-muted small">Produtos disponíveis</div>
        </div>
        <div class="col-6 col-lg-3 step">
          <div class="step-icon">3</div>
          <div class="fw-bold mt-3">Pagamento rápido</div>
          <div class="text-muted small">Pix ou Mercado Pago</div>
        </div>
        <div class="col-6 col-lg-3 step">
          <div class="step-icon">4</div>
          <div class="fw-bold mt-3">Confirmação instantânea</div>
          <div class="text-muted small">Pedido atualizado</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sem lógica por enquanto
</script>

<style scoped>
.step {
  position: relative;
  z-index: 1;
  background-color: #fff; /* Cor de fundo da seção */
  padding: 1rem 0;
}
.step-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0077B6;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Em telas menores, removemos o padding que cria espaço para a linha */
@media (max-width: 991.98px) {
  .step {
    background-color: transparent;
    padding: 0;
  }
}
</style>
