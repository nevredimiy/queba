<template>
  <section-wrap class="section-social-media">
    <template #header-3>Works</template>
    <template #header-2>We on social media</template>
    <template #content>
      <div class="social-media">
        <the-slider ref="items" :widthItemSlide="280" :slider-items="5">
          <template #items>
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
          </template>
        </the-slider>
      </div>
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
import TheSlider from './TheSlider.vue'
import BaseBtn from './BaseBtn.vue'
import IconInstagram from './icons/IconInstagram.vue'
export default {
  components: { SectionWrap, SocialMediaItem, TheSlider, BaseBtn, IconInstagram }
}
</script>
<style lang="scss">
.section-social-media {
  will-change: transform;
  padding: 48px 0 48px 40px;
}
.social-media {
  overflow: hidden;
  position: relative;

  &__btn {
    padding: 0 40px;
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
