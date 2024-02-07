<template>
  <nav ref="menuChild" class="menu">
    <ul class="menu__list">
      <li v-for="item in dataMenu" :key="item.link" class="menu__item">
        <a class="menu__link" :href="`/${item.link}`">{{ item.label }}</a>
      </li>
    </ul>
    <slot></slot>
  </nav>
</template>
<script>
import dataMenu from '../assets/dataMenu.json'
export default {
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
$bp-md: 980px;
$bp-md: 980px;
@mixin hover {
  @media (hover: hover) {
    &:hover {
      @content;
    }
  }
}
.menu {
  &__list {
    @media only screen and (min-width: $bp-md) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__item {
    text-align: center;
  }
  &__link {
    font-weight: 500;
    font-size: 32px;
    padding: 32px 0;
    display: block;
    transition:
      color 150ms,
      background 150ms;
    @include hover {
      background-color: var(--c-white-coffee-4);
      &::before {
        opacity: 1;
        width: 100%;
        height: 100%;
      }
    }
    @media only screen and (min-width: $bp-md) {
      font-size: 20px;
      color: rgba(0, 6, 19, 0.4);
      padding: 10px 15px;
      transition: color 300ms;
      @include hover {
        background: none;
        color: var(--c-cool-blue-5);
      }
    }
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      border-bottom: 3px solid #000;
      background-color: rgba(0, 20, 20, 0.1);
      height: 4px;
      width: 0px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition:
        opacity 200ms 100ms,
        width 400ms 100ms,
        height 400ms 400ms;
      z-index: -1;
    }
  }
  &__footer {
    padding: 0 36px;
    @media only screen and (min-width: $bp-md) {
      display: none;
    }
  }
  &__btn {
    margin-top: 15px;
    margin-bottom: 64px;
  }
  &__social {
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    &-phone,
    &-instagram {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  &__address {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
}
</style>
