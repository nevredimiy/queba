<template lang="">
  <a :class="{
    'border-coolBlue2 bg-baseWhite': colorBtn === 'blueWhite',
    'border-white bg-baseWhite': colorBtn === 'brown',
    'border-coolBlue3 bg-coolBlue2': colorBtn === 'blue',
    'border p-5 mb-9': !onlyIcon }"
        class="w-full rounded flex justify-center items-center"
        href="/"
      >
        <div class="flex gap-4 items-center">
          <BaseIcon :class="{
            'fill-coolBlue2': colorBtn === 'blueWhite', 'fill-umber2': colorBtn === 'brown', 'fill-whiteCoffe1': colorBtn === 'blue'
            }" name="calendarCheck" />
          <div v-if="!onlyIcon" :class="{'text-coolBlue2':colorBtn === 'blue', 'text-umber2':colorBtn === 'brown', 'text-whiteCoffe1': colorBtn === 'blue'}" class="font-medium text-2xl" >Book online</div>
        </div>
      </a>
</template>
<script>
import BaseIcon from './BaseIcon.vue'
export default {
  props: {
    colorBtn: String,
    onlyIcon: Boolean,
  },
  components: { BaseIcon },

}
</script>
<style lang="">

</style>