<template>
  <div class="px-1 xs:px-0 pt-6">
    <button
      :class="
        'w-full rounded justify-center py-2 sm:w-2/5 md:w-1/3 md:max-w-sm' +
        ' ' +
        colorClass
      "
    >
      {{ text }}
    </button>
  </div>
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
