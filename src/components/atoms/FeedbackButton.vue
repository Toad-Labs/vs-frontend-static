<template>
  <div class="px-2 sm:px-0">
    <div class="px-4 xs:px-16 sm:px-0 sm:mx-auto my-6 sm:container">
      <button
        :class="[
          'w-full font-heading rounded justify-center py-2 sm:w-2/5 md:w-1/3 md:max-w-sm',
          colorClass,
        ]"
      >
        {{ text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    colorClass: String,
  },
};
</script>
