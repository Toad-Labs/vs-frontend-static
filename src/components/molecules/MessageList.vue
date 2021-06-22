<template>
  <div class="w-full h-full flex flex-col">
    <message-header
      backIcon="Back"
      :imageName="mailObject.senderIcon"
      :altText="mailObject.senderIconAltText"
      :headerText="mailObject.senderName"
    />
    <div
      class="flex bg-gray-infolt flex-col p-6 space-y-6 overflow-auto"
      tabindex="0"
    >
      <message-card
        v-for="email of mailObject.emails"
        :key="email.id"
        :timestamp="createTimestamp(email.receivedTime)"
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
import icons from "../../assets/icons.js";

export default {
  components: {
    MessageCard,
    MessageHeader,
  },
  setup() {
    const store = useStore();
    const selectedInboxItemId = store.getters["inbox/getSelectedInboxItem"].id;
    const mailObject = computed(() =>
      store.getters["emails/getMailObjectEmailsOrderByDateAsc"](
        selectedInboxItemId
      )
    );
    //creates a timestamp with js's default date methods
    const createTimestamp = (dateString) => {
      const date = new Date(dateString);
      const dateArr = date.toString().split(" ");
      return (
        dateArr[0] +
        ", " +
        dateArr[1] +
        " " +
        dateArr[2] +
        ", " +
        date.toTimeString().slice(0, 5)
      );
    };
    return {
      mailObject,
      createTimestamp,
      icons,
    };
  },
};
</script>
