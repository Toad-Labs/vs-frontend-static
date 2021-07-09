<template>
  <div
    class="w-full h-full flex flex-col p-4 sm:p-0 text-gray-dark sm:relative"
  >
    <div class="sticky top-0 opacity-95 bg-white md:opacity-100">
      <message-header
        backIcon="Back"
        :imageName="chatMessage.senderIcon"
        :altText="chatMessage.senderIconAltText"
        :headerText="chatMessage.senderName"
      />
    </div>
    <div class="flex h-full overflow-auto">
      <img
        :src="icons[chatMessage.senderIcon]"
        :alt="chatMessage.senderIconAltText"
        class="h-6 mt-auto w-8 mb-3"
      />
      <div
        ref="chatWindow"
        id="chatWindow"
        class="
          w-full
          space-y-2 space-y-reverse
          overflow-auto
          flex flex-col
          font-body
          text-gray-dark
          py-2
          pr-2
        "
        tabindex="0"
        aria-label="Press enter to begin navigating through the messages, and use the up and down arrow keys to navigate between each message. Press escape to exit thereafter."
        @keyup.enter="accessIndividualMessages"
      >
        <p class="text-center font-heading text-sm font-light text-gray-dark">
          WEDS 10:04 AM
        </p>
        <ConversationMessage
          v-for="message in chatMessage.messages"
          @return-to-chat-window="returnToChatWindow"
          @focusout="checkFocusingOutsideWindow($event)"
          :tabindex="tabbable"
          :key="message.id"
          :isUser="message.isUser"
          :senderName="chatMessage.senderName"
          :text="message.text"
        />
      </div>
    </div>
    <div class="sticky bottom-0">
      <!-- The logic on how the buttonOptions are passed as props will
                   depend on how we get the possible answers from VC. -->
      <TextInput
        :buttonOptions="['Yes', 'No']"
        @add-message="sendChatMessage"
      />
    </div>
    <!-- padding at the bottom of the screen on mobile -->
    <span class="bg-gray-infolt p-2 sm:p-0"></span>
  </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import TextInput from "../atoms/TextInput.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import icons from "../../assets/icons.js";
export default {
  name: "ConversationWindow",
  components: {
    ConversationMessage,
    MessageHeader,
    TextInput,
  },
  setup() {
    const chatWindow = ref(null);
    const tabbable = ref(-1);

    const store = useStore();
    const selectedInboxItemId = store.getters["inbox/getSelectedInboxItem"].id;
    store.dispatch("chatMessages/markChatRead", selectedInboxItemId);
    const chatMessage = computed(() =>
      store.getters["chatMessages/getChatMessageByIdOrderedByMessagesDate"](
        selectedInboxItemId
      )
    );

    function sendChatMessage(msg) {
      const newMessage = {
        id: chatMessage.value.id,
        message: msg,
      };
      store.dispatch("chatMessages/sendChatMessage", newMessage);
    }

    function accessIndividualMessages() {
      tabbable.value = 0; //enable focusing on chat messages
      chatWindow.value.children[1].focus(); //focus on first message
    }

    function returnToChatWindow() {
      chatWindow.value.focus(); // focus on main window
      tabbable.value = -1; //disable focusing on chat messages
    }

    function checkFocusingOutsideWindow(event) {
      //checks if the element that is about to be tabbed to is an input element or has a label (none of the messages do)
      //effectively just checks if it's tabbing out of the chat window, in which case it returns to the window
      if (
        event.relatedTarget.tagName === "INPUT" ||
        event.relatedTarget.id === chatWindow.value.id
      ) {
        returnToChatWindow();
      }
    }

    return {
      chatMessage,
      sendChatMessage,
      accessIndividualMessages,
      checkFocusingOutsideWindow,
      returnToChatWindow,
      tabbable,
      icons,
      chatWindow,
    };
  },
};
</script>
<style scoped></style>
