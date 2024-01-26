<template>
  <section-wrap>
    <template #header-3>Works</template>
    <template #header-2>We on social media</template>
    <template #content>
      <div class="social-media">
        <div class="social-media__wrap">
          <social-media-item>
            <template #img
              ><img src="../assets/images/social-media/image1.jpg" alt="image-1"
            /></template>
          </social-media-item>
          <social-media-item>
            <template #img
              ><img src="../assets/images/social-media/image2.jpg" alt="image-2"
            /></template>
          </social-media-item>
          <social-media-item>
            <template #img
              ><img src="../assets/images/social-media/image3.jpg" alt="image-3"
            /></template>
          </social-media-item>
          <social-media-item>
            <template #img
              ><img src="../assets/images/social-media/image4.jpg" alt="image-4"
            /></template>
          </social-media-item>
          <social-media-item>
            <template #img
              ><img src="../assets/images/social-media/image5.jpg" alt="image-5"
            /></template>
          </social-media-item>
        </div>
      </div>
    </template>
  </section-wrap>
</template>
<script>
import SectionWrap from './SectionWrap.vue'
import SocialMediaItem from './SocialMediaItem.vue'
export default {
  components: { SectionWrap, SocialMediaItem }
}
</script>
<style>
.social-media {
  display: flex;
  gap: 16px;
  overflow: hidden;
}
</style>
