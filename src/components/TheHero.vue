<template>
  <section class="hero">
    <picture class="hero__background">
      <source srcset="../assets/images/hero-background-descktop.jpg" media="(min-width: 768px)" />
      <img src="../assets/images/hero-background-mobile.jpg" alt="Enhancing your" />
    </picture>
    <div class="hero__content content">
      <div class="content__header">
        <h1 class="content__title">Enhancing your</h1>
        <div class="content__desc">natural beauty</div>
      </div>
      <div class="content__action">
        <div class="">
          <base-btn class="btn-custom btn--brown">
            <template #text-btn> <icon-task></icon-task>Bookonline </template>
          </base-btn>
        </div>
        <a class="content__checkout" href="#checkout">
          <div class="content__checkout-text">Checkout services</div>
          <div class="arrow-down">
            <IconArrowDown />
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
  &__background img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
  &__content {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    @media only screen and (min-width: $bp-md) {
      width: 60%;
      right: 0;
      top: 20%;
    }
  }
}
.content {
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
    @media only screen and (min-width: $bp-md) {
      flex-direction: row;
    }
  }
  .arrow-down {
    @media only screen and (min-width: $bp-md) {
      transform: rotate(-90deg);
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
