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
        :timestamps="createTimestamps(email.receivedTime)"
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
    store.dispatch("emails/markEmailRead", selectedInboxItemId);
    const mailObject = computed(() =>
      store.getters["emails/getMailObjectEmailsOrderByDateAsc"](
        selectedInboxItemId
      )
    );
    //creates a timestamp with js's default date methods
    const createTimestamps = (dateString) => {
      const options = { weekday: "long", month: "long", day: "numeric" }; //returns "Weekday, Month Date" format in toLocaleDateString
      const date = new Date(dateString);
      const dateArr = date.toString().split(" ");

      //this is what's actually displayed
      const timestamp =
        dateArr[0] +
        ", " +
        dateArr[1] +
        " " +
        dateArr[2] +
        ", " +
        date.toTimeString().slice(0, 5);

      //this is what is read by screen readers
      //locale could be changed in the future for french compatibility
      const fullTimestamp =
        date.toLocaleDateString("en-CA", options) +
        ", at " +
        date.toTimeString().slice(0, 5);
      return { timestamp: timestamp, fullTimestamp: fullTimestamp };
    };

    return {
      mailObject,
      createTimestamps,
      icons,
    };
  },
};
</script>
