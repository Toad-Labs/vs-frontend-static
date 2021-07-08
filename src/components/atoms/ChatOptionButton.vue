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
      bg-white
      hover:bg-gray-infolt
    "
    :aria-label="'Quick reply with ' + text"
    @click="sendFromButton"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: String,
  },
  setup(props, context) {
    function sendFromButton() {
      context.emit("send-button", props.text);
    }
    return {
      sendFromButton,
    };
  },
};
</script>
