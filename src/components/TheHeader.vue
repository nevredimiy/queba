<template lang="">
    <div class="container">
      <div class="pt-6 pb-5 flex justify-between items-center">
        <div class="">
          <button @click="$emit('activeMobileMenu')" type="button" title="Open Menu">
            <BaseIcon class="fill-coolBlue2" name="burger" />
          </button>
        </div>
        <Logo />
        <div class="">
         <BookOnlineButton colorBtn="blueWhite" only-icon />
        </div>
      </div>
    </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"
import Logo from './Logo.vue'
import BookOnlineButton from './BookOnlineButton.vue'
import TheMobileMenu from './TheMobileMenu.vue'
export default {
  components: {
    BaseIcon,
    Logo,
    BookOnlineButton,TheMobileMenu,
  },
  emits: {
    activeMobileMenu: null
  }
};
</script>