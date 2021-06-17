<template>
  <div class="flex border-b border-gray-200 p-2">
    <img :src="icons[imageName]" :alt="altText" class="h-10 mt-auto w-10" />
    <span class="font-bold font-body pt-2 pl-2">{{ headerText }}</span>
  </div>
</template>

<script>
import icons from "../../assets/UserAccount/icons.js";
export default {
  data() {
    return {
      icons,
    };
  },
  props: {
    imageName: String,
    altText: String,
    headerText: String,
  },
  setup() {},
};
</script>
