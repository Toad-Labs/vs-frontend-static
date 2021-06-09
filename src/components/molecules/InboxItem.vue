<template>
  <div :class="[selected ? 'bg-blue-100':'', 'flex items-center w-full h-16 md:h-20 border-2 border-transparent focus:border-black hover:bg-gray-100 cursor-pointer']">
    <div class="p-4">
      <p class="bg-primary-light rounded-full flex items-center justify-center font-heading w-10 h-10 md:w-12 md:h-12 text-3xl">
        J
      </p>
    </div>
    <div class="flex-auto truncate">
        <p :class="[!dayRead ? 'font-bold':'', 'font-body md:text-lg truncate overflow-ellipsis']">Virtual Concierge</p>
        <p class="font-body font-light text-sm md:text-base truncate overflow-ellipsis">Hi Mary, I'm your Virtual Con...</p>
    </div>
    <div class="p-4 w-20 h-20">
      <read-notification v-bind:dayRead='dayRead' />
    </div>
  </div>
</template>

<script lang="ts">
import ReadNotification from '../atoms/ReadNotification.vue';
export default ({
  props: {  
    dayRead: String,
    selected: Boolean
  },
  setup() {
    return {
    };
  },
  components: {
    ReadNotification
  },
});
</script>