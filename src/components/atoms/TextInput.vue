<template>
  <input
    type="text"
    placeholder="Write something..."
    class="w-full border-t border-b border-gray-200 p-3 mb-px"
    v-model="text"
  />
  <div class="w-full bg-gray-infolt">
    <chat-option-button
      v-for="(option, index) in buttonOptions"
      :key="index"
      :text="option"
      @send-button="sendBtnText"
    />
    <button class="float-right cursor-pointer my-2" @click="sendText">
      <img
        src="../../assets/Send/Active/Default.svg"
        alt="Bot Image."
        class="h-8"
      />
    </button>
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
  emits: ["add-message"],
  setup(_, context){
    const text = "";
    function sendText(){
      if(this.text.length > 0){
        context.emit("add-message", this.text)
      }
    }
    function sendBtnText(btnText) {
    if(btnText.length > 0){
        context.emit("add-message", btnText)
      }
    }
    return {
      text,
      sendText,
      sendBtnText
    }
  }
};
</script>
<style scoped></style>
