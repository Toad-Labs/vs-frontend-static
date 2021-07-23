<template>
  <li
    role="listitem"
    tabindex="0"
    @click="selectInboxItem"
    @keyup.enter="selectInboxItem"
    :class="[
      inboxItem.selected ? 'focus:bg-blue-selected rounded-none' : '',
      inboxItem.id ? '' : 'bg-gray-infolt animate-pulse',
      'flex items-center w-full h-16 md:h-20 rounded focus:border-black focus:bg-gray-infolt active:bg-blue-selected hover:bg-gray-infolt cursor-pointer ',
    ]"
  >
    <div class="p-1">
      <img
        v-if="inboxItem.senderIcon"
        class="w-12 h-12 md:w-12 md:h-12"
        :src="icons[inboxItem.senderIcon]"
        alt="Inbox icon."
      />
      <div
        v-else
        class="w-12 h-12 md:w-12 md:h-12 bg-gray-infomd rounded-full"
      />
    </div>
    <div class="flex-1 truncate">
      <span :id="'sender-name-label-' + indexNum" class="hidden">
        Inbox for sender:
      </span>
      <h2
        :id="'sender-name-' + indexNum"
        :aria-labelledby="
          'sender-name-label-' + indexNum + ' sender-name-' + indexNum
        "
        :class="[
          !inboxItem.dayRead ? 'font-bold' : '',
          'font-body md:text-lg truncate overflow-ellipsis text-gray-dark pl-1',
        ]"
      >
        {{ inboxItem.senderName }}
      </h2>
      <span class="hidden" :id="'status-and-teaser-announcement-' + indexNum"
        >{{ getStatusText() }}. Teaser text of latest message:</span
      >
      <h2
        :id="'teaser-text-' + indexNum"
        :aria-labelledby="
          'status-and-teaser-announcement-' +
          indexNum +
          ' teaser-text-' +
          indexNum
        "
        :class="[
          !inboxItem.dayRead ? 'font-body' : 'font-heading font-light',
          'text-sm md:text-lg truncate overflow-ellipsis text-gray-dark pl-1',
        ]"
      >
        {{
          inboxItem.teaserText ? inboxItem.teaserText : "No messages available"
        }}
      </h2>
    </div>
    <div>
      <read-notification
        v-if="inboxItem.id"
        v-bind:dayRead="inboxItem.dayRead"
        :indexNum="indexNum"
      />
    </div>
  </li>
</template>

<script lang="ts">
import icons from "../../assets/icons.js";
import ReadNotification from "../atoms/ReadNotification.vue";
export default {
  props: {
    inboxItem: Object,
    indexNum: Number,
  },
  setup(props, context) {
    function selectInboxItem() {
      context.emit("select-inbox-item", props.inboxItem.id);
    }
    function getStatusText() {
      return props.inboxItem.selected === true
        ? "This inbox item is currently selected and displayed (unless you are on mobile, please tap)"
        : "Click or press enter to access this inbox item which is " +
            (props.inboxItem.dayRead ? "  already read" : " unread");
    }
    return { selectInboxItem, icons, getStatusText };
  },
  components: {
    ReadNotification,
  },
};
</script>
