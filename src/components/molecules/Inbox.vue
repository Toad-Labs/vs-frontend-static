<template>
  <div class="px-3 pt-6 pb-3">
    <div
      v-if="!inboxLoaded"
      class="bg-gray-infolt h-10 w-2/3 animate-pulse"
    ></div>
    <h1 v-else class="font-heading font-bold text-4xl">Inbox</h1>
  </div>
  <div v-if="!inboxLoaded" class="md:overflow-auto space-y-1" role="list">
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
    const inboxLoaded = computed(() => store.getters["inbox/isLoaded"]);
    function selectInboxItem(index) {
      store.dispatch("inbox/selectInboxItem", index);
    }
    return {
      inboxItems,
      selectInboxItem,
      inboxLoaded,
    };
  },
  components: {
    InboxItem,
  },
};
</script>
