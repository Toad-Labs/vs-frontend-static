<template>
  <div class="w-full h-full flex flex-col p-4 sm:p-0">
    <message-header
      backIcon="Back"
      imageName="VC"
      altText="Virtual Concierge"
      headerText="Virtual Concierge"
    />
    <div class="flex h-full overflow-auto">
      <img
        src="../../assets/UserAccount/VirtualConcierge.svg"
        alt="Bot Image."
        class="h-6 mt-auto w-10 mb-3"
      />
      <div class="w-full pr-6 overflow-auto flex flex-col-reverse" tabindex="0">
        <ConversationMessage
          v-for="message in chatbotConvo"
          :key="message.chatMessageId"
          :isUser="message.isUser"
          :text="message.text"
        />
        <p class="text-center font-light text-gray-dark">WEDS 10:04 AM</p>
      </div>
    </div>
    <!-- The logic on how the buttonOptions are passed as props will 
                 depend on how we get the possible answers from VC. -->
    <TextInput :buttonOptions="['Yes', 'No']" @add-message="sendMessage" />
  </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import TextInput from "../atoms/TextInput.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ConversationWindow",
  components: {
    ConversationMessage,
    MessageHeader,
    TextInput,
  },
  setup() {
    const store = useStore();
    const chatbotObject = computed(
      () => store.getters["chatMessages/getChatMessageObject"]
    );
    const chatbotConvo = computed(
      () => store.getters["chatMessages/getChatMessagesOrderedByDate"]
    );
    function sendMessage(msg) {
      const newMessage = {
        chatId: chatbotObject.value.chatId,
        isUser: true,
        text: msg,
      };
      store.dispatch("chatMessages/sendMessage", newMessage);
    }
    return {
      chatbotConvo,
      sendMessage,
    };
  },
};
</script>
<style scoped></style>
