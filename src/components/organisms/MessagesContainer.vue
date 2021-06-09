<template>
  <div class="flex">
    <div class="w-full md:w-1/4 md:border md:border-r-0 md:border-gray">Inbox</div>
    <div class="flex-auto hidden md:block md:border md:border-gray">
      <ConversationWindow />
</div>
  </div>
</template>

<script lang="ts">
import ConversationWindow from "./ConversationWindow.vue";
export default ({
  components: {
    ConversationWindow
  },
  setup() {
    return {
    };
  },

});
</script>