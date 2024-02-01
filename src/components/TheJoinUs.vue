<template>
  <section class="join-us">
    <div class="join-us__img-box">
      <img class="join-us__img" src="../assets/images/newsletters/the-girl.png" alt="The Girl" />
      <div class="img-gradient"></div>
    </div>
    <div class="content container">
      <div class="content__title">Join us at</div>
      <div class="content__desc">
        <div class="queba">Queba</div>
        <div class="london">London</div>
      </div>
      <div class="content__text">
        Here is the place where beauty meets expertise, trends meet tradition, and relaxation meets
        rejuvenation
      </div>
      <div class="content__action-join-us">
        <base-btn class="btn--white">
          <template #text-btn>
            <icon-task />
            Book online
          </template>
        </base-btn>
        <div class="content__action-join-us-text">
          Make your appointment today and experience the Qubea difference!
        </div>
      </div>
    </div>
  </section>
  <section-wrap>
    <template #header-3>let’s keep in touch</template>
    <template #header-2>Subscribe to our newsletters </template>
  </section-wrap>
</template>
<script>
import BaseBtn from './BaseBtn.vue'
import IconTask from './icons/IconTask.vue'
import SectionWrap from './SectionWrap.vue'
export default {
  components: { BaseBtn, IconTask, SectionWrap }
}
</script>
<style lang="scss">
$bp-md: 768px;
.join-us {
  background-color: #957b65;
  position: relative;
  padding-bottom: 40px;
  &__img-box {
    position: relative;
    padding-top: 32px;
  }
  &__img {
    width: 100%;
    object-fit: cover;
  }
}
.img-gradient {
  position: absolute;
  inset: 0;
  background: rgb(149, 123, 101);
  background: linear-gradient(rgba(149, 123, 101, 0) 44%, rgba(149, 123, 101, 1) 100%);
  z-index: 10;
}
.content {
  &__action-join-us {
    border-color: var(--c-white-coffee-1);
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    padding: 12px;
    margin-top: 32px;
    &-text {
      margin-top: 8px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 15px;
      color: var(--c-white-coffee-1);
    }
  }
  &__title {
    font-weight: 600;
    font-size: 68px;
  }
  &__desc {
    font-family: Thesignature;
    font-size: 125px;
    line-height: 100%;
    color: #ffffff;
    position: relative;
    top: -20px;
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: 640px) {
      font-size: 145px;
    }
  }
  &__text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    color: var(--c-white-coffee-1);
  }
  .london {
    position: relative;
    top: 30px;
    float: right;
    @media only screen and (min-width: 640px) {
      top: 0;
    }
  }
}
</style>
