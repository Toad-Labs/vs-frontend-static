<template>
  <div
    :class="[
      selected ? 'bg-blue-selected rounded-none' : 'bg-indigo-300',
      'flex items-center w-full h-16 md:h-20 rounded focus:border-black hover:bg-gray-infolt cursor-pointer',
    ]"
  >
    <div class="p-1 bg-pink-200">
      <img
        class="w-12 h-12 md:w-12 md:h-12"
        :src="icon"
        :alt="altText"
        role="presentation"
        aria-hidden="true"
      />
    </div>
    <div class="flex-1 truncate">
      <p
        :class="[
          !dayRead ? 'font-bold' : '',
          'font-body md:text-lg truncate overflow-ellipsis text-gray-dark bg-yellow-300',
        ]"
      >
        {{ senderName }}
      </p>
      <p
        :class="[
          !dayRead ? 'font-body' : 'font-heading font-light',
          'text-sm md:text-lg truncate overflow-ellipsis text-gray-dark bg-secondary-light',
        ]"
      >
        {{ bodyText }}
      </p>
    </div>
    <div>
      <read-notification v-bind:dayRead="dayRead" />
    </div>
  </div>
</template>

<script lang="ts">
import ReadNotification from "../atoms/ReadNotification.vue";
export default {
  props: {
    dayRead: String,
    selected: Boolean,
    icon: String,
    senderName: String,
    bodyText: String,
    altText: String,
  },
  setup() {
    return {};
  },
  components: {
    ReadNotification,
  },
};
</script>
