<template>
  <div class="flex border-b border-gray-200 px-2 py-4">
    <button
      ref="backBtn"
      :tabindex="backBtnTabbable"
      class="sm:hidden"
      @click="clickBack"
      :aria-label="$t('backToInbox')"
      @mouseover="setBackIcon('BackFocused')"
      @mouseleave="setBackIcon('Back')"
      @focus="setBackIcon('BackFocused')"
      @focusout="setBackIcon('Back')"
    >
      <img
        :src="icons[backIcon]"
        :alt="altText"
        class="h-10 mt-auto w-10 mr-4"
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
import { ref, computed } from "vue";
export default {
  props: {
    imageName: String,
    altText: String,
    headerText: String,
  },
  setup() {
    const store = useStore();
    const backIcon = ref("Back");
    const backBtn = ref(null);
    const backBtnTabbable = computed(() => {
      if (backBtn.value === null) {
        return -1; //doesn't really matter what we put here since it'll be updated
      }
      //if backBtn is hidden, don't allow for it to be tabbed to
      return backBtn.value.style.display === "none" ? -1 : 0;
    });

    function clickBack() {
      store.dispatch("inbox/closeInboxItem");
    }
    function setBackIcon(icon) {
      backIcon.value = icon;
    }
    return {
      clickBack,
      setBackIcon,
      icons,
      backIcon,
      backBtn,
      backBtnTabbable,
    };
  },
};
</script>
