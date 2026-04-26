<template>
  <section id="hero">
    <header class="topbar">
      <div class="section-container topbar-inner">
        <a href="#hero" class="brand">
          <span class="brand-mark"><i class="bi bi-whatsapp"></i></span>
          <span>Linkize</span>
        </a>
        <nav class="top-nav">
          <a href="#beneficios">Recursos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#prova-social">Resultados</a>
        </nav>
        <a href="#conversion-form" class="btn-main btn-top">Começar grátis</a>
      </div>
    </header>

    <div class="section-container hero-content">
      <div class="hero-copy">
        <p class="hero-kicker">Canal de vendas para WhatsApp</p>
        <h1>Venda pelo WhatsApp. Profissionalmente.</h1>
        <p class="hero-description">
          Transforme seu WhatsApp no principal canal de vendas. Catálogo organizado,
          pedidos fáceis e métricas reais para crescer sem complicação.
        </p>
        <div class="hero-actions">
          <a href="#conversion-form" class="btn-main">
            <i class="bi bi-whatsapp"></i>
            Começar agora
          </a>
          <a href="#como-funciona" class="btn-ghost">Ver como funciona</a>
        </div>
      </div>

      <aside class="hero-panel" aria-label="Resumo de recursos">
        <h2>Operação simples, resultado rápido</h2>
        <ul>
          <li><i class="bi bi-check2-circle"></i> Catálogo inteligente com link único</li>
          <li><i class="bi bi-check2-circle"></i> QR Code para loja física e delivery</li>
          <li><i class="bi bi-check2-circle"></i> Mensagens prontas para fechar pedido</li>
        </ul>
        <div class="hero-panel-metric">
          <strong>+30%</strong>
          <span>de aumento médio em vendas</span>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sem logica nesta secao.
</script>

<style scoped>
#hero {
  min-height: 100vh;
  padding-bottom: 3.5rem;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(8px);
  background: rgba(244, 247, 242, 0.86);
  border-bottom: 1px solid var(--line);
}

.topbar-inner {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  text-decoration: none;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 700;
}

.brand-mark {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.top-nav {
  display: inline-flex;
  align-items: center;
  gap: 1.1rem;
}

.top-nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.top-nav a:hover {
  color: var(--text);
}

.btn-main {
  border: none;
  border-radius: 14px;
  padding: 0.78rem 1.1rem;
  font-size: 0.96rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #fff;
  background: var(--accent);
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.26);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.2s ease;
}

.btn-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(37, 211, 102, 0.32);
  background: var(--accent-dark);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 1.2rem;
  align-items: center;
  padding-top: 5rem;
}

.hero-kicker {
  display: inline-flex;
  margin: 0 0 1rem;
  border: 1px solid #b8d7c4;
  padding: 0.45rem 0.75rem;
  background: #e8f6ed;
  border-radius: 999px;
  font-size: 0.82rem;
  color: #1e6a39;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2rem, 4.4vw, 4rem);
  line-height: 1.05;
}

.hero-description {
  margin: 1.1rem 0 0;
  max-width: 62ch;
  color: var(--muted);
  line-height: 1.65;
}

.hero-actions {
  margin-top: 1.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.btn-ghost {
  border-radius: 14px;
  padding: 0.78rem 1.1rem;
  text-decoration: none;
  color: var(--text);
  border: 1px solid var(--line);
  background: var(--surface);
}

.hero-panel {
  background: linear-gradient(155deg, #ffffff, #eff8f1);
  border: 1px solid #d6e7d8;
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  animation: float-in 0.7s ease;
}

.hero-panel h2 {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}

.hero-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.8rem;
}

.hero-panel li {
  color: #29453a;
  display: flex;
  gap: 0.55rem;
  align-items: baseline;
}

.hero-panel i {
  color: var(--accent-dark);
}

.hero-panel-metric {
  margin-top: 1.2rem;
  border-top: 1px solid #d2e3d6;
  padding-top: 0.9rem;
  display: grid;
  gap: 0.25rem;
}

.hero-panel-metric strong {
  font-size: 2rem;
  line-height: 1;
}

.hero-panel-metric span {
  color: var(--muted);
}

@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .top-nav {
    display: none;
  }

  .hero-content {
    grid-template-columns: 1fr;
    padding-top: 2.2rem;
  }
}

@media (max-width: 640px) {
  .topbar-inner {
    min-height: 64px;
  }

  .btn-top {
    padding: 0.65rem 0.8rem;
    font-size: 0.88rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
