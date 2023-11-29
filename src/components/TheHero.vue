<template lang="">
  <section class="bg-baseBrown">
    <div class="">
      <img
        class="w-full object-cover gradient-to-transporant"
        src="../assets/hero-woman.png"
        alt="Bookonline"
      />
    </div>
    <div class="text-center flex justify-center items-center flex-col px-9 relative -top-14">
      <div class="font-medium text-whiteCoffe4 text-5xl">Enhancing your</div>
      <img src="../assets/hero-natural-beauty.svg" alt="" />
      <a
        class="w-full bg-baseWhite rounded p-5 flex justify-center items-center mb-9"
        href="/"
      >
        <div class="flex gap-4 items-center">
         <BaseIcon class="fill-umber2" name="calendarCheck" />
          <div class="text-umber2 font-medium text-2xl">Book online</div>
        </div>
      </a>
      <a class="flex flex-col items-center" href="/">
        <div class="font-medium text-baseWhite text-2xl mb-3">Check out services</div>
        <BaseIcon class="fill-whiteCoffe5" width="20" height="33" viewBox="0 0 20 33" name="arrowDown" />
      </a>
    </div>
  </section>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
export default {
  components: {
    BaseIcon
  }
};
</script>
