<template>
  <h1 class="font-heading font-bold text-4xl pl-4 pt-4">Inbox</h1>
  <div class="md:overflow-auto">
    <inbox-item tabindex="0" icon="V" />
    <inbox-item tabindex="0" dayRead="Weds" selected="true" icon="K" />
    <inbox-item tabindex="0" dayRead="Thurs" icon="J" />
    <inbox-item tabindex="0" icon="N" />
    <inbox-item tabindex="0" icon="R" />
    <inbox-item tabindex="0" icon="D" />
    <inbox-item tabindex="0" icon="S" />
  </div>
</template>

<script lang="ts">
import InboxItem from "./InboxItem.vue";
export default {
  setup() {
    return {};
  },
  components: {
    InboxItem,
  },
};
</script>
