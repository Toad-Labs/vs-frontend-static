<template>
  <div class="home">
    <messages-container />
  </div>
</template>

<script>
import MessagesContainer from "../components/organisms/MessagesContainer.vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: {
    MessagesContainer,
  },
  setup() {
    // Use the store
    const store = useStore();
    // Initialize the chat messages
    store.dispatch("chatMessages/initializeChatMessages");
    store.dispatch("emails/initializeMailObject");
  },
};
</script>
