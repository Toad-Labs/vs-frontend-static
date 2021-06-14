<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex border-b border-gray-infomd p-2">
      <img
        src="../../assets/UserAccount/VirtualConcierge.svg"
        alt="Bot Image."
        class="h-9 mt-auto w-10"
      />
      <span class="font-bold pt-2 pl-2">Virtual Concierge</span>
    </div>
    <div class="flex h-full overflow-auto">
      <img
        src="../../assets/UserAccount/VirtualConcierge.svg"
        alt="Bot Image."
        class="h-6 mt-auto w-10 mb-3"
      />
      <div class="w-full pr-6 overflow-auto flex flex-col-reverse">
        <ConversationMessage
          v-for="(message, index) in chatbotConvo"
          :key="index"
          :isUser="message.isUser"
          :text="message.text"
        />
        <p class="text-center font-light text-gray-dark">WEDS 10:04 AM</p>
      </div>
    </div>
    <!-- The logic on how the buttonOptions are passed as props will 
                 depend on how we get the possible answers from VC. -->
    <TextInput :buttonOptions="['Yes', 'No']" @add-message="sendMessage"/>
  </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import TextInput from "../atoms/TextInput.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "ConversationWindow",
  components: {
    ConversationMessage,
    TextInput,
  },
  setup() {
    const store = useStore();
    function sendMessage(msg) {
      const newMessage = {isUser: true, text: msg}
      store.dispatch("sendMessage", newMessage);
    }
  return{
    chatbotConvo: computed(() => store.state.messages.chatbot),
    sendMessage
  }
  }
};
</script>
<style scoped></style>
