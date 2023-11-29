<template>
  <svg :class="$attrs.class || ''"  width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="path">

</svg>
</template>
<script>
import icons from '../icons'
export default {
  props: ['name'],
  data() {
    return {
      path: icons[this.name]
    }
  },
}
</script>
<style lang="">

</style>