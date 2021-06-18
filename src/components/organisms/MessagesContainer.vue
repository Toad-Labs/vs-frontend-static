<template>
  <div class="flex md:h-screen">
    <div
      class="
        w-full
        sm:w-2/5
        md:w-1/3
        sm:max-w-sm sm:border sm:border-r-0 sm:border-gray
        flex flex-col flex-shrink-0
        px-1
      "
    >
      <inbox />
    </div>
    <!-- Conversation Window -->
    <div
      :class="[
        isMobileDrawerOpen ? '' : 'hidden',
        'bg-white w-screen h-screen absolute sm:relative top-0 left-0 sm:flex-auto sm:block sm:border sm:border-gray sm:h-full',
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
