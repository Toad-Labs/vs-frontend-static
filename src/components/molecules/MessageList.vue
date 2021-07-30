<template>
  <FocusTrap
    ref="focusTrap"
    :active="isMobileDrawerOpen"
    :initial-focus="focusOnMessageHeader"
    :clickOutsideDeactivates="true"
    :returnFocusOnDeactivate="true"
  >
    <div
      :class="[
        'w-full h-full flex-col sm:flex',
        isMobileDrawerOpen ? 'flex' : 'hidden',
      ]"
      :aria-modal="isMobileDrawerOpen"
    >
      <message-header
        :imageName="mailObject.senderIcon"
        :altText="mailObject.senderIconAltText"
        :headerText="mailObject.senderName"
        @exit-drawer="() => $refs.focusTrap.deactivate()"
      />
      <ul
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
      </ul>
    </div>
  </FocusTrap>
</template>

<script>
import MessageCard from "./MessageCard.vue";
import MessageHeader from "../atoms/MessageHeader.vue";
import { FocusTrap } from "focus-trap-vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import icons from "../../assets/icons.js";
import { i18n } from "./../../../i18n";

export default {
  components: {
    MessageCard,
    MessageHeader,
    FocusTrap,
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
    const isMobileDrawerOpen = computed(
      () => store.getters["inbox/isMobileDrawerOpen"]
    );

    const focusOnMessageHeader = () => {
      return document.getElementById(mailObject.value.senderName);
    };

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
      createTimestamp,
      icons,
      isMobileDrawerOpen,
      focusOnMessageHeader,
    };
  },
};
</script>
