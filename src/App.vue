<template>
  <div>
    <HeroSection />
    <BenefitsSection />
    <HowItWorks />
    <ProvaSocial />
    <FooterSection />
  </div>
  
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import ProvaSocial from './components/ProvaSocial.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
/* Estilos globais mínimos, Bootstrap já cuida do resto */
html, body, #app {
  height: 100%;
}
html {
  scroll-behavior: smooth;
}
</style>
