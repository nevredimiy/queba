<template>
  <section-wrap class="services">

      <template #header-3>Services and Prices</template>
      <template #header-2>Book your beauty</template>
      <template #content>
        <div class="services__slider">
          <service-slider-list
            @move-translate="handleMoveTranslate"
            @slider-items="(n) => (numItems = n)"
            :step="step"
          />
        </div>
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
import ServiceSliderList from './ServiceSliderList.vue'
import IconArrowLeft from './icons/IconArrowLeft.vue'
import SectionWrap from './SectionWrap.vue'
export default {
  components: { ServiceSliderList, IconArrowLeft, SectionWrap },
  data() {
    return {
      step: 0,
      numItems: 0
    }
  },
  methods: {
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
