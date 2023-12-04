<template>
  <a :class="$attrs.class"
    class="w-full rounded-lg flex justify-center items-center border border-coolBlue2 p-5 transition group bg-coolBlue2 hover:bg-whiteCoffe1 duration-500"
    href="/"
  >
    <div class="flex gap-4 items-center">
      <BaseIcon :width="w" :height="h" :viewBox="`0 0 ${w} ${h}`" class="fill-whiteCoffe1 group-hover:fill-coolBlue2" :name="nameIcon" />
      <div class="font-medium text-2xl text-whiteCoffe1 group-hover:text-coolBlue2">
        Book online
      </div>
    </div>
  </a>
</template>
<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: { BaseIcon },
  props: {
    nameIcon: String,
    w: Number,
    h: Number,
  }
}
</script>