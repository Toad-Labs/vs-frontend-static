<template>
  <!-- skip nav component -->
  <the-skip-nav />
  <!-- The header component -->
  <the-header />
  <!-- Page content -->
  <div class="w-full sm:p-3 sm:pb-0">
    <main>
      <div class="home px-0.5 sm:mx-auto sm:container">
        <messages-container />
      </div>
      <feedback-button
        colorClass="bg-blue-primary text-white"
        text="Provide Feedback"
      />
    </main>
  </div>
  <!-- The footer component -->
  <the-footer />
</template>

<script>
import MessagesContainer from "../components/organisms/MessagesContainer.vue";
import { useStore } from "vuex";
import TheHeader from "../components/molecules/TheHeader.vue";
import TheFooter from "../components/molecules/TheFooter.vue";
import TheSkipNav from "../components/molecules/TheSkipNav.vue";
import FeedbackButton from "../components/atoms/FeedbackButton.vue";

export default {
  name: "Home",
  components: {
    MessagesContainer,
    TheHeader,
    TheFooter,
    TheSkipNav,
    FeedbackButton,
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
