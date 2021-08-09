<template>
  <div
    :class="[
      'w-full h-full flex-col text-gray-dark sm:relative sm:flex',
      isMobileDrawerOpen ? 'flex' : 'hidden',
    ]"
  >
    <div class="sticky top-0 opacity-95 z-10 bg-white md:opacity-100">
      <message-header
        :imageName="chatMessage.senderIcon"
        :altText="chatMessage.senderIconAltText"
        :headerText="chatMessage.senderName"
      />
    </div>
    <div class="flex h-full overflow-auto">
      <ul
        class="
          w-full
          space-y-2
          overflow-auto
          flex flex-col
          font-body
          text-gray-dark
          py-2
          pr-2
        "
        ref="conversationWindow"
        id="conversationWindow"
        tabindex="0"
      >
        <li>
          <p class="text-center font-heading text-sm font-light text-gray-dark">
            {{ $t("messageTime") }}
          </p>
        </li>
        <ConversationMessage
          v-for="(message, index) in chatMessage.messages"
          :key="message.id"
          :isUser="message.isUser"
          :text="message.text"
          :senderIcon="chatMessage.senderIcon"
          :senderIconAltText="chatMessage.senderIconAltText"
          :isLastMessage="index === chatMessage.messages.length - 1"
        />
      </ul>
    </div>
    <div class="sticky bottom-0">
      <!-- The logic on how the buttonOptions are passed as props will
                   depend on how we get the possible answers from VA. -->
      <TextInput
        :buttonOptions="suggestedActions"
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
import { computed } from "vue";
import icons from "../../assets/icons.js";
export default {
  name: "ConversationWindow",
  components: {
    ConversationMessage,
    MessageHeader,
    TextInput,
  },
  setup() {
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

    function processSuggestedActions() {
      const replies = suggestedActions.value; //shorter name
      if (replies ?? true) return null;
      console.log(replies);
      console.log(replies[0]);
      return replies;
    }

    return {
      chatMessage,
      sendChatMessage,
      isMobileDrawerOpen,
      icons,
      suggestedActions,
      processSuggestedActions,
    };
  },
};
</script>
<style scoped>
#conversationWindow > :first-child {
  margin-top: auto !important;
}
</style>
