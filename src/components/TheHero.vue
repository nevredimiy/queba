<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__header">
        <h1 class="hero__title">Enhancing your</h1>
        <div class="hero__desc">natural beauty</div>
      </div>
      <div class="hero__action">
        <div class="">
          <base-btn class="btn-custom btn--brown">
            <template #text-btn> <icon-task></icon-task>Bookonline </template>
          </base-btn>
        </div>
        <a class="hero__checkout" href="#checkout">
          <div class="hero__checkout-text">Checkout services</div>
          <div class="arrow-down">
            <icon-arrow-down />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import BaseBtn from './BaseBtn.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import IconTask from './icons/IconTask.vue'
export default {
  components: {
    BaseBtn,
    IconArrowDown,
    IconTask
  }
}
</script>
<style lang="scss">
$bp-md: 768px;
$bp-xl: 1280px;

.btn-custom {
  margin-bottom: 40px;
  @media only screen and (min-width: $bp-md) {
    margin-bottom: 0;
    width: auto;
    height: auto;
  }
}
.arrow-down {
  transition: transform 150ms;
}
@media (hover: hover) {
  .content__checkout:hover .content__checkout-text {
    scale: 1.05;
    color: var(--c-white-coffee-4);
    @media (min-width: $bp-md) {
      scale: 1;
    }
  }
  .content__checkout:hover .arrow-down {
    transform: translateY(5px);
    @media (min-width: $bp-md) {
      transform: translateY(0);
      transform: rotate(-90deg);
    }
  }
}
.hero {
  position: relative;
  background-color: var(--c-umber-1);
  min-height: 667px;
  width: 100%;
  background-image: url('../assets/images/hero/hero-girl-bg.jpg');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: $bp-md) {
    background-size: cover;
    background-position: right 15em top 0px;
    min-height: 400px;
  }
  @media screen and (min-width: $bp-xl) {
    background-position: right 25em top -40px;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(121, 98, 79) 60%);
    z-index: 0;
    @media screen and (min-width: $bp-md) {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(121, 98, 79) 60%);
    }
    @media screen and (min-width: $bp-md) {
      background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(121, 98, 79) 75%);
    }
  }
  &__content {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    z-index: 20;
    @media only screen and (min-width: $bp-md) {
      width: 60%;
      right: 0;
      top: 20%;
    }
    @media screen and (min-width: $bp-xl) {
      width: 50%;
    }
  }
  &__header {
    text-align: center;
    overflow: hidden;
    @media screen and (min-width: $bp-md) {
      text-align: left;
    }
  }
  &__title {
    color: #ffffff;
    font-size: min(max(40px, 10vw), 94px);
    @media screen and (min-width: $bp-md) {
      font-size: calc(45px + 1vw);
    }
  }
  &__desc {
    font-family: Thesignature;
    font-size: min(max(90px, 6vw), 105px);
    line-height: 100%;
    color: #ffffff;
    position: relative;
    top: -20px;
    @media only screen and (min-width: $bp-md) {
      left: 80px;
      font-size: 105px;
    }
  }
  &__action {
    position: relative;
    top: -29px;
    @media only screen and (min-width: $bp-md) {
      display: flex;
      gap: 12px;
      margin-left: calc(2 * 1.2vw);
    }
  }
  &__checkout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media (hover: hover) {
      &:hover .arrow-down svg {
        color: #fff;
      }
      &:hover &-text {
        scale: 1.05;
        color: #fff;
      }
    }
    @media only screen and (min-width: $bp-md) {
      flex-direction: row;
    }
  }
  .arrow-down {
    @media only screen and (min-width: $bp-md) {
      transform: rotate(-90deg);
    }
    & svg {
      color: var(--c-white-coffee-5);
      transition: color 150ms;
    }
  }
  &__checkout-text {
    color: var(--c-white-coffee-5);
    font-weight: 500;
    font-size: 24px;
    transition:
      scale 150ms,
      color 150ms;
    @media only screen and (min-width: $bp-md) {
      font-size: 18px;
    }
  }
}
</style>
