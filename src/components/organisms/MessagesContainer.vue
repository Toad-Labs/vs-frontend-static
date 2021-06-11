<template>
  <div class="flex">
    <div class="w-full md:w-1/3 md:border md:border-r-0 md:border-gray">
      <inbox />
    </div>
    <div class="flex-auto hidden md:block md:border md:border-gray">
      <message-header headerText="Jerry S. (Do not reply)" imageName="logo.png" imagePath="" />
      <ConversationWindow />
    </div>
  </div>
</template>

<script lang="ts">

import Inbox from '../molecules/Inbox.vue';
import ConversationWindow from "./ConversationWindow.vue";
import MessageHeader from "../atoms/MessageHeader.vue";

export default ({
  components: {
    ConversationWindow,
    MessageHeader,
    Inbox,
  },
  setup() {
    return {
    };
  },
});
</script>