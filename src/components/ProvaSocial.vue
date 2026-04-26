<template>
  <section id="prova-social" class="social-proof">
    <div class="section-container">
      <h2>Resultados reais para quem vive de venda no WhatsApp</h2>

      <article class="quote-card">
        <img src="https://i.pravatar.cc/100?img=32" alt="Cliente da Linkize" width="72" height="72" />
        <div>
          <p>
            “Com a Linkize eu parei de perder pedido no meio da conversa. Hoje o cliente chega mais
            decidido e eu fecho mais rápido. O catálogo com link e QR mudou meu dia a dia.”
          </p>
          <strong>Ana, dona da Cosméticos Naturais</strong>
        </div>
      </article>

      <div class="kpi-grid">
        <article>
          <strong>+30%</strong>
          <span>em vendas</span>
        </article>
        <article>
          <strong>24h</strong>
          <span>catálogo disponível</span>
        </article>
        <article>
          <strong>+3x</strong>
          <span>mais agilidade nos pedidos</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sem logica nesta secao.
</script>

<style scoped>
.social-proof {
  padding: 4.75rem 0;
}

.social-proof h2 {
  text-align: center;
  margin: 0;
  font-size: clamp(1.65rem, 3vw, 2.3rem);
}

.quote-card {
  margin-top: 2rem;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #d8e4d7;
  box-shadow: var(--shadow);
  padding: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
}

.quote-card img {
  border-radius: 999px;
}

.quote-card p {
  margin: 0 0 0.5rem;
  color: #1b2e23;
  line-height: 1.62;
}

.quote-card strong {
  color: #2f4738;
  font-size: 0.95rem;
}

.kpi-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
}

.kpi-grid article {
  border-radius: 16px;
  border: 1px solid #d6e5d6;
  background: #f8fcf7;
  padding: 1.1rem;
  text-align: center;
}

.kpi-grid strong {
  display: block;
  font-size: 1.9rem;
  line-height: 1;
}

.kpi-grid span {
  color: var(--muted);
  font-size: 0.92rem;
}

@media (max-width: 991px) {
  .kpi-grid {
    grid-template-columns: 1fr;
  }

  .quote-card {
    grid-template-columns: 1fr;
  }
}
</style>
