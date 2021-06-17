<template>
  <div class="flex md:h-vh-1/2">
    <div
      class="
        w-full
        md:w-1/3 md:max-w-sm md:border md:border-r-0 md:border-gray
        flex flex-col flex-shrink-0
      "
    >
      <inbox />
    </div>
    <!-- Conversation Window -->
    <div
      :class="[
        isMobileDrawerOpen ? '' : 'hidden',
        'bg-white w-screen h-screen absolute md:relative top-0 left-0 md:flex-auto md:block md:border md:border-gray md:h-full',
      ]"
    >
      <ConversationWindow v-if="inboxItemType === 'chat'" />
      <message-list v-else-if="inboxItemType === 'email'" />
    </div>
  </div>
</template>

<script>
import Inbox from "../molecules/Inbox.vue";
import ConversationWindow from "./ConversationWindow.vue";
import MessageList from "../molecules/MessageList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    drawerOpen: Boolean,
  },
  components: {
    ConversationWindow,
    MessageList,
    Inbox,
  },
  setup() {
    const store = useStore();
    const inboxItemType = computed(
      () => store.getters["inbox/getSelectedInboxItemType"]
    );
    const isMobileDrawerOpen = computed(
      () => store.getters["inbox/isMobileDrawerOpen"]
    );
    return {
      inboxItemType,
      isMobileDrawerOpen,
    };
  },
};
</script>
