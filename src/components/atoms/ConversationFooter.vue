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
    shift+tab to revisit the conversation, press enter to return to the top of
    the conversation.
  </span>
</template>
<script>
import { ConversationTabbables } from "./ConversationTabbables.js";
export default {
  name: "ConversationFooter",
  emits: ["return-to-chat-window", "exit-to-input"],
  props: {
    tabindex: Number,
  },
  setup(_, context) {
    const { returnToChatWindow, nextElement, prevElement } =
      ConversationTabbables(_, context);
    function exitToInput() {
      context.emit("exit-to-input");
    }
    return { returnToChatWindow, nextElement, prevElement, exitToInput };
  },
};
</script>
