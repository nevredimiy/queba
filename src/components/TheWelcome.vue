<template>
  <section-wrap class="welcome">
    <template #header-3>Welcome to Qubea London</template>
    <template #header-2>Ultimate Beauty Destination!</template>
    <template #content>
      <div class="">
        Discover a world of beauty and relaxation where every detail is tailored to enhance your
        natural allure. Our salon specializes in nail and pedicure services, eyelash extensions,
        eyebrow lamination, hair styling, and makeup, ensuring you radiate confidence and charm.
      </div>
    </template>
  </section-wrap>
  <div class="container">
    <slider-drag :widthItemSlide="280" class="welcome__slider-wrap">
      <div class="reason">
        <div class="reason__icon">
          <icon-safety></icon-safety>
        </div>
        <div class="reason__content">
          <div class="reason__title">Safety First</div>
          <div class="reason__text">
            We prioritize your well-being by employing medical sterilization using specialized
            autoclaves. Your safety is our top priority. Rest assured, your well-being is at the
            forefront of everything we do, providing you with the peace of mind you deserve.
          </div>
        </div>
      </div>
      <div class="reason">
        <div class="reason__icon">
          <icon-expert></icon-expert>
        </div>
        <div class="reason__content">
          <div class="reason__title">Expert Craftsmanship:</div>
          <div class="reason__text">
            Our team of seasoned specialists isn't just here to perform procedures – they're here to
            guide you. With their wealth of experience, they'll suggest the best options to
            accentuate your beauty, ensuring your experience is both pampering and informative.
          </div>
        </div>
      </div>
      <div class="reason">
        <div class="reason__icon">
          <icon-efficiency></icon-efficiency>
        </div>
        <div class="reason__content">
          <div class="reason__title">Efficiency Meets Luxury</div>
          <div class="reason__text">
            We understand the hustle and bustle of city life. That's why we offer our exclusive 4
            Hands Service, allowing you to enjoy multiple treatments simultaneously, making the most
            of your valuable time.
          </div>
        </div>
      </div>
      <div class="reason">
        <div class="reason__icon">
          <icon-long-lasting></icon-long-lasting>
        </div>
        <div class="reason__content">
          <div class="reason__title">Long-Lasting Beauty</div>
          <div class="reason__text">
            For enduring results, our aftercare recommendations ensure your lashes and brows remain
            stunning long after your treatments.
          </div>
        </div>
      </div>
      <div class="reason">
        <div class="reason__icon">
          <icon-wind></icon-wind>
        </div>
        <div class="reason__content">
          <div class="reason__title">Trendsetters' Paradise</div>
          <div class="reason__text">
            At Qubea London, we're always at the forefront of trends. Discover the latest materials
            and popular nail polish palettes that reflect the most current styles.
          </div>
        </div>
      </div>
      <div class="reason">
        <div class="reason__icon">
          <icon-custom-centric></icon-custom-centric>
        </div>
        <div class="reason__content">
          <div class="reason__title">Customer-Centric Approach</div>
          <div class="reason__text">
            Our commitment to you doesn't end after your visit. Our dedicated Customer Care Manager
            is always available to address your feedback and suggestions.
          </div>
        </div>
      </div>
      <div class="reason">
        <div class="reason__icon">
          <icon-serene-oasis></icon-serene-oasis>
        </div>
        <div class="reason__content">
          <div class="reason__title">Serene Oasis</div>
          <div class="reason__text">
            Your comfort is paramount. Our serene atmosphere and friendly administrator await to
            offer you a cup of tea, coffee, or a glass of Prosecco to elevate your mood.
          </div>
        </div>
      </div>
    </slider-drag>
  </div>
</template>

<script>
import SectionWrap from './SectionWrap.vue'
import IconSafety from './icons/IconSafety.vue'
import IconExpert from './icons/IconExpert.vue'
import IconEfficiency from './icons/IconEfficiency.vue'
import IconLongLasting from './icons/IconLongLasting.vue'
import IconWind from './icons/IconWind.vue'
import IconCustomCentric from './icons/IconCustomCentric.vue'
import IconSereneOasis from './icons/IconSereneOasis.vue'
import SliderDrag from './SliderDrag.vue'
export default {
  components: {
    SectionWrap,
    IconSafety,
    IconExpert,
    IconEfficiency,
    IconLongLasting,
    IconWind,
    IconCustomCentric,
    IconSereneOasis,
    SliderDrag
  }
}
</script>
<style lang="scss">
.welcome__slider-wrap {
  position: relative;
  display: flex;
  @media screen and (min-width: 980px) {
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 48px;
    column-gap: 24px;
  }
}
.reason {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-right: 16px;
  flex-shrink: 0;
  width: 280px;
  transition:
    background 300ms ease-in-out,
    box-shadow 300ms ease-in-out;
  padding: 15px;
  border-radius: 10px;
  @media (hover: hover) {
    &:hover {
      box-shadow: 1px 0px 5px var(--c-cool-blue-3);
    }
  }
  @media screen and (min-width: 980px) {
    flex-direction: row;
    gap: 16px;
    width: auto;
    padding: 15px;
    border-radius: 8px;
    @media (hover: hover) {
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      &:hover &__icon svg {
        transform: translateY(-3px);
      }
    }
  }

  &__icon {
    width: 104px;
    height: 104px;
    margin-bottom: 32px;
    background-color: var(--c-cool-blue-3);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    flex-shrink: 0;
    & svg {
      transition: transform 300ms;
    }
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    color: var(--c-cool-blue-3);
    margin-bottom: 24px;
  }
}
.welcome {
  padding: 0 40px;
  margin-bottom: 48px;
  @media screen and (min-width: 980px) {
    width: 50%;
  }
}
</style>
