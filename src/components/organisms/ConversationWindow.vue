<template>
    <div class="w-full">
        <ConversationMessage :isBot=true />
        <ConversationMessage :isBot=false />
        <ConversationMessage :isBot=true />
        <ConversationMessage :isBot=false />
        <ConversationMessage :isBot=true />
    </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
export default {
    name: "ConversationWindow",
    components: {
        ConversationMessage
    }
}
</script>
<style scoped>
    
</style>