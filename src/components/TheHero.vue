<template lang="">
  <section
    class="bg-baseBrown relative"
  >
    <div class="">
      <div class="">
        <picture class="">
          <source
            media="(min-width:768px)"
            srcset="../assets/images/hero-background-descktop.jpg"
          />
          <img class="w-full max-h-[732px] object-cover object-top" src="../assets/images/hero-background-mobile.jpg" alt="Women" />
        </picture>
      </div>
      <div
        class="
        text-center w-full flex justify-center lg:items-start items-center flex-col px-9 absolute bottom-10 md:w-1/2 lg:w-2/3 md:right-0 md:bottom-6 lg:bottom-10 xl:bottom-20
        "
      >
        <div class="font-medium text-whiteCoffe4 text-5xl md:text-4xl lg:text-6xl lg:pl-10 xl:text-7xl">Enhancing your</div>
        <img
          class="w-full lg:pl-40"
          src="../assets/hero-natural-beauty.svg"
          alt="Natural Beauty"
        />
        <div class="w-full relative -top-3 lg:flex lg:items-center lg:gap-4 xl:ml-40">
          <BookOnlineButton colorBtn="brown" class="md:mx-auto lg:mx-0" />
          <a
            class="flex flex-col items-center group mt-9 md:mt-4 lg:mt-0 md:flex-row md:gap-4 md:justify-center lg:flex-shrink-0"
            href="#book"
          >
            <div
              class="font-medium text-baseWhite text-2xl mb-3 md:mb-0 group-hover:text-whiteCoffe6 transition"
            >
              Check out services
            </div>
            <BaseIcon
              class="
              fill-whiteCoffe5 group-hover:translate-y-2 md:group-hover:translate-y-0 md:group-hover:translate-x-2
              transition-transform md:-rotate-90 md:mt-2
              "
              width="20"
              height="33"
              viewBox="0 0 20 33"
              name="arrowDown"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import BookOnlineButton from "./BookOnlineButton.vue";
export default {
  components: {
    BaseIcon,
    BookOnlineButton,
  },
};
</script>
