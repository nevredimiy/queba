<template>
   <div @click="handleClick" class="flex-shrink-0 max-w-[400px] relative rounded-lg overflow-hidden border border-coolBlue3 mr-4">
          <img
            class="w-full"
            :src="item.image"
            :alt="item.label"
          />
          <div class="absolute bottom-0 left-0 right-0">
            <div class="bg-white px-6 pt-6 pb-3 inline-block">
              <h2>{{item.label}}</h2>
            </div>
            <div class="bg-white pb-6">
              <a class="flex gap-2 items-center w-full regal-link px-6" href="">
                Book a visit
               <BaseIcon width="32" height="19" viewBox="0 0 32 19" name="arrowRightRegalLink" />
              </a>
            </div>
          </div>
        </div>
</template>
<script>
import BaseIcon from './BaseIcon.vue'
const handleClick = () => {
  console.log("ggg");
}
export default {
  components: {
    BaseIcon
  },
  props: {
    item: {
      image: String,
      url: String,
    }
  }
}
</script>
<style lang="">

</style>