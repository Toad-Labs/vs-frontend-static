<template>
  <div
    @click="selectInboxItem"
    :class="[
      inboxItem.selected ? 'bg-blue-selected rounded-none' : '',
      'flex items-center w-full h-16 md:h-20 rounded focus:border-black hover:bg-gray-infolt cursor-pointer',
    ]"
  >
    <div class="p-1">
      <img
        class="w-12 h-12 md:w-12 md:h-12"
        :src="icons[inboxItem.senderIcon]"
        alt="Inbox icon"
        role="presentation"
        aria-hidden="true"
      />
    </div>
    <div class="flex-1 truncate">
      <p
        :class="[
          !inboxItem.dayRead ? 'font-bold' : '',
          'font-body md:text-lg truncate overflow-ellipsis text-gray-dark pl-1',
        ]"
      >
        {{ inboxItem.senderName }}
      </p>
      <p
        :class="[
          !inboxItem.dayRead ? 'font-body' : 'font-heading font-light',
          'text-sm md:text-lg truncate overflow-ellipsis text-gray-dark pl-1',
        ]"
      >
        {{ inboxItem.teaserText }}
      </p>
    </div>
    <div>
      <read-notification v-bind:dayRead="inboxItem.dayRead" />
    </div>
  </div>
</template>

<script lang="ts">
import icons from "../../assets/UserAccount/icons.js";
import ReadNotification from "../atoms/ReadNotification.vue";
export default {
  props: {
    inboxItem: Object,
  },
  setup(props, context) {
    function selectInboxItem() {
      context.emit("select-inbox-item", props.inboxItem.id);
    }
    return { selectInboxItem, icons };
  },
  components: {
    ReadNotification,
  },
};
</script>
