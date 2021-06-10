<template>
  <div class="flex">
    <div class="w-full md:w-1/3 md:border md:border-r-0 md:border-gray md:h-96">
      <div class="h-full md:overflow-auto">
        <inbox />
      </div>
    </div>
    <div :class='[drawerOpen? "": "hidden", "bg-white w-screen h-screen absolute md:relative top-0 left-0 md:flex-auto md:block md:border md:border-gray md:h-96"]'>
      <ConversationWindow />
    </div>
  </div>
</template>

<script lang="ts">

import Inbox from '../molecules/Inbox.vue';
import ConversationWindow from "./ConversationWindow.vue";

export default ({
  props: {  
    drawerOpen: Boolean,
  },
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