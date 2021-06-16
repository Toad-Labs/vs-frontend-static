<template>
  <button
    :class="
      'w-full rounded justify-center py-2 mt-6 md:w-1/3 md:max-w-sm' +
      ' ' +
      colorClass
    "
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
    colorClass: String,
  },
  setup() {
    return {};
  },
};
</script>
