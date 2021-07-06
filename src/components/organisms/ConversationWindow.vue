<template>
  <!-- start   -->
  <div
    class="
      w-full
      h-screen
      sm:h-full
      flex flex-col flex-1
      p-2
      sm:p-1
      text-gray-dark
      sm:overflow-auto sm:relative
      bg-pink-100
    "
  >
    <!-- start of scroll window-->
    <span class="bg-green-200 p-1 h-screen sm:h-full sm:relative">
      <div
        class="
          w-full
          h-full
          flex flex-col
          sm:overflow-auto
          p-1
          text-gray-dark
          sm:sticky
          top-0
          bg-blue-100
        "
      >
        <!-- the header -->

        <div class="sticky top-0 opacity-95 bg-yellow-100 md:opacity-100">
          <message-header
            backIcon="Back"
            :imageName="chatMessage.senderIcon"
            :altText="chatMessage.senderIconAltText"
            :headerText="chatMessage.senderName"
          />
        </div>
        <!-- the message window -->
        <div class="flex h-full sm:overflow-auto">
          <img
            :src="icons[chatMessage.senderIcon]"
            :alt="chatMessage.senderIconAltText"
            class="h-6 mt-auto w-8 mb-3"
          />
          <div
            class="
              w-full
              space-y-2 space-y-reverse
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
            <p
              class="text-center font-heading text-sm font-light text-gray-dark"
            >
              WEDS 10:04 AM
            </p>
          </div>
        </div>

        <!-- new div ends here -->
      </div>
    </span>
    <!-- end of scroll -->

    <!--  text input and yes no buttons-->

    <div class="sticky bottom-0 w-full">
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
  <!--  end of component-->
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

    function sendChatMessage(msg) {
      const newMessage = {
        id: chatMessage.value.id,
        message: msg,
      };
      store.dispatch("chatMessages/sendChatMessage", newMessage);
    }
    return {
      chatMessage,
      sendChatMessage,
      icons,
    };
  },
};
</script>
<style scoped></style>
