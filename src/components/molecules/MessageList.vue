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

  <!-- How the messages might be implemented later: an array prop with message objects iterated over to create a list of MessageCards
<div class="flex flex-col h-96 bg-gray-light p-6 space-y-6 overflow-auto"> 
    <div class="bg-white p-6 space-y-3" v:for="msg of messages">
        <span class="uppercase text-sm font-light">{{ msg.timestamp }}</span>
        <h1 class="text-2xl font-semibold">{{ msg.title }}</h1>
        <p class="font-normal text-lg">{{ msg.paragraphs }}</p>
    </div>
</div> -->
</template>

<script>
import MessageCard from "./MessageCard.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  //  not 100% sure how to implemnet prop passing
  //  props: {
  //     messages: Array, //should be an array of objects with a timestamp, a header, and a paragraph
  // },
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
