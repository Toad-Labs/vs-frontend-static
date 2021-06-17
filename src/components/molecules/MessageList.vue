<template>
  <div class="w-full h-full flex flex-col">
    <message-header
      backIcon="Back"
      imageName="Mail"
      altText="Mail"
      headerText="Job Bank"
    />
    <div class="flex bg-gray-infolt flex-col p-6 space-y-6 overflow-auto">
      <message-card
        timestamp="Weds, May 14th, 10:04 am"
        title="Your Employment Insurance Claim - You've been subscribed to Job Alerts"
        :paragraphs="`You are receiving this email because you recently completed an application for Employment Insurance. When you filed your claim, you agreed to be actively looking for work. To help you with your job search, we’ve subscribed you to Job Alerts.

Thank you,

Job Bank`"
      />
      <!--  Note that multiple message cards can be added into this component. If you want to view yourself, you can copy-paste the above -->
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

export default {
  //  not 100% sure how to implemnet prop passing
  //  props: {
  //     messages: Array, //should be an array of objects with a timestamp, a header, and a paragraph
  // },
  components: {
    MessageCard,
    MessageHeader,
  },
  setup() {},
};
</script>
