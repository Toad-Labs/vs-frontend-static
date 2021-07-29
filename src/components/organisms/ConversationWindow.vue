<template>
  <FocusTrap
    ref="focusTrap"
    v-model:active="isMobileDrawerOpen"
    :onPostActivate="focusOnMessageHeader"
    :clickOutsideDeactivates="true"
    :returnFocusOnDeactivate="false"
  >
    <div
      :class="[
        'w-full h-full flex-col text-gray-dark sm:relative',
        isMobileDrawerOpen ? 'flex' : 'hidden',
      ]"
    >
      <div
        class="sticky top-0 opacity-95 z-10 bg-white md:opacity-100"
        ref="messageHeader"
        tabindex="-1"
      >
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
            space-y-2 space-y-reverse
            overflow-auto
            flex flex-col-reverse
            font-body
            text-gray-dark
            py-2
            pr-2
          "
          ref="conversationWindow"
          id="conversationWindow"
          tabindex="0"
        >
          <ConversationMessage
            v-for="(message, index) in chatMessage.messages"
            :key="message.id"
            :isUser="message.isUser"
            :text="message.text"
            :senderIcon="chatMessage.senderIcon"
            :senderIconAltText="chatMessage.senderIconAltText"
            :isLastMessage="index === 0"
          />
          <li>
            <p
              class="text-center font-heading text-sm font-light text-gray-dark"
            >
              {{ $t("messageTime") }}
            </p>
          </li>
        </ul>
      </div>
      <div class="sticky bottom-0">
        <!-- The logic on how the buttonOptions are passed as props will
                     depend on how we get the possible answers from VA. -->
        <TextInput
          :buttonOptions="[$t('yes'), $t('no')]"
          @add-message="sendChatMessage"
        />
      </div>
      <!-- padding at the bottom of the screen on mobile -->
      <span class="bg-gray-infolt p-2 sm:p-0"></span>
    </div>
  </FocusTrap>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import TextInput from "../atoms/TextInput.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import icons from "../../assets/icons.js";
import { FocusTrap } from "focus-trap-vue";
export default {
  name: "ConversationWindow",
  components: {
    FocusTrap,
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
    const messageHeader = ref(null);

    const focusOnMessageHeader = () => {
      messageHeader.value?.focus();
    };

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
      isMobileDrawerOpen,
      focusOnMessageHeader,
      messageHeader,
    };
  },
};
</script>
<style scoped></style>
