<template>
  <section-wrap class="section-social-media">
    <template #header-3>Works</template>
    <template #header-2>We on social media</template>
    <template #content>
      <slider-drag :widthItemSlide="280">
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
      </slider-drag>

      <div class="social-media__btn">
        <a class="social-media__link" href="https://www.instagram.com/larpradeda2/"
          >Discover more on @qubea.london</a
        >
        <base-btn class="btn--blue btn-instagram"
          ><template #text-btn><icon-instagram></icon-instagram>Visit instagram</template></base-btn
        >
      </div>
    </template>
  </section-wrap>
</template>
<script>
import SectionWrap from './SectionWrap.vue'
import SocialMediaItem from './SocialMediaItem.vue'
import SliderDrag from './SliderDrag.vue'
import BaseBtn from './BaseBtn.vue'
import IconInstagram from './icons/IconInstagram.vue'
export default {
  components: { SectionWrap, SocialMediaItem, SliderDrag, BaseBtn, IconInstagram }
}
</script>
<style lang="scss">
.section-social-media {
  will-change: transform;
  padding: 48px 0 48px 40px;
}
.social-media {
  &__btn {
    display: inline-block;
    margin-top: 40px;
  }
  &__link {
    margin-bottom: 16px;
    display: block;
  }
}
.btn-instagram {
  @media screen and (min-width: 768px) {
    max-width: 256px;
    flex: auto;
  }
}
</style>
