<template lang="">
    <div class="container">
      <div class="px-9 pt-6 pb-5 flex justify-between items-center">
          <div class="">
              <button>
                <BaseIcon class="fill-coolBlue2" name="burger" />
              </button>
          </div>
          <div class="">
              <a href="/">
                  <div class="text-center">
                      <img src="../assets/logo.svg" alt="Logo">
                      <div class="font-semibold text-[7px]">Net of beauty branches in London </div>
                  </div>
              </a>
          </div>
          <div class="">
            <a href="">
            <BaseIcon class="fill-coolBlue2" name="calendarCheck" />
          </a>
          </div>
        </div>
    </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
export default {
  components: {
    BaseIcon,
  }
}
</script>
<style lang="">

</style>