<template>
  <h1 class="font-heading font-bold text-4xl pl-3 pt-6 pb-2">Inbox</h1>
  <div
    v-if="inboxItems.length === 0"
    class="md:overflow-auto space-y-1"
    role="list"
  >
    <inbox-item :inboxItem="{}" />
    <inbox-item :inboxItem="{}" />
  </div>
  <div v-else class="md:overflow-auto space-y-1" role="list">
    <inbox-item
      v-for="inboxItem in inboxItems"
      :key="inboxItem.id"
      :inboxItem="inboxItem"
      @select-inbox-item="selectInboxItem"
    />
  </div>
</template>

<script lang="ts">
import InboxItem from "./InboxItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const inboxItems = computed(() => store.getters["inbox/getInboxItems"]);
    function selectInboxItem(index) {
      store.dispatch("inbox/selectInboxItem", index);
    }
    return {
      inboxItems,
      selectInboxItem,
    };
  },
  components: {
    InboxItem,
  },
};
</script>
