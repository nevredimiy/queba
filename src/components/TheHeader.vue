<template>
  <header ref="header" class="header">
    <div class="container">
      <div class="header__wrap">
    <button @click="isOpenMenu = !isOpenMenu" class="header__burger" type="button">
      <IconBurger v-if="!isOpenMenu" />
      <IconBurgerClose v-if="isOpenMenu" />
    </button>
    <div class="header__logo">
      <a href="/">
        <IconLogo />
      </a>
    </div>
    <nav ref="menu" :class="{ active: isOpenMenu }" class="header__menu menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link" href="/services-and-price">Services and price</a>
        </li>
        <li class="menu__item"><a class="menu__link" href="/works">Works</a></li>
        <li class="menu__item"><a class="menu__link" href="/locations">Locations</a></li>
        <li class="menu__item"><a class="menu__link" href="/features">Features</a></li>
      </ul>
      <div class="menu__footer">
        <div class="menu__btn">
          <BaseBtn class="btn--blue" />
        </div>
        <div class="menu__social">
          <div class="menu__social-phone"><IconPhone />+44 740 093 07 60</div>
          <div class="menu__social-instagram"><IconInstagram />Instagram</div>
        </div>
        <hr />
        <div class="menu__address">
          <div class="">NW16NE Marylebone</div>
          <div class="">SW73ES South Kensington</div>
        </div>

      </div>
    </nav>
    <a href="#bookonline" class="icon-task">
      <IconTask class="color-blue show-only-mobile" />
      <BaseBtn class="btn--white show-only-desktop" />
    </a>
    </div>
    </div>
  </header>
</template>
<script>
import IconBurger from './icons/IconBurger.vue'
import IconLogo from './icons/IconLogo.vue'
import IconTask from './icons/IconTask.vue'
import BaseBtn from './BaseBtn.vue'
import IconPhone from './icons/IconPhone.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconBurgerClose from './icons/IconBurgerClose.vue'

export default {
  components: {
    IconBurger,
    IconLogo,
    IconTask,
    BaseBtn,
    IconPhone,
    IconInstagram,
    IconBurgerClose
  },
  data() {
    return {
      headerHeight: 0,
      isOpenMenu: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.calculateHeaderHeight)
    this.headerHeight = this.$refs.header.offsetHeight
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calculateHeaderHeight)
  },
  methods: {
    calculateHeaderHeight() {
      this.headerHeight = this.$refs.header.offsetHeight
    }
  },
  watch: {
    isOpenMenu() {
      if (this.isOpenMenu) {
        this.$refs.menu.style.top = `${this.headerHeight}px`
      } else {
        this.$refs.menu.style.top = null
      }
    }
  }
}
</script>
<style lang="scss">
$bp-md: 980px;
@mixin hover {
  @media (hover:hover) {
    &:hover {
      @content;
    }
  }
}
.icon-task {
  transition: scale 150ms;
}
@media (hover: hover) {
  .icon-task:hover svg {
    scale: 1.05;
    filter: drop-shadow(0 0 10px rgb(0 0 0 / 20%));
  }
  .header__burger:hover svg {
    scale: 1.05;
    filter: drop-shadow(0 0 10px rgb(0 0 0 / 20%));
  }
}
.header {
  &__wrap{
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  overflow: hidden;
  }

  &__burger {
    transition: scale 150ms;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: $bp-md) {
      display: none;
    }
  }
  &__menu {
    position: absolute;
    inset: 0;
    background-color: #fff;
    z-index: 10;
    @media only screen and (min-width: $bp-md) {
      position: static;
      transform: translateX(0);
    }
  }
}
.menu {
  padding: 15px 0;
  transform: translateX(-105%);
  transition: transform 300ms;
  @media only screen and (min-width: $bp-md) {
    transform: translateX(0);
  }
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
    transition: color 150ms, background 150ms;
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
      color: rgb(from var(--c-cool-blue-5) r g b / 40%);
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
      content: "";
      position: absolute;
      bottom: 0;
      border-bottom: 3px solid #000;
      // background-color: rgba(0,0,0,0.2);
      height: 4px;
      width: 8px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 200ms, width 400ms 100ms, height 400ms 400ms;
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
.active {
  transform: translateX(0);
}
hr {
  border-color: var(--c-cool-blue-5);
}
</style>
