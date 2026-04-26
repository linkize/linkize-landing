<template>
  <section id="beneficios" class="features">
    <div class="section-container">
      <h2>Tudo que você precisa para vender</h2>
      <div class="features-grid">
        <article class="feature-card">
          <span class="feature-icon"><i class="bi bi-shop"></i></span>
          <h3>Catálogo Inteligente</h3>
          <p>Cadastre produtos pelo WhatsApp ou painel web. Organize, atualize preços e compartilhe por link.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon"><i class="bi bi-chat-dots"></i></span>
          <h3>Pedidos Rápidos</h3>
          <p>Cliente clica, escolhe e vai direto pro WhatsApp. Você recebe o pedido pronto.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon"><i class="bi bi-qr-code"></i></span>
          <h3>QR Codes</h3>
          <p>Imprima e cole na loja, cardápio ou delivery. Cliente escaneia e acessa seu catálogo.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon"><i class="bi bi-graph-up-arrow"></i></span>
          <h3>Métricas Claras</h3>
          <p>Veja cliques, pedidos e produtos mais vistos. Dados simples para decidir melhor.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon"><i class="bi bi-lightning-charge"></i></span>
          <h3>Automação Inteligente</h3>
          <p>Respostas automáticas, fluxos de venda e IA para acelerar seu atendimento.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon"><i class="bi bi-phone"></i></span>
          <h3>Painel + WhatsApp</h3>
          <p>Controle tudo pelo painel web ou diretamente no WhatsApp, do jeito que preferir.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sem logica nesta secao.
</script>

<style scoped>
.features {
  padding: 5rem 0;
}

.features h2 {
  text-align: center;
  margin: 0 0 2.2rem;
  font-size: clamp(1.65rem, 3vw, 2.4rem);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.feature-card {
  border-radius: 18px;
  padding: 1.3rem;
  border: 1px solid #d8e6da;
  background: #ffffff;
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #b7d7bc;
  box-shadow: 0 16px 30px rgba(24, 61, 35, 0.09);
}

.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #e9f6ed;
  color: #237e47;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.feature-card h3 {
  margin: 0.95rem 0 0.45rem;
  font-size: 1.1rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 991px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .features {
    padding: 3.5rem 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
