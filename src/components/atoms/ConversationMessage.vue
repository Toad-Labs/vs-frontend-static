<template>
  <div
    :class="[!isUser ? 'flex ' : 'pl-10 relative']"
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
        ' p-3 rounded-3xl max-w-xs md:max-w-xl min-w-7/2r break-words',
      ]"
    >
      {{ text }}
    </p>
    <img
      v-if="isLastMessage"
      ref="chatReaderIcon"
      :src="icons[senderIcon]"
      :alt="senderIconAltText"
      class="h-6 w-10 absolute left-0 bottom-0"
    />
  </div>
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
    };
  },
  setup() {
    return {
      icons,
    };
  },
};
</script>
<style scoped></style>
