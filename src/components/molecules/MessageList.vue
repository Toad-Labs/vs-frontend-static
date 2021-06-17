<template>
  <div class="w-full h-full flex flex-col">
    <message-header imageName="Mail" altText="Mail" headerText="Job Bank" />

    <div class="flex bg-gray-infolt flex-col p-6 space-y-6 overflow-auto">
      <message-card
        v-for="email of emails"
        :key="email.emailId"
        :timestamp="email.receivedTime.toDateString()"
        :title="email.messageTitle"
        :paragraphs="email.messageBody"
      />
    </div>
  </div>
</template>

<script>
import MessageCard from "./MessageCard.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    MessageCard,
    MessageHeader,
  },
  setup() {
    const store = useStore();
    const emails = computed(
      () => store.getters["emails/getEmailsMostRecentFirst"]
    );

    return {
      emails,
    };
  },
};
</script>
