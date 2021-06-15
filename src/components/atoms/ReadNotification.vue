<template>
  <div v-if="dayRead" class="flex items-center">
    <p class="font-heading font-light text-sm md:text-sm w-full text-center">
      {{ dayRead }}
    </p>
  </div>
  <div v-else class="flex items-center justify-center h-full">
    <div class="bg-alert-main rounded-full w-4 h-4" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    dayRead: String,
  },
  setup() {
    return {};
  },
};
</script>
