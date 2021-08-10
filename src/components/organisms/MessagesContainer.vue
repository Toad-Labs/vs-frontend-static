<template>
  <div class="flex w-full md:h-vh-3/5 xl:h-vh-2/3 text-gray-dark">
    <div
      class="
        w-full
        sm:w-2/5 sm:h-vh-3/5
        md:w-1/3
        xl:h-vh-2/3
        sm:max-w-sm sm:border sm:border-r-0 sm:border-gray
        flex flex-col flex-shrink-0
        sm:px-1
        md:px-0
      "
    >
      <inbox />
    </div>
    <!-- Conversation Window -->
    <div
      :class="[
        isMobileDrawerOpen ? 'left-0' : 'left-full',
        'inbox-transition fixed bg-white top-0 bottom-0 w-screen sm:left-0 sm:min-h-0 sm:h-vh-3/5 sm:relative sm:flex-auto sm:block sm:border sm:border-gray xl:h-vh-2/3',
      ]"
    >
      <ConversationWindow v-if="inboxItemType === 'chat'" />
      <message-list v-else-if="inboxItemType === 'email'" />
      <!-- Default to empty window if no item is selected/while loading -->
      <div
        v-else
        class="
          w-full
          h-full
          flex flex-col
          p-4
          sm:p-0
          text-gray-dark
          sm:relative
        "
      >
        <div class="sticky top-0 opacity-95 bg-white md:opacity-100">
          <div class="flex border-b border-gray-200 px-2 py-4">
            <div
              class="
                h-10
                mt-auto
                w-10
                bg-gray-infolt
                rounded-full
                animate-pulse
              "
            />
            <div class="h-10 py-2 pl-2 w-1/3">
              <div class="bg-gray-infolt h-full animate-pulse" />
            </div>
          </div>
        </div>
        <div class="flex h-full overflow-auto"></div>
        <div class="sticky bottom-0 h-20 border-t" />
        <span class="bg-gray-infolt p-2 sm:p-0 h-20"></span>
      </div>
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

<style scoped>
.inbox-transition {
  transition: 0.5s;
}
</style>
