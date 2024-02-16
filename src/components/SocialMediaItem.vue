<template>
  <div class="sm">
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
        <div class="sm-card__img" @dblclick="isActive = !isActive">
          <slot name="img"></slot>
          <div :class="{ 'active-pulse': isActive }" class="like-position">
            <icon-heart class="icon-like"></icon-heart>
          </div>
        </div>
      </main>
      <footer class="sm-card__footer">
        <div class="action">
          <button class="action__btn" @click="isActive = !isActive">
            <icon-heart class="icon-heart" :class="{ active: isActive }" />
          </button>
          <button class="action__btn">
            <icon-comment class="icon-comment"></icon-comment>
          </button>
          <button class="action__btn">
            <icon-airplane class="icon-airplane"></icon-airplane>
          </button>
        </div>
        <button class="action__btn" @click="handleLike">
          <icon-bookmark class="icon-bookmark"></icon-bookmark>
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
import IconHeart from './icons/IconHeart.vue'
import IconComment from './icons/IconComment.vue'
import IconAirplane from './icons/IconAirplane.vue'
import IconBookmark from './icons/IconBookmark.vue'
export default {
  data() {
    return {
      isActive: false
    }
  },
  components: { IconHeart, IconComment, IconAirplane, IconBookmark },
  methods: {
    handleLike(event) {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active')
      } else {
        event.target.classList.add('active')
      }
    }
  }
}
</script>
<style lang="scss">
$width-item: 264;
.sm {
  position: relative;
}
.sm-card {
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid var(--c-cool-blue-2);
  width: $width-item + px;
  height: 457px;
  flex-shrink: 0;
  // perspective: 500px;
  // transform-style: preserve-3d;
  transition: all 300ms ease-in-out;
  @media screen and (min-width: 1024px) {
    @media (hover: hover) {
      &:hover {
        transform: rotateZ(3deg) scale(1.05);
        filter: drop-shadow(0 0 10px #fff) drop-shadow(0px 0px 5px #000);
        position: relative;
        z-index: 10;
      }
    }
  }
  &__img {
    cursor: pointer;
    position: relative;
  }
  &__header {
    padding: 12px;
  }
  &__header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}
.active-pulse {
  animation: pulse 1800ms;
}
.like-position {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 115px;
  height: 97px;
  color: #fff;
  filter: drop-shadow(0 0 20px #fff);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.icon-heart {
  width: 28px;
  height: 28px;
  color: #fff;
  stroke: #000;
}
.icon-bookmark {
  width: 28px;
  height: 28px;
  stroke: #000;
  color: #fff;
  & .active {
    transition: color 300ms;
    color: #000;
  }
}
.icon-airplane {
  width: 28px;
  height: 28px;
  transform: rotate(-35deg);
}
.icon-comment {
  width: 28px;
  height: 28px;
  transform: rotateY(180deg);
}
.action {
  display: flex;
  align-items: center;
  gap: 2px;
  &__btn {
    padding: 2px 4px;
    & .active {
      transition:
        color 300ms,
        stroke 300ms;
      color: #fb324d;
      stroke: #fb324d;
    }
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
.header-text {
  flex: auto;
  margin-left: 16px;
  &__title {
    font-weight: 900;
    font-size: 10px;
    &--blue {
      color: var(--c-cool-blue-2);
      font-weight: 700;
    }
  }
  &__content {
    font-weight: 500;
    font-size: 10px;
  }
}
</style>
