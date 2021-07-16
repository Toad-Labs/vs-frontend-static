<template>
  <div :class="[!isUser ? 'flex ' : '']">
    <p
      :class="[
        !isUser
          ? 'bg-gray-infolt mr-10'
          : 'bg-blue-primary text-white float-right ml-10 ',
        ' p-3 rounded-3xl max-w-xs md:max-w-xl min-w-7/2r break-words',
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
