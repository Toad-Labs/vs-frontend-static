<template>
  <h1 class="font-heading text-4xl p-2">Inbox</h1>
  <inbox-item tabindex="0" icon="V" />
  <inbox-item tabindex="0" dayRead="Weds" selected='true' icon="K" />
  <inbox-item tabindex="0" dayRead="Weds" icon="J" />
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
