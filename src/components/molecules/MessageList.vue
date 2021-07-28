<template>
  <div class="w-full h-full flex flex-col">
    <message-header
      backIcon="Back"
      :imageName="mailObject.senderIcon"
      :altText="mailObject.senderIconAltText"
      :headerText="mailObject.senderName"
    />
    <ul
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
    </ul>
  </div>
</template>

<script>
import MessageCard from "./MessageCard.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { computed } from "vue";
import icons from "../../assets/icons.js";
import { i18n } from "./../../../i18n";

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
    const createTimestamp = (dateString) => {
      return new Date(dateString).toLocaleDateString(i18n.global.locale.value, {
        weekday: "short",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    return {
      mailObject,
      createTimestamps,
      icons,
    };
  },
};
</script>
