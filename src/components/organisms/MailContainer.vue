<template>
  <div class="flex">
    <div class="w-full md:w-1/3 md:flex-shrink-0 md:border md:border-r-0 md:border-gray">
      <inbox />
    </div>
    <div class="flex-auto hidden md:block md:border md:border-gray">
      <message-header
        imagePath="UserAccount/"
        imageName="Mail.svg"
        altText="Mail"
        headerText="Job Bank"
      />
      <message-list />
    </div>
  </div>
</template>

<script lang="ts">
import Inbox from "../molecules/Inbox.vue";
import MessageList from "../molecules/MessageList.vue";
import MessageHeader from "../atoms/MessageHeader.vue";

export default {
  components: {
    MessageList,
    MessageHeader,
    Inbox,
  },
  setup() {
    return {};
  },
};
</script>