<template>
  <input
    ref="input"
    type="text"
    placeholder="Write something..."
    :class="
      'w-full border-t border-b border-gray-200 p-3 bg-clip-padding ' +
      inputFocusClass
    "
    v-model="text"
    aria-label="Send message"
    @focus="changeInputFocusStyles($event, ' ')"
    @mousedown="changeInputFocusStyles($event, ' focus:outline-none')"
    @keyup.enter="sendText"
    @input="checkSendBtnActive"
  />
  <div class="flex flex-row bg-gray-infolt text-gray-dark">
    <!-- quick reply options -->
    <div :class="['w-full', moreQuickRepliesDisplay]">
      <chat-option-button
        v-for="(option, index) in buttonOptions"
        :key="index"
        :text="option"
        @send-button="sendBtnText"
      />
      <chat-option-button
        :extraClasses="lessButtonStyles"
        @send-button="showMoreOrLessOptions(false)"
        :text="'Less...'"
      />
    </div>
    <!-- more/less quick reply options + send button  -->
    <div class="relative flex w-auto min-w-12 flex-shrink-0">
      <chat-option-button
        :extraClasses="'mr-12 ' + moreButtonStyles"
        @send-button="showMoreOrLessOptions(true)"
        :text="'More...'"
      />
      <button
        class="cursor-pointer absolute right-0 top-0"
        aria-label="Send message"
        :tabindex="sendMsgBtnTabIndex"
        @click="sendText"
        @focus="onSendBtnFocus"
        @mouseover="onSendBtnFocus"
        @mouseleave="checkSendBtnActive"
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
  </div>
</template>
<script>
import icons from "../../assets/icons.js";

import ChatOptionButton from "./ChatOptionButton.vue";
import { computed, ref } from "vue";

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
    const inputFocusClass = ref("");
    const text = ref("");
    const sendMsgBtnTabIndex = ref(-1); //should be inactive as there's no input text at the start
    const iconState = ref("SendInactive");
    const moreShown = ref(false);

    const moreButtonStyles = computed(() => (moreShown.value ? "hidden" : ""));
    const lessButtonStyles = computed(() => (moreShown.value ? "" : "hidden"));
    const moreQuickRepliesDisplay = computed(() =>
      moreShown.value ? "" : "h-12 overflow-hidden"
    );

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

    function changeInputFocusStyles(event, focusClass) {
      if (event.type === "mousedown") {
        event.preventDefault();
        event.target.focus();
      }
      inputFocusClass.value = focusClass;
    }

    function checkSendBtnActive() {
      let textEmpty = text.value === "";
      sendMsgBtnTabIndex.value = textEmpty ? -1 : 0; //the send button will be untabbable if there's no text
      iconState.value = textEmpty ? "SendInactive" : "SendActive";
    }

    function showMoreOrLessOptions(showingMore) {
      moreShown.value = showingMore;
    }

    return {
      sendMsgBtnTabIndex,
      input,
      text,
      icons,
      iconState,
      sendText,
      sendBtnText,
      onSendBtnFocus,
      checkSendBtnActive,
      changeInputFocusStyles,
      inputFocusClass,
      moreShown,
      showMoreOrLessOptions,
      moreButtonStyles,
      lessButtonStyles,
      moreQuickRepliesDisplay,
    };
  },
};
</script>
