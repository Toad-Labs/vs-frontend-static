<template>
  <input
    ref="input"
    id="send-message-input"
    type="text"
    :placeholder="$t('writeSomething')"
    class="
      w-full
      border-t border-b border-gray-200
      placeholder-gray-mediumlt
      text-gray-dark
      font-body
      p-3
      bg-clip-padding
    "
    v-model="text"
    :aria-label="$t('writeSomething')"
    @keydown.up.prevent="moveToMostRecentMessage"
    @blur="resetChatWindow"
    @keyup.enter="sendText"
    @input="checkSendBtnActive"
  />
  <div class="flex flex-row bg-gray-infolt text-gray-dark">
    <div class="w-full min-h-12">
      <chat-option-button
        v-for="(option, index) in buttonOptions"
        :key="index"
        :text="option?.value ?? option"
        @send-button="sendBtnText"
      />
    </div>
    <div class="relative flex w-12 flex-shrink-0">
      <button
        class="cursor-pointer absolute right-0 top-0"
        :aria-label="$t('sendMessage')"
        :disabled="isDisabled"
        @click="sendText"
        @focus="onSendBtnFocus"
        @mouseover="onSendBtnFocus"
        @mouseleave="checkSendBtnActive"
        @blur="checkSendBtnActive"
      >
        <img
          class="focus:border-none"
          :src="icons[iconState]"
          :alt="$t('sendIcon')"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>
<script>
import icons from "../../assets/icons.js";

import ChatOptionButton from "./ChatOptionButton.vue";
import { ref } from "vue";

export default {
  name: "TextInput",
  props: {
    buttonOptions: Array,
  },
  components: {
    ChatOptionButton,
  },
  emits: ["add-message", "move-to-most-recent-message", "reset-chat-window"],
  setup(_, context) {
    const text = ref("");
    const isDisabled = ref(true); //should be inactive as there's no input text at the start
    const iconState = ref("SendInactive");

    //this ref are reassigned to their respective components on mounting
    //the actual component is accessed by using input.value
    const input = ref(null);

    function sendText() {
      if (this.text.length > 0) {
        context.emit("add-message", this.text);
        text.value = "";
        checkSendBtnActive();
        input.value.focus();
      }
    }
    function sendBtnText(btnText) {
      if (btnText.length > 0) {
        context.emit("add-message", btnText);
      }
    }
    function onSendBtnFocus() {
      iconState.value =
        text.value === "" ? "SendInactive" : "SendActiveFocused";
    }

    function checkSendBtnActive() {
      isDisabled.value = text.value === ""; //the send button will be untabbable if there's no text
      iconState.value = isDisabled.value ? "SendInactive" : "SendActive";
    }

    function moveToMostRecentMessage() {
      context.emit("move-to-most-recent-message");
    }

    function resetChatWindow() {
      context.emit("reset-chat-window");
    }

    return {
      moveToMostRecentMessage,
      isDisabled,
      input,
      text,
      icons,
      iconState,
      sendText,
      sendBtnText,
      onSendBtnFocus,
      checkSendBtnActive,
      resetChatWindow,
    };
  },
};
</script>
