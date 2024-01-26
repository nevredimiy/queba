<template>
  <div class="sm-card">
    <header class="sm-card__header">
      <div class="sm-card__header-wrap">
        <div class="avatar">
          <div class="avatar__bg">
            <div class="avatar__icon"></div>
          </div>
        </div>
        <div class="header-text">
          <div class="header-text__title">
            queba.london &#183;
            <span class="header-text__title--blue">Follow</span>
          </div>
          <div class="header-text__content">London, United Kindom</div>
        </div>
        <button
          @touchstart="nameCurrentEvent('touchstart')"
          @touchmove="nameCurrentEvent('touchmove')"
          @touchend="nameCurrentEvent('touchend')"
          type="button"
          title="Menu post"
          class=""
        >
          <svg
            class="hover:scale-x-90 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="4" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="20" cy="12" r="2" />
          </svg>
        </button>
      </div>
    </header>
    <main>
        <div class="sm-card__img">
            <slot name="img"></slot>
        </div>

      <transition
        enter-active-class="transition-opacity ease-in-out duration-1000"
        enter-from-class="opacity-100"
      >
        <div
          v-show="isActive"
          class="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            class="w-36 h-36 fill-white stroke-white drop-shadow-whiteSnow transition"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              fill="current"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </transition>
    </main>
    <footer class="sm-card__footer">
      <div class="action">
        <button class="action__btn" @click="handleLike">
         <icon-heart class="icon-heart" />
        </button>
        <button class="action__btn">
          <icon-comment class="icon-comment"></icon-comment>
        </button>
        <button class="action__btn">
        <icon-airplane class="icon-airplane"></icon-airplane>
        </button>
      </div>
      <button class="action__btn">
      <icon-bookmark class="icon-bookmark"></icon-bookmark>
      </button>
    </footer>
  </div>
</template>
<script>
import IconHeart from './icons/IconHeart.vue';
import IconComment from './icons/IconComment.vue';
import IconAirplane from './icons/IconAirplane.vue';
import IconBookmark from './icons/IconBookmark.vue';
export default {
    components: {IconHeart, IconComment, IconAirplane, IconBookmark}
}
</script>
<style lang="scss">
.icon-bookmark{
    width: 28px;
    height: 28px;
}
.icon-airplane{
    width: 28px;
    height: 28px;
    transform: rotate(-35deg);
}
.icon-comment{
    width: 28px;
    height: 28px;
    transform: rotateY(180deg);
}
.action{
    display: flex;
    align-items: center;
    gap: 2px;
    &__btn{
        padding: 2px 4px;
    }
}
.icon-heart{
    width: 28px;
    height: 28px;
    color: #fb324d;
}
.sm-card {
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid var(--c-cool-blue-2);
  max-width: 264px;
  flex-shrink: 0;
  &__img{
    cursor: pointer;
}
  &__header {
    padding: 12px;
  }
  &__header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
}
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(45deg, #fdcd1d, #fb324d, #a04bd9);
  &__bg {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
    padding: 2px;
  }
  &__icon {
    width: 100%;
    height: 100%;
    background-color: var(--c-white-coffee-5);
    border-radius: 50%;
  }
}
.header-text{
    flex: auto;
    margin-left: 16px;
  &__title {
    font-weight: 900;
    font-size: 10px;
    &--blue{
        color: var(--c-cool-blue-2);
        font-weight: 700;
    }
  }
  &__content{
   font-weight: 500;
   font-size: 10px;
  }
}
</style>
