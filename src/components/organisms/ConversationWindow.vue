<template>
  <div
    :class="[
      'w-full h-full flex-col text-gray-dark sm:relative sm:flex',
      isMobileDrawerOpen ? 'flex' : 'hidden',
    ]"
  >
    <div class="w-full opacity-95 z-10 bg-white sm:opacity-100">
      <message-header
        :imageName="chatMessage.senderIcon"
        :altText="chatMessage.senderIconAltText"
        :headerText="chatMessage.senderName"
      />
    </div>
    <div class="flex h-full overflow-auto">
      <ul
        ref="conversationWindow"
        id="conversationWindow"
        class="
          w-full
          space-y-2
          overflow-y-auto
          flex flex-col
          font-body
          text-gray-dark
          py-2
          pr-2
        "
        tabindex="0"
        :aria-label="$t('conversationWindowDesc')"
        @keyup.exact.enter="accessIndividualMessages(0)"
        @keyup.shift.enter="accessIndividualMessages(-1)"
        aria-live="polite"
      >
        <li>
          <p class="text-center font-heading text-sm font-light text-gray-dark">
            {{ $t("messageTime") }}
          </p>
        </li>
        <ConversationMessage
          v-for="(message, index) in chatMessage.messages"
          @return-to-chat-window="returnToConversationWindow"
          @focusout="checkFocusingOutsideWindow($event)"
          :tabindex="tabbable"
          :key="message.id"
          :isUser="message.isUser"
          :senderName="chatMessage.senderName"
          :text="message.text"
          :senderIcon="chatMessage.senderIcon"
          :senderIconAltText="chatMessage.senderIconAltText"
          :isLastMessage="index === chatMessage.messages.length - 1"
        />
        <ConversationFooter
          :tabindex="tabbable"
          @focusout="checkFocusingOutsideWindow($event)"
          @return-to-chat-window="returnToConversationWindow"
          @exit-to-input="focusOnInput"
        />
      </ul>
    </div>
    <div class="w-full">
      <!-- The logic on how the buttonOptions are passed as props will
                   depend on how we get the possible answers from VA. -->
      <TextInput
        :buttonOptions="suggestedActions"
        @reset-chat-window="resetConversationWindow"
        @add-message="sendChatMessage"
        @move-to-most-recent-message="accessIndividualMessages(-1)"
      />
    </div>
    <!-- padding at the bottom of the screen on mobile -->
    <span class="bg-gray-infolt p-2 sm:p-0"></span>
  </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import ConversationFooter from "../atoms/ConversationFooter.vue";
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
    ConversationFooter,
  },
  setup() {
    const conversationWindow = ref(null);
    const tabbable = ref(-1);

    const store = useStore();
    const selectedInboxItemId = store.getters["inbox/getSelectedInboxItem"].id;
    store.dispatch("chatMessages/markChatRead", selectedInboxItemId);
    const chatMessage = computed(() =>
      store.getters["chatMessages/getChatMessageByIdOrderedByMessagesDate"](
        selectedInboxItemId
      )
    );
    const isMobileDrawerOpen = computed(
      () => store.getters["inbox/isMobileDrawerOpen"]
    );
    const suggestedActions = computed(() => {
      const messages = chatMessage.value.messages;
      const noMessages = messages.length === 0;
      return noMessages
        ? null
        : messages[messages.length - 1].suggestedActions?.actions;
    });

    function sendChatMessage(msg) {
      const newMessage = {
        id: chatMessage.value.id,
        message: msg,
      };
      store.dispatch("chatMessages/sendChatMessage", newMessage);
    }

    function accessIndividualMessages(start) {
      //start = 0 for seeing the first message (children[1]), -1 for the last
      let chatMessages = conversationWindow.value.children;
      let index = start === 0 ? 1 : chatMessages.length - 2;
      tabbable.value = 0; //enable focusing on chat messages
      chatMessages[index].focus(); //focus on chosen  message
    }

    function returnToConversationWindow() {
      conversationWindow.value.focus(); // focus on main window
      tabbable.value = -1; //disable focusing on chat messages
    }

    function checkFocusingOutsideWindow(event) {
      //checks if the element that is about to be tabbed to has the chat window id
      //in which case it returns to the window (basically returns if it's tabbing out of the chat window)
      //it can, however, return to the input
      if (event.relatedTarget?.id === conversationWindow.value.id) {
        returnToConversationWindow();
      } else {
        //if the user clicks away from the messages, reset their tabindex
        tabbable.value = -1;
      }
    }

    function focusOnInput() {
      document.getElementById("send-message-input").focus();
    }

    function resetConversationWindow() {
      tabbable.value = -1;
    }

    return {
      chatMessage,
      sendChatMessage,
      accessIndividualMessages,
      checkFocusingOutsideWindow,
      returnToConversationWindow,
      tabbable,
      isMobileDrawerOpen,
      icons,
      suggestedActions,
      conversationWindow,
      focusOnInput,
      resetConversationWindow,
    };
  },
};
</script>
<style scoped>
#conversationWindow > :first-child {
  margin-top: auto !important;
}
</style>
