<template lang="">
   <div class="flex justify-between">
     <a href="tel:+44 740 093 07 60" class="flex gap-2">
        <BaseIcon name="phone" class="fill-coolBlue2" width="26" height="25" viewBox="0 0 26 25" />
        <span class="font-medium text-xl text-coolBlue5">+44 740 093 07 60</span>
     </a>
      <a href="#" class="flex gap-2">
        <BaseIcon name="instagram" class="fill-coolBlue2" width="27" height="26" viewBox="0 0 27 26" />
        <span class="font-medium text-xl text-coolBlue5">Instagram</span>
      </a>
    </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
components: { BaseIcon },
}
</script>