<template>
  <footer class="footer">
    <div class="container footer__wrap">
      <div class="footer__logo">
        <a class="footer__logo-link" href="#">
          <icon-logo />
        </a>
        <div class="footer__slogan">Net of beauty branches in London</div>
      </div>
      <base-menu class="footer__menu" />
      <base-btn class="btn--white footer__btn">
        <template #text-btn>
          <icon-task />
          Book online
        </template>
      </base-btn>
      <!-- <nav class="footer__menu">
        <ul class="footer__menu-list">
          <li v-for="menu in dataMenu" :key="menu.link">
            <a href="`/${menu.link}`">{{ menu.label }}</a>
          </li>
        </ul>
        <base-btn class="btn--white footer__btn">
          <template #text-btn>
            <icon-task />
            Book online
          </template>
        </base-btn>
      </nav> -->
    </div>
  </footer>
</template>
<script>
import IconLogo from './icons/IconLogoFooter.vue'
import dataMenu from '../assets/dataMenu.json'
import BaseBtn from './BaseBtn.vue'
import IconTask from './icons/IconTask.vue'
import BaseMenu from './BaseMenu.vue'
export default {
  components: { IconLogo, BaseBtn, IconTask, BaseMenu },
  mounted() {
    this.dataMenu = dataMenu
  },
  data() {
    return {
      dataMenu: []
    }
  }
}
</script>
<style lang="scss">
.footer {
  border-top: 1px solid var(--c-white-coffee-6);
  padding-block: 40px;
  &__wrap {
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    @media screen and (min-width: 1240px) {
      gap: 36px;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1024px) {
      max-width: 350px;
    }
    @media screen and (min-width: 1280px) {
      max-width: auto;
      min-width: 400px;
    }
  }
  &__menu {
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      gap: 20px;
    }
    @media screen and (min-width: 1280px) {
      gap: 58px;
    }
  }
  &__logo-link {
    position: relative;
    padding-right: 33px;
    padding-top: 10px;
    &::after {
      content: '';
      background-color: var(--c-cool-blue-2);
      display: inline-block;
      width: 1px;
      height: 100%;
      margin-inline: 16px;
      position: absolute;
      top: 0;
    }
  }
  &__slogan {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    color: var(--c-cool-blue-2);
    @media screen and (min-width: 1024px) {
      flex: 1 1 auto;
    }
  }
  &__btn {
    @media screen and (min-width: 1024px) {
      width: auto;
      height: max-content;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
}
</style>
