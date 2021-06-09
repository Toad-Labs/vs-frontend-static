<template>
  <div class="flex">
    <div class="w-full md:w-1/3 md:border md:border-r-0 md:border-gray">
      <inbox />
    </div>
    <div class="flex-auto hidden md:block md:border md:border-gray">Conversational Area</div>
  </div>
</template>

<script lang="ts">
import Inbox from '../molecules/Inbox.vue';
export default ({

  setup() {
    return {
    };
  },
  components: {
    Inbox
  },
});
</script>