<template>
  <div class="px-2 sm:px-0">
    <div class="px-4 xs:px-6 sm:mx-auto sm:container">
      <button
        :class="
          'w-full font-heading rounded justify-center py-2 mt-6 sm:w-2/5 md:w-1/3 md:max-w-sm' +
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
