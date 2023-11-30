<template>
  <div
    class="shrink-0 max-w-[280px] ssm:max-w-xs overflow-hidden relative rounded-lg mr-4 border border-coolBlue3 snap-start transition-transform"
  >
    <img class="w-full" :src="item.image" :alt="item.label" />
    <div class="absolute bottom-0 left-0 right-0">
      <div class="bg-white px-6 pt-6 pb-4 inline-block relative top-1">
        <h2>{{ item.label }}</h2>
      </div>
      <div class="bg-white pb-6">
        <a class="flex gap-2 items-center w-full regal-link px-6" href="">
          Book a visit
          <BaseIcon
            width="32"
            height="19"
            viewBox="0 0 32 19"
            name="arrowRightRegalLink"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  props: {
    item: {
      image: String,
      url: String,
    },
  },
};
</script>
