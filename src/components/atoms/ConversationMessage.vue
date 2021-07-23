<template>
  <div :class="[!isUser ? 'flex ' : '', 'pl-10 relative']">
    <p
      :class="[
        !isUser
          ? 'bg-gray-infolt mr-10 botMessage'
          : 'bg-blue-primary text-white float-right ml-10 userMessage',
        ' p-3 rounded-3xl max-w-xs md:max-w-xl min-w-7/2r break-words transition ease-linear duration-500 hover:bg-gray-600',
      ]"
    >
      {{ text }}
    </p>
    <img
      v-if="isLastMessage"
      ref="chatReaderIcon"
      :src="icons[senderIcon]"
      :alt="senderIconAltText"
      class="h-6 w-10 absolute left-0 bottom-0"
    />
  </div>
</template>
<script>
import icons from "../../assets/icons.js";
export default {
  name: "ConversationMessage",
  props: {
    senderIcon: String,
    senderIconAltText: String,
    isUser: Boolean,
    isLastMessage: Boolean,
    text: String,
  },
  setup() {
    return {
      icons,
    };
  },
};
</script>
<style scoped>
/* Chat bubble animations*/
.userMessage {
  animation: slideUpAndRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.botMessage {
  animation: slideUpAndLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUpAndRight {
  from {
    transform: translateX(0px) translateY(50px);
  }
  to {
    transform: none;
  }
}

@keyframes slideUpAndLeft {
  from {
    transform: translateX(0px) translateY(50px);
  }
  to {
    transform: none;
  }
}
</style>
