<template>
  <div :class="[!isUser ? 'flex' : '', 'my-3']">
    <p
      :class="[
        !isUser ? 'bg-gray-infolt' : 'bg-blue-primary text-white float-right',
        ' p-3 rounded-3xl max-w-xs md:max-w-xl',
      ]"
    >
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  name: "ConversationMessage",
  props: {
    isUser: Boolean,
    text: String,
  },
};
</script>
<style scoped></style>
