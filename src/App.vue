<template>
  <the-header />
  <main>
    <the-hero />
    <the-services />
    <the-social-media />
    <the-location />
    <the-welcome />
    <the-join-us />
  </main>
  <the-footer />
</template>
<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import TheServices from './components/TheServices.vue';
import TheSocialMedia from './components/TheSocialMedia.vue';
import TheLocation from './components/TheLocation.vue';
import TheWelcome from './components/TheWelcome.vue';
import TheJoinUs from './components/TheJoinUs.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  components: {
    TheHeader, TheHero, TheServices, TheSocialMedia, TheLocation, TheWelcome, TheJoinUs, TheFooter
  }
}
</script>
<style>
  .relative{
    position: relative;
    margin-top: 500px;
  }
</style>

