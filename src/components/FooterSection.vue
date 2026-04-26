<template>
  <footer class="site-footer">
    <div class="section-container">
      <div class="footer-cta">
        <h2>Comece grátis e teste por 30 dias sem compromisso</h2>
        <a href="#conversion-form">Começar agora</a>
      </div>

      <div class="footer-bottom">
        <div class="brand-mini">
          <span class="brand-mark"><i class="bi bi-whatsapp"></i></span>
          <span>Linkize</span>
        </div>

        <div class="socials">
          <a href="#" aria-label="LinkedIn" class="social-icon"><i class="bi bi-linkedin"></i></a>
          <a href="#" aria-label="GitHub" class="social-icon"><i class="bi bi-github"></i></a>
          <a href="#" aria-label="Instagram" class="social-icon"><i class="bi bi-instagram"></i></a>
        </div>

        <small>© 2026 Linkize. O Shopify do WhatsApp raiz brasileiro.</small>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Sem logica nesta secao.
</script>

<style scoped>
.site-footer {
  padding: 0 0 1.8rem;
}

.footer-cta {
  border-radius: 24px;
  padding: 2rem 1.2rem;
  text-align: center;
  background: linear-gradient(145deg, #153224, #214632);
  color: #f5fff5;
}

.footer-cta h2 {
  margin: 0;
  font-size: clamp(1.4rem, 2.6vw, 2.2rem);
}

.footer-cta a {
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  min-height: 48px;
  padding: 0.8rem 1.15rem;
  border-radius: 13px;
  background: var(--accent);
  font-weight: 700;
}

.footer-bottom {
  margin-top: 1rem;
  border-radius: 18px;
  border: 1px solid #d7e4d8;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem;
}

.brand-mini {
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 700;
}

.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: var(--accent);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.socials {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1e3528;
  text-decoration: none;
  border: 1px solid #d2e2d5;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.social-icon:hover {
  transform: translateY(-2px);
  border-color: #86cc9f;
}

.footer-bottom small {
  color: #657367;
}

@media (max-width: 640px) {
  .footer-bottom {
    justify-content: center;
  }
}
</style>
