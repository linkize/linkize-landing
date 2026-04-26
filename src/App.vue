<template>
  <div class="app-shell">
    <HeroSection />
    <BenefitsSection />
    <HowItWorks />
    <ProvaSocial />
    <ConversionForm />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import ProvaSocial from './components/ProvaSocial.vue'
import ConversionForm from './components/ConversionForm.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap');

:root {
  --bg: #f4f7f2;
  --surface: #ffffff;
  --surface-soft: #eef5ee;
  --text: #111827;
  --muted: #5b6474;
  --accent: #25d366;
  --accent-dark: #1fa956;
  --line: #dce5dc;
  --shadow: 0 18px 40px rgba(21, 43, 28, 0.08);
  --radius-lg: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at 6% 4%, rgba(37, 211, 102, 0.22), transparent 25%),
    radial-gradient(circle at 90% 2%, rgba(118, 194, 148, 0.22), transparent 22%),
    var(--bg);
  color: var(--text);
  font-family: 'Plus Jakarta Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
}

.app-shell {
  overflow-x: clip;
}

.section-container {
  width: min(1120px, calc(100% - 2.5rem));
  margin: 0 auto;
}

@media (max-width: 640px) {
  .section-container {
    width: min(1120px, calc(100% - 1.5rem));
  }
}
</style>
