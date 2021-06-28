<template>
  <input
    type="text"
    placeholder="Write something..."
    class="w-auto border-t border-b border-gray-200 p-3 bg-clip-padding"
    v-model="text"
    aria-label="Send message"
    @keyup.enter="sendText"
  />
  <div class="w-auto bg-gray-infolt text-gray-dark mb-6 sm:mb-0">
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
    >
      <img
        src="../../assets/Send/Active/Default.svg"
        alt="Send Image."
        aria-hidden="true"
      />
    </button>
  </div>
</template>
<script>
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
  emits: ["add-message"],
  setup(_, context) {
    const text = ref("");
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
    return {
      text,
      sendText,
      sendBtnText,
    };
  },
};
</script>
