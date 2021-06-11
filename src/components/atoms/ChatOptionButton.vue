<template>
  <button
    class="
      font-body
      border border-gray-300
      px-4
      py-1
      my-2
      ml-3
      mr-1
      rounded-3xl
      hover:bg-gray-200
    "
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
