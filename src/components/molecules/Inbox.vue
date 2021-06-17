<template>
  <h1 class="font-heading font-bold text-4xl pl-3 pt-4">Inbox</h1>
  <div class="md:overflow-auto space-y-1">
    <inbox-item
      v-for="(inboxItema, index) in inboxItems"
      :key="index"
      tabindex="0"
      :inboxItem="inboxItema"
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
