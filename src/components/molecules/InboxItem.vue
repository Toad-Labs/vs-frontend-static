<template>
  <div :class="[selected ? 'bg-primary-light':'', 'flex items-center w-full h-20']">
    <div class="p-4">
      <div class="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center">
        J
      </div>
    </div>
    <div class="flex-auto">
      <p>Virtual Concierge</p>
      <p>Hi Mary, I'm your Virtual Con...</p>
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
