<template>
  <div class="flex md:h-96">
    <div
      class="
        w-full
        md:w-1/3 md:border md:border-r-0 md:border-gray
        flex flex-col
      "
    >
      <inbox />
    </div>
    <div
      :class="[
        drawerOpen ? '' : 'hidden',
        'bg-white w-screen h-screen absolute md:relative top-0 left-0 md:flex-auto md:block md:border md:border-gray md:h-full',
      ]"
    >
      <ConversationWindow />
    </div>
  </div>
</template>

<script lang="ts">
import Inbox from "../molecules/Inbox.vue";
import ConversationWindow from "./ConversationWindow.vue";

export default {
  props: {
    drawerOpen: Boolean,
  },
  components: {
    ConversationWindow,
    Inbox,
  }
};
</script>
