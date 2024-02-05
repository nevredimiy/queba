<template>
  <section class="join-us">
    <div class="join-us__img-box">
      <div class="join-us__img"></div>
      <div class="join-us__img--gradient"></div>
    </div>
    <div class="content container">
      <div class="content__title">Join us at</div>
      <div class="content__description">
        <div class="qubea">Q<span>ubea</span></div>
        <div class="london">L<span>ondon</span></div>
      </div>
      <div class="content__text">
        Here is <br class="content__text--break" />
        the place where beauty meets expertise,<br class="content__text--break" />trends meet
        tradition, and relaxation meets rejuvenation
      </div>
      <div class="content__action-join-us">
        <base-btn class="btn--brown content__btn">
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
  <section class="subscribe">
    <div class="subscribe__content">
      <h3>let’s keep in touch</h3>
      <h2>Subscribe to our newsletters</h2>
      <div class="subscribe__promice">
        <icon-promice></icon-promice>Quality content only, we promise
      </div>
    </div>

    <form class="subscribe__form form" action="">
      <div class="form__input-wrap">
        <label class="form__label" for="input-email"><icon-letter></icon-letter></label>
        <input class="form__input" id="input-email" type="email" />
      </div>
      <base-btn class="btn--blue form__btn">
        <template #text-btn>Get newsletters</template>
      </base-btn>
    </form>
    <div class="subscribe__bg"></div>
  </section>
</template>
<script>
import BaseBtn from './BaseBtn.vue'
import IconTask from './icons/IconTask.vue'
import IconPromice from './icons/IconPromice.vue'
import IconLetter from './icons/IconLetter.vue'
export default {
  components: { BaseBtn, IconTask, IconPromice, IconLetter }
}
</script>
<style lang="scss">
$bp-sm: 640px;
$bp-md: 768px;
$bp-lgm: 980px;
$bp-lg: 1024px;

.join-us {
  background-color: #957b65;
  position: relative;
  padding-bottom: 40px;

  @media screen and (min-width: $bp-md) {
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
    padding-bottom: 0;
    max-height: 465px;
  }
  &__img-box {
    overflow: hidden;
    height: 500px;
    position: relative;
    top: 1px;
    @media screen and (min-width: $bp-md) {
      width: 50%;
      height: auto;
    }
    @media screen and (min-width: 1536px) {
      width: 80%;
    }
  }
  &__img {
    margin-top: 40px;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/newsletters/the-girl.png');
    background-size: cover;
    background-position: center;
    @media screen and (min-width: $bp-sm) {
    }
    @media screen and (min-width: $bp-md) {
      margin-top: 0;
    }
    @media screen and (min-width: $bp-lg) {
    }
    &--gradient {
      position: absolute;
      inset: 0;
      background: rgb(149, 123, 101);
      background: linear-gradient(rgba(149, 123, 101, 0) 44%, rgba(149, 123, 101, 1) 100%);
      z-index: 10;
      @media screen and (min-width: $bp-lg) {
        background: none;
      }
    }
  }
}

.content {
  position: relative;
  top: -60px;
  z-index: 20;
  @media screen and (min-width: $bp-md) {
    width: 50%;
    margin-top: 40px;
    max-width: 590px;
  }
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
      line-height: 1.5;
    }
    @media screen and (min-width: $bp-md) {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 450px;
      margin-bottom: 40px;
    }
  }
  &__btn {
    @media screen and (min-width: $bp-lg) {
      flex-shrink: 0;
      width: auto;
    }
  }
  &__title {
    font-weight: 600;
    font-size: 48px;
    color: var(--c-white-coffee-1);
    @media screen and (min-width: $bp-sm) {
      font-size: 58px;
    }
    @media screen and (min-width: $bp-lg) {
      font-size: 64px;
      width: 220px;
      line-height: 1;
    }
  }
  &__description {
    font-family: Thesignature;
    font-size: 140px;
    line-height: 100%;
    letter-spacing: normal;
    color: #ffffff;
    position: relative;
    top: -20px;
    @media screen and (min-width: $bp-md) {
      display: flex;
    }
    @media screen and (min-width: $bp-lg) {
      left: 80px;
      top: 0;
      margin-top: -50px;
    }
  }
  .qubea {
    margin-top: -15px;
    display: inline-block;
    & span {
      margin-left: -10px;
    }
  }
  .london {
    position: absolute;
    left: 97px;
    top: 35px;
    & span {
      margin-left: -65px;
    }
    @media screen and (min-width: $bp-sm) {
      position: static;
      display: inline-block;
      padding-left: 10vw;
    }
    @media screen and (min-width: $bp-md) {
      padding-left: 0;
    }
    @media screen and (min-width: $bp-lg) {
      margin-top: -15px;
    }
  }
  &__text {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    color: var(--c-white-coffee-1);
    @media only screen and (min-width: $bp-sm) {
      margin-top: -20px;
      font-size: 18px;
    }
    @media screen and (min-width: $bp-md) {
      margin-top: -40px;
      min-width: 450px;
    }
    @media screen and (min-width: $bp-lg) {
      margin-top: -50px;
    }
    &--break {
      display: none;
      @media screen and (min-width: $bp-lg) {
        display: block;
      }
    }
  }

  @media screen and (min-width: $bp-sm) {
    position: static;
  }
}
.subscribe {
  padding: 64px 40px;
  position: relative;
  min-height: 940px;
  @media screen and (min-width: $bp-lgm) {
    max-height: 510px;
    min-height: auto;
    display: flex;
    justify-content: space-between;
  }
  &__content {
    & h2,
    & h3 {
      background: none;
      display: block;
    }
  }
  &__bg {
    padding-block: 40px;
    position: absolute;
    inset: 0;
    background-image: url('../assets/images/subscribe/hand-with-ring-middle-plus.png');
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: 50% 435px;
    z-index: -1;
    opacity: 0.3;
    @media screen and (min-width: $bp-lgm) {
      background-size: 100%;
      background-position: 50% 0%;
    }
  }
  &__promice {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 20px;
    padding: 24px 0 40px;
  }
}
.form {
  &__input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__input {
    border: none;
    border-bottom: 1px solid var(--c-umber-3);
    width: 100%;
    padding: 18px 10px 18px 55px;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
    transition: box-shadow 300ms;
    background-color: transparent;
    &:focus {
      outline: 1px solid var(--c-umber-3);
      border-radius: 10px;
      border: none;
      box-shadow: 0px 0px 20px var(--c-umber-3);
    }
  }
  &:has(input:focus) label {
    transform: translateX(3px);
  }
  &__label {
    position: absolute;
    left: 10px;
    top: 25%;
    transition: transform 300ms;
  }
  &__btn {
    max-width: fit-content;
    justify-content: flex-start;
    margin: 0;
  }
}
</style>
