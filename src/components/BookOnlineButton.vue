<template lang="">
  <a
    :class="classObjectBtn"
    class="w-full rounded-lg md:max-w-[220px] flex justify-center items-center border p-5 transition group"
    href="/"
  >
    <div class="flex gap-4 items-center">
      <BaseIcon :class="classObjectIcon" name="calendarCheck" />
      <div :class="classObjectText" class="font-medium text-2xl">
        Book online
      </div>
    </div>
  </a>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  props: {
    colorBtn: String,
  },
  components: { BaseIcon },
  computed: {
    classObjectBtn() {
      return {
        "border-coolBlue2 bg-baseWhite hover:bg-coolBlue2":
          this.colorBtn === "blueWhite",
        "border-white bg-baseWhite hover:bg-umber2": this.colorBtn === "brown",
        "border-coolBlue3 bg-coolBlue2 hover:bg-whiteCoffe1":
          this.colorBtn === "blue",
      };
    },
    classObjectIcon() {
      return {
        "fill-coolBlue2 group-hover:fill-whiteCoffe1":
          this.colorBtn === "blueWhite",
        "fill-umber2 group-hover:fill-whiteCoffe1": this.colorBtn === "brown",
        "fill-whiteCoffe1 group-hover:fill-coolBlue2": this.colorBtn === "blue",
      };
    },
    classObjectText() {
      return {
        "text-coolBlue2 group-hover:text-whiteCoffe1":
          this.colorBtn === "blueWhite",
        "text-umber2 group-hover:text-whiteCoffe1": this.colorBtn === "brown",
        "text-whiteCoffe1 group-hover:text-coolBlue2": this.colorBtn === "blue",
      };
    },
  },
};
</script>
