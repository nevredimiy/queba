<template>
  <the-header />
  <main>
    <the-hero />
    <services-prices />
    <social-media />
    <the-location />
    <the-welcome />
    <the-join-us />
  </main>
</template>
<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import ServicesPrices from './components/ServicesPrices.vue';
import SocialMedia from './components/SocialMedia.vue';
import TheLocation from './components/TheLocation.vue';
import TheWelcome from './components/TheWelcome.vue';
import TheJoinUs from './components/TheJoinUs.vue';

export default {
  components: {
    TheHeader, TheHero, ServicesPrices, SocialMedia, TheLocation, TheWelcome, TheJoinUs
  }
}
</script>
<style>
  .relative{
    position: relative;
    margin-top: 500px;
  }
</style>

