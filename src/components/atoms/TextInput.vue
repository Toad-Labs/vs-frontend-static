<template>
  <div>
    <input
      type="text"
      placeholder="Write something..."
      class="w-full border-t border-b border-gray-200 p-3"
    />
    <div class="w-full">
      <chat-option-button
        v-for="(option, index) in buttonOptions"
        :key="index"
        :text="option"
      />
      <button class="float-right cursor-pointer my-2">
        <img
          src="../../assets/Send/Active/Default.svg"
          alt="Bot Image."
          class="h-10"
        />
      </button>
    </div>
  </div>
</template>
<script>
import ChatOptionButton from "./ChatOptionButton.vue";
export default {
  name: "TextInput",
  props: {
    buttonOptions: Array,
  },
  components: {
    ChatOptionButton,
  },
};
</script>
<style scoped></style>
