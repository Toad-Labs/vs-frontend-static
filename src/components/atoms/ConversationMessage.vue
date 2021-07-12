<template>
  <div
    :class="[!isUser ? 'flex ' : '']"
    :tabindex="tabindex"
    @keyup.esc="returnToChatWindow"
    @keydown.prevent.up="prevElement($event)"
    @keydown.prevent.shift.tab="prevElement($event)"
    @keydown.prevent.down="nextElement($event)"
    @keydown.prevent.exact.tab="nextElement($event)"
  >
    <span class="sr-only">{{ isUser ? "You " : senderName }} said:</span>
    <p
      :class="[
        !isUser
          ? 'bg-gray-infolt mr-10'
          : 'bg-blue-primary text-white float-right ml-10 ',
        ' p-3 rounded-3xl max-w-xs md:max-w-xl min-w-7/2r text-center break-words',
      ]"
    >
      {{ text }}
    </p>
  </div>
</template>
<script>
import { ConversationTabbables } from "./ConversationTabbables.js";
export default {
  name: "ConversationMessage",
  emits: ["return-to-chat-window"],
  props: {
    isUser: Boolean,
    text: String,
    tabindex: Number,
    senderName: String,
  },
  setup(_, context) {
    const { returnToChatWindow, nextElement, prevElement } =
      ConversationTabbables(_, context);
    return { returnToChatWindow, nextElement, prevElement };
  },
};
</script>
<style scoped></style>
