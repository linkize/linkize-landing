<template>
  <div>
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
/* Estilos globais */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

html {
  scroll-behavior: smooth;
}

/* Ajustes de tipografia do Bootstrap */
.display-5 {
  font-weight: 700;
}
</style>
