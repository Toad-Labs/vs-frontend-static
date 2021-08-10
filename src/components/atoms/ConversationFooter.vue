<template>
  <li
    class="sr-only focus:not-sr-only font-body focus:p-2"
    :tabindex="tabindex"
    @keyup.esc="returnToChatWindow"
    @keydown.up.prevent="prevElement($event)"
    @keydown.down.prevent="exitToInput"
    @keydown.shift.tab.prevent="prevElement($event)"
  >
    <span>
      {{ $t("conversationFooter") }}
    </span>
  </li>
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
