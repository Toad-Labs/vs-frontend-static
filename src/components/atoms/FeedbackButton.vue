<template>
  <div class="px-2 sm:px-0">
    <div class="mx-auto container pt-6">
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
