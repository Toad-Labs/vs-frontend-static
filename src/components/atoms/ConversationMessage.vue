<template>
  <div :class="[!isUser ? 'flex' : '', 'w-full my-3']">
    <p
      :class="[
        !isUser ? 'bg-gray-infolt' : 'bg-blue-primary text-white float-right',
        ' p-3 rounded-3xl w-2/3 md:w-1/2',
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
