<template>
  <div class="flex border-b border-gray-200 px-2 py-4">
    <button
      @click="clickBack"
      aria-label="back to inbox"
      @mouseover="setBackIcon('BackFocused')"
      @mouseleave="setBackIcon('Back')"
      @focus="setBackIcon('BackFocused')"
      @focusout="setBackIcon('Back')"
    >
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
import { ref } from "vue";
export default {
  props: {
    imageName: String,
    altText: String,
    headerText: String,
  },
  setup() {
    const store = useStore();
    let backIcon = ref("Back");
    function clickBack() {
      store.dispatch("inbox/closeInboxItem");
    }
    function setBackIcon(icon) {
      backIcon.value = icon;
    }
    return { clickBack, setBackIcon, icons, backIcon };
  },
};
</script>
