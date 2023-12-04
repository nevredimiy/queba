<template lang="">
    <div class="container">
      <div class="px-8 ssm:px-2 pt-6 pb-5 flex justify-between items-center">
        <div class="md:hidden">
          <button @click="$emit('activeMobileMenu')" type="button" title="Open Menu">
            <BaseIcon class="fill-coolBlue2 transition-transform hover:scale-x-125 " name="burger" width="24" height="18" viewBox="0 0 24 18" />
          </button>
        </div>
        <Logo />
        <div class="hidden md:flex flex-auto justify-end md:pr-10">
          <Menu />
        </div>
<div class="lg:hidden"><BaseIcon class="fill-coolBlue2" name="calendarCheck" /></div>
        <div class="hidden lg:block">
         <BookOnlineButton colorBtn="blueWhite"  />
        </div>
      </div>
    </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"
import Logo from "./Logo.vue"
import BookOnlineButton from "./BookOnlineButton.vue"
import TheMobileMenu from "./TheMobileMenu.vue"
import Menu from "./Menu.vue"
export default {
  components: {
    BaseIcon,
    Logo,
    BookOnlineButton, TheMobileMenu, Menu
  },
  emits: {
    activeMobileMenu: null
  },

};
</script>