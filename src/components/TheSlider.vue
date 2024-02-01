<template>
  <div  @mousedown="draggMouseDown" @touchstart="draggTouchStart" ref="sliderBox" class="slider-wrap">
   <slot name="items"></slot>
  </div>
</template>
<script>

export default {
  data() {
    return {
      positions: {
        clientX: undefined,
        movementX: 0,
      },
      moveTranslate: 0,
    }
  },
  props: {
    widthItemSlide: {
      type: Number,
      required: true,
    },
    sliderItems: {
      type: Number,
      required: true,
    }
  },
  methods: {
    draggMouseDown(event) {
      event.preventDefault();
      this.positions.clientX = event.clientX;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag(event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.clientX = event.clientX;
      this.$refs.sliderBox.style.left = (this.$refs.sliderBox.offsetLeft - this.positions.movementX) + 'px';
      this.moveTranslate = (this.$refs.sliderBox.offsetLeft - this.positions.movementX);
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      if (this.positions.movementX > 0) {
        this.moveTranslate = (Math.floor(this.moveTranslate / this.widthItemSlide)) * this.widthItemSlide;
      } else {
        this.moveTranslate = (Math.ceil(this.moveTranslate / this.widthItemSlide)) * this.widthItemSlide;
      }

      //в случае dragged вправо, когда left = 0 (перелимит вправо)
      if (this.$refs.sliderBox.offsetLeft > 0) {
        this.$refs.sliderBox.style.left = 0;
      }
      //в случае dragged вправо, когда left > чем весь слайдер (перелимит влево)
      if (this.$refs.sliderBox.offsetLeft < (this.sliderItems-1) * -this.widthItemSlide) {
        this.$refs.sliderBox.style.left = ((this.sliderItems-1) * -this.widthItemSlide) + 'px';
      }
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

  },
}
</script>
<style lang="scss">
.slider-wrap {
  display: flex;
  gap: 16px;
  position: relative;
}
</style>
