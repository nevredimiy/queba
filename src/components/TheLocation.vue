<template>

      <section-wrap class="location">
        <template #header-3>Location</template>
        <template #header-2>Where to find us</template>
        <template #content>
          <div class="location__bg">
            <picture>
              <source media="(min-width: 1024px)" srcset="../assets/images/map-desktop.jpg" />
              <img class="location__bg-img" src="../assets/images/map-mobile.jpg" alt="" />
            </picture>
          </div>
          <div class="clear"></div>
        </template>
      </section-wrap>

</template>
<script>
import SectionWrap from './SectionWrap.vue'
export default {
  components: { SectionWrap }
}
</script>
<style lang="scss">
.location {
  margin: 46px 0;
  position: relative;
  padding: 40px 0;
  &__bg {
    inset: 0;
    z-index: -1;
    height: 100%;
  }
  &__bg-img {
    width: 100%;
  }
  & .header-wrap{
    position: absolute;
    top: 40px;
    padding: 40px;
    & h2, & h3 {
        padding: 0 20px;
    }
}
}
.clear{
    position: relative;
    bottom: 0;
    width: 100%;
    height: 2px;
}
</style>
