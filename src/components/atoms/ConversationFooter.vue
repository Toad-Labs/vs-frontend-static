<template>
  <span
    class="sr-only focus:not-sr-only font-body"
    :tabindex="tabindex"
    @keyup.esc="returnToChatWindow"
    @keydown.up.prevent="prevElement($event)"
    @keydown.down.prevent="exitToInput"
    @keydown.shift.tab.prevent="prevElement($event)"
  >
    You have reached the end of the conversation, press escape to exit to the
    conversation window. Press down or tab if you want to send a message. Press
    shift+tab or up to revisit the conversation, press enter to return to the
    top of the conversation.
  </span>
</template>
<script>
export default {
  name: "ConversationFooter",
  emits: ["return-to-chat-window", "exit-to-input"],
  props: {
    tabindex: Number,
  },
  setup(_, context) {
    const returnToChatWindow = () => context.emit("return-to-chat-window");
    const exitToInput = () => context.emit("exit-to-input");
    const nextElement = (event) => event.target.nextElementSibling?.focus();
    const prevElement = (event) => event.target.previousElementSibling?.focus();
    return { returnToChatWindow, nextElement, prevElement, exitToInput };
  },
};
</script>
