<template>
  <h1 class="font-heading text-4xl p-2">Inbox</h1>
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
