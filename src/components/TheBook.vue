<template lang="">
  <section class="px-9 py-14">
    <div class="container overflow-hidden">
      <div class="">
        <h4 class="mb-3">services and prices</h4>
        <h1 class="mb-14">Book your beauty</h1>
      </div>
      <div class="flex">
        <BookItemSlider v-for="(item, index) in dataBooking" :key="index" :item="item" />
      </div>
      <div class="flex gap-8 pt-8">
        <button><BaseIcon class="rotate-180" width="49" height="35" viewBox="0 0 49 35" name="arrowRightSliderStep" /></button>
        <button><BaseIcon width="49" height="35" viewBox="0 0 49 35" name="arrowRightSliderStep" /></button>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import dataBooking from './dataBookingSlide'
import BookItemSlider from './BookItemSlider.vue'
export default {
  components: {
    BaseIcon,
    BookItemSlider,
  },
  data() {
    return {
      dataBooking
}
  }
};
</script>
<style lang=""></style>
