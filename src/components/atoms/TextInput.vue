<template>
  <input
    type="text"
    placeholder="Write something..."
    class="w-full border-t border-b border-gray-200 p-3 bg-clip-padding"
    v-model="text"
    aria-label="Send message"
    @keyup.enter="sendText"
    @onchange="checkSendBtnActive"
  />
  <div class="w-auto bg-gray-infolt text-gray-dark">
    <chat-option-button
      v-for="(option, index) in buttonOptions"
      :key="index"
      :text="option"
      @send-button="sendBtnText"
    />
    <button
      class="float-right cursor-pointer"
      aria-label="Send message"
      @click="sendText"
      @focus="onSendBtnFocus"
      @blur="checkSendBtnActive"
    >
      <img
        class="focus:border-none"
        :src="icons[iconState]"
        alt="Send Image."
        aria-hidden="true"
      />
    </button>
  </div>
</template>
<script>
import icons from "../../assets/icons.js";

import ChatOptionButton from "./ChatOptionButton.vue";
import { ref } from "vue";

//let iconState = "SendInactive"

export default {
  name: "TextInput",
  props: {
    buttonOptions: Array,
  },
  components: {
    ChatOptionButton,
  },
  emits: ["add-message"],
  setup(_, context) {
    const text = ref("");
    const iconState = ref("SendInactive");

    function sendText() {
      if (this.text.length > 0) {
        context.emit("add-message", this.text);
        text.value = "";
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
      iconState.value = text.value === "" ? "SendInactive" : "SendActive";
    }
    return {
      text,
      icons,
      iconState,
      sendText,
      sendBtnText,
      onSendBtnFocus,
      checkSendBtnActive,
    };
  },
};
</script>
