<template lang="">
  <section id="book" class="px-9 ssm:px-2 py-8 ssm:py-14">
    <div class="container overflow-hidden relative">
      <h4 class="mb-2">works</h4>
      <h1 class="mb-8">We on social media</h1>

        <div
          class="relative w-full flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
        >
          <SocialMediaItem v-for="(item, index) in dataSocialMedia" :key="index" :item="item" />

        </div>

      <div class="font-medium text-coolBlue2">
        Discover more on @qubea.london
      </div>
      <div class="max-w-[400px]">
        <Btn w="26" h="27" nameIcon="instagram" />
      </div>
    </div>
  </section>
</template>

<script>
import Btn from "./Btn.vue"
import SocialMediaItem from './SocialMediaItem.vue'
import dataSocialMedia from './dataSocialMedia.js'

export default {
  components: {
    Btn,
    SocialMediaItem,
  },
  data() {
    return {
      dataSocialMedia
    }
  }
};
</script>
