<template>
  <div class="flex">
    <div class="w-full md:w-1/3 md:border md:border-r-0 md:border-gray">
      <inbox />
    </div>
    <div class="flex-auto hidden md:block md:border md:border-gray">
      <ConversationWindow />
    </div>
  </div>
</template>

<script lang="ts">

import Inbox from '../molecules/Inbox.vue';
import ConversationWindow from "./ConversationWindow.vue";

export default ({
  components: {
    ConversationWindow,
    Inbox,
  },
  setup() {
    return {
    };
  },
});
</script>