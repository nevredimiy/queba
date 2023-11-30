<template lang="">
  <section class="bg-baseBrown">
    <div class="">
      <img
        class="w-full object-cover gradient-to-transporant"
        src="../assets/hero-woman.png"
        alt="Bookonline"
      />
    </div>
    <div
      class="text-center flex justify-center items-center flex-col px-9 relative -top-14"
    >
      <div class="font-medium text-whiteCoffe4 text-5xl">Enhancing your</div>
      <img class="pb-4" src="../assets/hero-natural-beauty.svg" alt="Natural Beauty" />
      <BookOnlineButton colorBtn="brown" />
      <a class="flex flex-col items-center group" href="#book">
        <div
          class="font-medium text-baseWhite text-2xl mb-3 group-hover:text-whiteCoffe6 transition"
        >
          Check out services
        </div>
        <BaseIcon
          class="fill-whiteCoffe5 group-hover:animate-bounce"
          width="20"
          height="33"
          viewBox="0 0 20 33"
          name="arrowDown"
        />
      </a>
    </div>
  </section>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import BookOnlineButton from './BookOnlineButton.vue'
export default {
  components: {
    BaseIcon, BookOnlineButton
  },
};
</script>
