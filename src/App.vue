<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import TheBook from "./components/TheBook.vue";
import TheMobileMenu from './components/TheMobileMenu.vue';
import TheSocialMedia from './components/TheSocialMedia.vue'
</script>

<template>
  <div class="">
    <TheHeader @active-mobile-menu="activeMobileMenu" />
    <TheMobileMenu :is-active="isActiveMobileMenu" @close="closeMobileMenu" />
    <TheHero />
    <TheBook />
    <TheSocialMedia />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActiveMobileMenu: false
    }
  },
  methods: {
    activeMobileMenu() {
      this.isActiveMobileMenu = true;
    },
    closeMobileMenu() {
      this.isActiveMobileMenu = false;
    }
  }
}
</script>