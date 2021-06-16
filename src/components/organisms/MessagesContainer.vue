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
    <!-- <div
      :class="[
        drawerOpen ? '' : 'hidden',
        'bg-white w-screen h-screen absolute md:relative top-0 left-0 md:flex-auto md:block md:border md:border-gray md:h-full',
      ]"
    >
      <ConversationWindow />
    </div> -->
    <!-- Message List -->
    <div class="flex-auto hidden md:block md:border md:border-gray">
      <message-list />
    </div>
  </div>
</template>

<script lang="ts">
import Inbox from "../molecules/Inbox.vue";
import ConversationWindow from "./ConversationWindow.vue";
import MessageList from "../molecules/MessageList.vue";

export default {
  props: {
    drawerOpen: Boolean,
  },
  components: {
    ConversationWindow,
    MessageList,
    Inbox,
  },
};
</script>
