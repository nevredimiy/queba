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
        <base-menu ref="menu" :class="{ active: isOpenMenu, header__menu: true }">
          <div class="menu__footer">
            <div class="menu__btn">
              <base-btn class="btn--blue">
                <template #text-btn>
                  <icon-task></icon-task>
                  Book online
                </template>
              </base-btn>
            </div>
            <div class="menu__social">
              <div class="menu__social-phone"><icon-phone />+44 740 093 07 60</div>
              <div class="menu__social-instagram"><icon-instagram />Instagram</div>
            </div>
            <hr />
            <div class="menu__address">
              <div class="">NW16NE Marylebone</div>
              <div class="">SW73ES South Kensington</div>
            </div>
          </div>
        </base-menu>
        <a href="#bookonline" class="icon-task">
          <icon-task class="color-blue show-only-mobile" />
          <base-btn class="btn--white show-only-desktop">
            <template #text-btn> <icon-task></icon-task>Bookonline </template>
          </base-btn>
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
import IconBurgerClose from './icons/IconBurgerClose.vue'
import BaseMenu from './BaseMenu.vue'
import IconPhone from './icons/IconPhone.vue'
import IconInstagram from './icons/IconInstagram.vue'

export default {
  components: {
    IconBurger,
    IconLogo,
    IconTask,
    BaseBtn,
    IconBurgerClose,
    BaseMenu,
    IconPhone,
    IconInstagram
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
        // console.log(this.$refs.menu.$el.style)
        this.$refs.menu.$el.style.top = `${this.headerHeight-1}px`
        this.$refs.menu.$el.style.overflowY = 'auto'
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
        setTimeout(() => {
          this.$refs.menu.style.top = null
        }, 400)
      }
    }
  }
}
</script>
<style lang="scss">
$bp-md: 980px;
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
  &__wrap {
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
    z-index: 30;
    padding: 15px 0;
    transform: translateX(-105%);
    transition: transform 300ms;
    overflow: hidden;

    @media only screen and (min-width: $bp-md) {
      position: static;
      transform: translateX(0);
    }
  }
}

.active {
  transform: translateX(0);
}
hr {
  border-color: var(--c-cool-blue-5);
}
</style>
