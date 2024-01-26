<template>
  <the-header />
  <main>
    <the-hero />
    <services-prices />
    <social-media />
  </main>
</template>
<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import ServicesPrices from './components/ServicesPrices.vue';
import SocialMedia from './components/SocialMedia.vue';

export default {
  components: {
    TheHeader, TheHero, ServicesPrices, SocialMedia
  }
}
</script>

