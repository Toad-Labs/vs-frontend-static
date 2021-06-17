<template>
  <h1 class="font-heading font-bold text-4xl pl-3 pt-4">Inbox</h1>
  <div class="md:overflow-auto space-y-1">
    <inbox-item
      tabindex="0"
      :senderName="'Virtual Concierge'"
      :bodyText="'Hi Mary, I am your virtual concierge and I am a robot'"
      imageName="VC"
    />
    <inbox-item
      tabindex="0"
      dayRead="Weds"
      :selected="true"
      :senderName="'Job Bank'"
      :bodyText="'Your Employment Insurance Concierge'"
      imageName="Mail"
    />
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
