<template>
  <div class="w-full h-full flex flex-col">
    <div class="flex border-b border-gray-infomd p-2">
      <img
        src="../../assets/UserAccount/VirtualConcierge.svg"
        alt="Bot Image."
        class="h-9 mt-auto w-10"
      />
      <span class="font-bold pt-2 pl-2">Virtual Concierge</span>
    </div>
    <div class="flex h-full overflow-auto">
      <img
        src="../../assets/UserAccount/VirtualConcierge.svg"
        alt="Bot Image."
        class="h-6 mt-auto w-10 mb-3"
      />
      <div class="w-full pr-6 overflow-auto flex flex-col-reverse">
        <!-- New text dialogs need to be added at the top since the div is flex reverse -->
        <ConversationMessage
          :isUser="false"
          :text="'Oh... Well, this is akward.'"
        />
        <ConversationMessage
          :isUser="true"
          :text="'I meant I am working too hard; I am all fired up right now.'"
        />
        <ConversationMessage
          :isUser="false"
          :text="'I appreciate your concern. Apply water vigorously and call 911.'"
        />
        <ConversationMessage
          :isUser="true"
          :text="'I need help! My desk is on fire!'"
        />
        <ConversationMessage
          :isUser="false"
          :text="'Hi, how can I help you?'"
        />
        <!-- duplicate for content placeholder -->
        <ConversationMessage
          :isUser="false"
          :text="'Oh... Well, this is akward.'"
        />
        <ConversationMessage
          :isUser="true"
          :text="'I meant I am working too hard; I am all fired up right now.'"
        />
        <ConversationMessage
          :isUser="false"
          :text="'I appreciate your concern. Apply water vigorously and call 911.'"
        />
        <ConversationMessage
          :isUser="true"
          :text="'I need help! My desk is on fire!'"
        />
        <ConversationMessage
          :isUser="false"
          :text="'Hi, how can I help you?'"
        />
        <!-- here -->

        <p class="text-center font-light text-gray-dark">WEDS 10:04 AM</p>
      </div>
    </div>
    <!-- The logic on how the buttonOptions are passed as props will 
                 depend on how we get the possible answers from VC. -->
    <TextInput :buttonOptions="['Yes', 'No']" />
  </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import TextInput from "../atoms/TextInput.vue";
export default {
  name: "ConversationWindow",
  components: {
    ConversationMessage,
    TextInput,
  },
};
</script>
<style scoped></style>
