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
        ref="conversationWindow"
        class="
          w-full
          space-y-2 space-y-reverse
          overflow-auto
          flex flex-col-reverse
          font-body
          text-gray-dark
          py-2
          pr-2
        "
        tabindex="0"
      >
        <ConversationMessage
          v-for="message in chatMessage.messages"
          :key="message.id"
          :isUser="message.isUser"
          :text="message.text"
        />
        <p class="text-center font-heading text-sm font-light text-gray-dark">
          WEDS 10:04 AM
        </p>
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
import { computed, onMounted, ref } from "vue";
import icons from "../../assets/icons.js";
export default {
  name: "ConversationWindow",
  components: {
    ConversationMessage,
    MessageHeader,
    TextInput,
  },
  setup() {
    const conversationWindow = ref(null);
    const store = useStore();
    const selectedInboxItemId = store.getters["inbox/getSelectedInboxItem"].id;
    store.dispatch("chatMessages/markChatRead", selectedInboxItemId);
    const chatMessage = computed(() =>
      store.getters["chatMessages/getChatMessageByIdOrderedByMessagesDate"](
        selectedInboxItemId
      )
    );

    onMounted(() => {
      scrollToBottomOfMessages();
    });

    function sendChatMessage(msg) {
      const newMessage = {
        id: chatMessage.value.id,
        message: msg,
      };
      store.dispatch("chatMessages/sendChatMessage", newMessage);
      scrollToBottomOfMessages();
    }

    function scrollToBottomOfMessages() {
      conversationWindow.value.children[0].scrollIntoView(false);
      console.log("attempted scroll");
    }

    return {
      conversationWindow,
      chatMessage,
      sendChatMessage,
      icons,
    };
  },
};
</script>
<style scoped></style>
