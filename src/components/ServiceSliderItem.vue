<template>
     <div class="slider">
            <div class="slider__item">
              <slot name="img"></slot>
                <div class="slider__content">
                  <slot name="title"></slot>
                    <a class="slider__link">Nail services <icon-arrow-left /> </a>
                </div>
            </div>
        </div>
</template>
<script>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
export default {
    components: { IconArrowLeft },
}
</script>
<style lang="scss">
.slider {
border: 1px solid var(--c-cool-blue-2);
    border-radius: 8px;
    width: 400px;
    height: 550px;
    flex: 1 0 auto;
  &__item {
    position: relative;
    display: flex;
    padding: 26px;
    width: 100%;
    height: 100%;
  }
  &__img {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
    margin: 0;
    padding: 0;
  }
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &__title {
    background-color: #fff;
    padding: 10px 26px;
    display: inline-block;
  }
  &__link {
    font-size: 24px;
    font-weight: 500;
    color: var(--c-cool-blue-2);
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 24px 26px;
    border-radius: 0 0 8px 8px;
    position: relative;
    top: -1px;
  }
}
</style>