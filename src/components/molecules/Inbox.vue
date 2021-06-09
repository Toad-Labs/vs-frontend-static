<template>
  <h1 class="text-4xl">Inbox</h1>
  <inbox-item />
  <inbox-item dayRead="Weds" selected='true' />
  <inbox-item dayRead="Weds" />
</template>

<script lang="ts">
import InboxItem from './InboxItem.vue';
export default ({

  setup() {
    return {
    };
  },
  components: {
    InboxItem
  },
});
</script>
