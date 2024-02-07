<template>
  <section-wrap class="services">
    <template #header-3>Services and Prices</template>
    <template #header-2>Book your beauty</template>
    <template #content>
      <slider-drag
        :step="step"
        @move-translate="handleMoveTranslate"
        @num-items="updateNumItems"
        :widthItemSlide="416"
      >
        <service-slider-item>
          <template #img>
            <img
              class="slider__img"
              src="/src/assets/images/services-prices/service-card-1.jpg"
              alt="Nail services"
            />
          </template>
          <template #title>
            <h4 class="slider__title">Nail services</h4>
          </template>
        </service-slider-item>
        <service-slider-item>
          <template #img>
            <img
              class="slider__img"
              src="/src/assets/images/services-prices/service-card-2.jpg"
              alt="Lash services"
            />
          </template>
          <template #title>
            <h4 class="slider__title">Lash services</h4>
          </template>
        </service-slider-item>
        <service-slider-item>
          <template #img>
            <img
              class="slider__img"
              src="/src/assets/images/services-prices/service-card-3.jpg"
              alt="Brow services"
            />
          </template>
          <template #title>
            <h4 class="slider__title">Brow services</h4>
          </template>
        </service-slider-item>
        <service-slider-item>
          <template #img>
            <img
              class="slider__img"
              src="/src/assets/images/services-prices/service-card-4.jpg"
              alt="Makeup"
            />
          </template>
          <template #title>
            <h4 class="slider__title">Makeup</h4>
          </template>
        </service-slider-item>
        <service-slider-item>
          <template #img>
            <img
              class="slider__img"
              src="/src/assets/images/services-prices/service-card-5.jpg"
              alt="Hair styling "
            />
          </template>
          <template #title>
            <h4 class="slider__title">Hair styling</h4>
          </template>
        </service-slider-item>
        <service-slider-item>
          <template #img>
            <img
              class="slider__img"
              src="/src/assets/images/services-prices/service-card-6.jpg"
              alt="Waxing"
            />
          </template>
          <template #title>
            <h4 class="slider__title">Waxing</h4>
          </template>
        </service-slider-item>
      </slider-drag>
      <div class="services__steps">
        <button @click="stepRight()" class="services__btn-step" type="button">
          <icon-arrow-left class="icon-step right-step" />
        </button>
        <button @click="stepLeft()" class="services__btn-step" type="button">
          <icon-arrow-left class="icon-step left-step" />
        </button>
      </div>
    </template>
  </section-wrap>
</template>
<script>
import ServiceSliderItem from './ServiceSliderItem.vue'
import IconArrowLeft from './icons/IconArrowLeft.vue'
import SectionWrap from './SectionWrap.vue'
import SliderDrag from './SliderDrag.vue'
export default {
  components: { IconArrowLeft, SectionWrap, SliderDrag, ServiceSliderItem },
  data() {
    return {
      step: 0,
      numItems: 0
    }
  },
  methods: {
    updateNumItems(num) {
      this.numItems = num
    },
    handleMoveTranslate(n) {
      this.step = n
      if (this.step < 0) this.step = 0
      if (this.step > this.numItems) {
        this.step = this.numItems
      }
    },
    stepLeft() {
      if (this.step === this.numItems) return
      this.step += 1
    },
    stepRight() {
      if (this.step == 0) return
      this.step -= 1
    }
  }
}
</script>

<style lang="scss">
.services {
  padding: 48px 0 48px 40px;
  will-change: transform;
  &__title {
    margin-bottom: 40px;
  }
  &__steps {
    display: flex;
    gap: 32px;
  }
  &__btn-step {
    padding: 32px 0;
  }
  &__slider {
    overflow: hidden;
    position: relative;
  }
}
.icon-step {
  width: 49px;
  height: 35px;
}
.right-step {
  transform: rotate(180deg);
}
</style>
