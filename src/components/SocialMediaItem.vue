<template lang="">
  <div class="bg-white rounded-md border border-coolBlue2 shrink-0 mr-4 overflow-hidden">
    <header class="p-3">
      <div class="flex gap-4 justify-between items-center">
        <div
          class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-600 to-pink-600 p-0.5"
        >
          <div class="w-full h-full bg-white rounded-full p-0.5">
            <div class="bg-[#e6e0d8] rounded-full w-full h-full"></div>
          </div>
        </div>
        <div class="flex-auto">
          <div class="font-bold text-xs">
            queba.london &#183;
            <span class="text-blue-600 font-bold">Follow</span>
          </div>
          <div class="font-medium text-xs">London, United Kindom</div>
        </div>
        <button type="button" title="Menu post" class="">
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
    <main @dblclick="handleLike" class="relative cursor-pointer group">
      <img :src="item.image" :alt="item.label" />
      <transition
       enter-active-class="transition-opacity ease-in-out duration-1000"
        enter-from-class="opacity-100"
      >
      <div
      v-show="isActive"
        class="opacity-0  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
    <footer class="flex justify-between p-3 items-center">
      <div class="flex items-center gap-2">
        <button @click="handleLike">
          <svg
            :class="{
              'animate-heartPulse fill-red-600 stroke-red-600': isActive,
            }"
            class="w-6 h-6 hover:opacity-50 transition-opacity"
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
        </button>
        <button class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 -scale-x-100 hover:opacity-50 transition-opacity"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </button>
        <button class="">
          <svg
            class="w-6 h-6 -rotate-45 hover:opacity-50 transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
      <button class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 hover:opacity-50 transition-opacity"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    item: {
      image: String,
      label: String,
    }
  },
  methods: {
    handleLike() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
