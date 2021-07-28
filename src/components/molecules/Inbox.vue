<template>
  <!-- Loading State -->
  <span v-if="!inboxLoaded">
    <div class="px-3 pt-6 pb-3">
      <div class="bg-gray-infolt h-10 w-2/3 animate-pulse"></div>
    </div>
    <div class="sm:overflow-auto space-y-1" role="list">
      <!-- Empty inbox items -->
      <inbox-item :inboxItem="{}" />
      <inbox-item :inboxItem="{}" />
    </div>
  </span>
  <!-- Loaded State -->
  <div v-else class="w-full sm:h-vh-3/5 xl:h-vh-2/3 flex flex-col">
    <span :id="'inboxHeaderDesc'" class="hidden">
      Inbox header, press tab or click to access inbox items
    </span>
    <h1
      id="inbox-header"
      :aria-labelledby="'inboxHeaderDesc'"
      class="font-heading font-bold text-4xl pl-3 pt-6 pb-3"
      @blur="$event.target.tabIndex = -1"
    >
      {{ $t("inbox") }}
    </h1>
    <ul class="sm:overflow-auto space-y-1" role="list">
      <inbox-item
        v-for="(inboxItem, index) in inboxItems"
        :key="inboxItem.id"
        :indexNum="index"
        :inboxItem="inboxItem"
        @select-inbox-item="selectInboxItem"
      />
    </ul>
  </div>
</template>

<script>
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
