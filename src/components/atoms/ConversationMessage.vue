<template>
  <li
    :class="[!isUser ? 'flex ' : '', 'pl-10 relative py-px']"
    :tabindex="tabindex"
    @keyup.esc="returnToChatWindow"
    @keydown.prevent.up="prevElement($event)"
    @keydown.prevent.shift.tab="prevElement($event)"
    @keydown.prevent.down="nextElement($event)"
    @keydown.prevent.exact.tab="nextElement($event)"
    aria-live="polite"
  >
    <!-- <span class="sr-only">{{ (isUser ? "You " : senderName) }} said:</span> -->
    <h4
      :aria-label="(isUser ? $t('you') : senderName) + $t('said') + text"
      :class="[
        !isUser
          ? 'bg-gray-infolt mr-10'
          : 'bg-blue-primary text-white float-right ml-10',
        isLastMessage && isUser
          ? 'userMessage'
          : isLastMessage
          ? 'botMessage'
          : '',
        ' p-3 rounded-3xl max-w-xs md:max-w-xl min-w-7/2r break-words',
      ]"
    >
      {{ text }}
    </h4>
    <img
      v-if="isLastMessage"
      ref="chatReaderIcon"
      :src="icons[senderIcon]"
      :alt="senderIconAltText"
      class="h-6 w-10 absolute left-0 bottom-0"
    />
  </li>
</template>
<script>
import icons from "../../assets/icons.js";
export default {
  name: "ConversationMessage",
  emits: ["return-to-chat-window"],
  props: {
    senderIcon: String,
    senderIconAltText: String,
    isUser: Boolean,
    isLastMessage: Boolean,
    text: String,
    tabindex: Number,
    senderName: String,
  },
  setup(_, context) {
    const returnToChatWindow = () => context.emit("return-to-chat-window");
    const nextElement = (event) => event.target.nextElementSibling?.focus();
    const prevElement = (event) => event.target.previousElementSibling?.focus();
    return {
      returnToChatWindow,
      nextElement,
      prevElement,
      icons,
    };
  },
};
</script>
<style scoped>
/* Chat bubble animations*/
.userMessage,
.botMessage {
  animation: slideUp 0.1s ease-in;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
  }
  to {
    transform: none;
  }
}
</style>
