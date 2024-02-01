<template>
  <div  @mousedown="draggMouseDown" @touchstart="draggTouchStart" ref="sliderBox" :style="{left: -widthItemSlide *step + 'px'}" class="slider-wrap">
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
  </div>
</template>
<script>
import ServiceSliderItem from '@/components/ServiceSliderItem.vue'
export default {
  mounted() {
    this.sliderItems = this.$refs.sliderBox.childNodes.length;
    this.$emit("sliderItems", this.sliderItems - 1);
  },
  data() {
    return {
      sliderItems: 0,
      widthItemSlide: 416,
      n: 0,
      positions: {
        clientX: undefined,
        // clientY: undefined,
        movementX: 0,
        // movementY: 0
      },
      moveTranslate: 0,
    }
  },
  components: { ServiceSliderItem },
  emits: ['slider-items', 'move-translate'],
  props: {
    step: {
      type: Number,
      required: true,
    },
    onSliderItems: {
      type: Function,
      required: true
    }
  },
  methods: {
    draggMouseDown(event) {
      event.preventDefault();
      this.positions.clientX = event.clientX;
      // this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag(event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      // this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      // this.positions.clientY = event.clientY;
      // this.$refs.sliderBox.style.top = (this.$refs.sliderBox.offsetTop - this.positions.movementY) + 'px';
      this.$refs.sliderBox.style.left = (this.$refs.sliderBox.offsetLeft - this.positions.movementX) + 'px';
      this.moveTranslate = (this.$refs.sliderBox.offsetLeft - this.positions.movementX);
    },
    draggTouchStart(event) {
      this.positions.clientX = event.targetTouches.item(0).clientX;
      document.ontouchmove = this.elementDragTouch;
      document.ontouchend = this.closeDragElementTouch;
    },
    elementDragTouch(event) {
      this.positions.movementX = this.positions.clientX - event.targetTouches.item(0).clientX;
      this.positions.clientX = event.targetTouches.item(0).clientX;
      this.$refs.sliderBox.style.left = (this.$refs.sliderBox.offsetLeft - this.positions.movementX) + 'px';
      this.moveTranslate = (this.$refs.sliderBox.offsetLeft - this.positions.movementX);
    },
     closeDragElementTouch() {
      document.ontouchstart = null;
      document.ontouchend = null;
      if (this.positions.movementX > 0) {
        this.moveTranslate = (Math.floor(this.moveTranslate / this.widthItemSlide)) * this.widthItemSlide;
      } else {
        this.moveTranslate = (Math.ceil(this.moveTranslate / this.widthItemSlide)) * this.widthItemSlide;
      }
      this.n = Math.round(this.moveTranslate / -this.widthItemSlide);
      this.$emit("move-translate", this.n);
      //в случае dragged вправо, когда left = 0 (перелимит вправо)
      if (this.$refs.sliderBox.offsetLeft > 0) {
        this.$refs.sliderBox.style.left = 0;
      }
      //в случае dragged вправо, когда left > чем весь слайдер (перелимит влево)
      if (this.$refs.sliderBox.offsetLeft < (this.sliderItems-1) * -this.widthItemSlide) {
        this.$refs.sliderBox.style.left = ((this.sliderItems-1) * -this.widthItemSlide) + 'px';
      }
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      if (this.positions.movementX > 0) {
        this.moveTranslate = (Math.floor(this.moveTranslate / this.widthItemSlide)) * this.widthItemSlide;
      } else {
        this.moveTranslate = (Math.ceil(this.moveTranslate / this.widthItemSlide)) * this.widthItemSlide;
      }
      this.n = Math.round(this.moveTranslate / -this.widthItemSlide);
      this.$emit("move-translate", this.n);
      //в случае dragged вправо, когда left = 0 (перелимит вправо)
      if (this.$refs.sliderBox.offsetLeft > 0) {
        this.$refs.sliderBox.style.left = 0;
      }
      //в случае dragged вправо, когда left > чем весь слайдер (перелимит влево)
      if (this.$refs.sliderBox.offsetLeft < (this.sliderItems-1) * -this.widthItemSlide) {
        this.$refs.sliderBox.style.left = ((this.sliderItems-1) * -this.widthItemSlide) + 'px';
      }
    }

  },
  watch: {
    step() {
      this.$refs.sliderBox.style.transition = "left 300ms";
      setTimeout(() => {
        this.$refs.sliderBox.style.transition = "";
      }, 400)
    }
  }
}
</script>
<style lang="scss">
.slider-wrap {
  display: flex;
  gap: 16px;
  // transition: left 100ms;
  position: relative;
}
</style>
