<template>
  <section id="como-funciona" class="flow">
    <div class="section-container">
      <div class="flow-heading">
        <h2>Se você já vende pelo WhatsApp, a Linkize organiza e profissionaliza seu negócio.</h2>
      </div>

      <div class="flow-grid">
        <article class="flow-step">
          <span>1</span>
          <h3>Monte seu catálogo</h3>
          <p>Cadastre produtos, categorias e preços em poucos minutos pelo celular ou desktop.</p>
        </article>
        <article class="flow-step">
          <span>2</span>
          <h3>Compartilhe por link e QR</h3>
          <p>Divulgue no status, Instagram, loja física, delivery e qualquer ponto de contato.</p>
        </article>
        <article class="flow-step">
          <span>3</span>
          <h3>Receba pedidos prontos</h3>
          <p>Cliente escolhe os itens e a mensagem chega no seu WhatsApp pronta para fechar.</p>
        </article>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sem logica nesta secao.
</script>

<style scoped>
.flow {
  padding: 4.5rem 0;
}

.flow-heading {
  text-align: center;
}

.flow-heading h2 {
  margin: 0 auto;
  max-width: 28ch;
  font-size: clamp(1.65rem, 3vw, 2.3rem);
}

.flow-grid {
  margin-top: 2.1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.flow-step {
  position: relative;
  padding: 1.3rem;
  border-radius: 18px;
  background: var(--surface-soft);
  border: 1px solid #d0e2d2;
}

.flow-step span {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #1f8f4d;
  color: #fff;
  font-weight: 700;
}

.flow-step h3 {
  margin: 0.95rem 0 0.5rem;
  font-size: 1.1rem;
}

.flow-step p {
  margin: 0;
  color: var(--muted);
  line-height: 1.58;
  font-size: 0.95rem;
}

@media (max-width: 991px) {
  .flow-grid {
    grid-template-columns: 1fr;
  }
}
</style>
