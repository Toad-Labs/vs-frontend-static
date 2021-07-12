<template>
  <!-- Loading State -->
  <span v-if="!inboxLoaded">
    <div class="px-3 pt-6 pb-3">
      <div class="bg-gray-infolt h-10 w-2/3 animate-pulse"></div>
    </div>
    <div class="md:overflow-auto space-y-1" role="list">
      <!-- Empty inbox items -->
      <inbox-item :inboxItem="{}" />
      <inbox-item :inboxItem="{}" />
    </div>
  </span>
  <!-- Loaded State -->
  <span v-else>
    <h1
      id="inbox-header"
      class="font-heading font-bold text-4xl px-3 pt-6 pb-3"
      @blur="$event.target.tabIndex = -1"
    >
      Inbox
    </h1>
    <div class="md:overflow-auto space-y-1" role="list">
      <inbox-item
        v-for="inboxItem in inboxItems"
        :key="inboxItem.id"
        :inboxItem="inboxItem"
        @select-inbox-item="selectInboxItem"
      />
    </div>
  </span>
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
