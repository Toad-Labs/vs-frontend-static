<template>
  <div :class="[!isUser ? 'flex ' : '']">
    <p
      :class="[
        !isUser ? 'bg-gray-infolt' : 'bg-blue-primary text-white float-right',
        ' p-3 rounded-3xl max-w-xs md:max-w-xl break-words',
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
