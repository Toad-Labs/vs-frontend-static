<template>
  <div class="flex border-b border-gray-200 px-2 py-4">
    <button @click="clickBack" aria-label="back to inbox">
      <img
        :src="icons[backIcon]"
        :alt="altText"
        class="sm:hidden h-10 mt-auto w-10 mr-4"
      />
    </button>

    <img
      :src="icons[imageName]"
      :alt="altText"
      class="h-10 mt-auto w-10"
      aria-hidden="true"
    />
    <span class="font-bold font-body pt-2 pl-2">{{ headerText }}</span>
  </div>
</template>

<script>
import icons from "../../assets/icons.js";
import { useStore } from "vuex";
export default {
  props: {
    imageName: String,
    backIcon: String,
    altText: String,
    headerText: String,
  },
  setup() {
    const store = useStore();
    function clickBack() {
      store.dispatch("inbox/closeInboxItem");
    }
    return { clickBack, icons };
  },
};
</script>
