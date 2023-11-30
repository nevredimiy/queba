<template>
  <transition
  enter-active-class="transition ease-in-out duration-200 transform"
  enter-from-class="-translate-y-full"
  enter-to-class="translate-y-0"
  leave-active-class="transition ease-in-out duration-200 transform"
  leave-from-class="translate-y-0"
  leave-to-class="-translate-y-full"
  >

  <div id="mobile-menu" v-show="isActive" class="fixed inset-0 h-screen w-full px-9 z-40 bg-whiteCoffe1">
    <div class="py-6 flex justify-between items-center">
      <button @click="$emit('close')" class="w-8 h-8 flex justify-center items-center" type="button" title="Close Menu">
        <BaseIcon name="close" class="fill-coolBlue2" width="20" height="20" viewBox="0 0 20 20" />
      </button>
      <Logo />
      <div class="w-8">
        <BookOnlineButton colorBtn="blueWhite" onlyIcon />
      </div>
    </div>
    <Menu />
    <div class="mt-10">
      <BookOnlineButton colorBtn="blue" />
    </div>
    <div class="pt-10 pb-6">
      <Contact />
    </div>
    <Address />
  </div>
  </transition>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import Logo from './Logo.vue';
import BookOnlineButton from './BookOnlineButton.vue';
import Contact from './Contact.vue';
import Menu from './Menu.vue'
import Address from './Address.vue'
export default {
  components: { BaseIcon, Logo, BookOnlineButton, Contact, Menu, Address },
  props: {
    isActive: Boolean
  },
  emits: {
    close: null
  }
};
</script>
