<template lang="">
  <section id="book" class="px-9 ssm:px-2 py-8 ssm:py-14">
    <div class="container overflow-hidden relative">
        <h4 class="mb-2">services and prices</h4>
        <h1 class="mb-8">Book your beauty</h1>
      <div class="relative overflow-x-auto">
        <div class="relative w-full flex snap-x snap-mandatory overflow-x-auto  no-scrollbar">
          <BookItemSlider
            v-for="(item, index) in dataBooking"
            :key="index"
            :item="item"
            :style="`transform:translateX(calc(104% * ${counter}))`"
          />
        </div>
      </div>

      <div class="flex gap-8 px-9 pt-8 lg:absolute right-0 top-6">
        <button class="hover:animate-squish" @click="handleLeftClick">
          <BaseIcon
            class="rotate-180"
            width="49"
            height="35"
            viewBox="0 0 49 35"
            name="arrowRightSliderStep"
          />
        </button>
        <button @click="handleRightClick">
          <BaseIcon
            class="hover:animate-squish"
            width="49"
            height="35"
            viewBox="0 0 49 35"
            name="arrowRightSliderStep"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import dataBooking from "./dataBookingSlide";
import BookItemSlider from "./BookItemSlider.vue";

export default {
  methods: {
    handleLeftClick(event) {
      if (this.counter === 0) return this.counter = 0;
      this.counter++;
    },
    handleRightClick(event) {
      if (this.counter === -1 * (dataBooking.length-1)) return this.counter;
      this.counter--;
    },
  },
  components: {
    BaseIcon,
    BookItemSlider,
  },
  data() {
    return {
      dataBooking,
      counter: 0,
    };
  },
};
</script>
