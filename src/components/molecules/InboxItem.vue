<template>
  <li
    role="listitem"
    tabindex="0"
    @click="selectInboxItem"
    @keyup.enter="selectInboxItem"
    :class="[
      inboxItem.selected ? 'focus:bg-blue-selected rounded-none' : '',
      inboxItem.id ? '' : 'bg-gray-infolt animate-pulse',
      'flex items-center w-full h-16 md:h-20 rounded focus:bg-gray-infolt active:bg-blue-selected hover:bg-gray-infolt cursor-pointer ',
    ]"
  >
    <div class="p-1">
      <img
        v-if="inboxItem.senderIcon"
        class="w-12 h-12 md:w-12 md:h-12"
        :src="icons[inboxItem.senderIcon]"
        alt="Inbox icon"
      />
      <div
        v-else
        class="w-12 h-12 md:w-12 md:h-12 bg-gray-infomd rounded-full"
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
      <read-notification
        v-if="inboxItem.id"
        v-bind:dayRead="inboxItem.dayRead"
      />
    </div>
  </li>
</template>

<script>
import icons from "../../assets/icons.js";
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
