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
      break-words
      text-left
    "
    :aria-label="$t('quickReply') + text"
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
  emits: ["send-button"],
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
