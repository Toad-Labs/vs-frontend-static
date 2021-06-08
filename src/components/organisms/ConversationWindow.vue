<template>
    <div class="relative w-full border border-gray-200"> 
        <div class="flex">
            <img src="../../assets/logo.png" alt="Bot Image." class="h-10 mt-auto w-10">
            <div class="w-full pr-6">
                <p class="text-center font-light text-gray-400">WEDS 10:04 AM </p>
                <ConversationMessage :isBot=true :text="'Hi, how can I help you?'" />
                <ConversationMessage :isBot=false :text="'I need help! My desk is on fire!'" />
                <ConversationMessage :isBot=true :text="'I appreciate your concern. Apply water vigorously and call 911.'" />
                <ConversationMessage :isBot=false :text="'I meant I am working too hard; I am all fired up right now.'"/>
                <ConversationMessage :isBot=true :text="'Oh... Well, this is akward.'" />
            </div>     
        </div>
            <TextInput />
    </div>
</template>
<script>
import ConversationMessage from "../atoms/ConversationMessage.vue";
import TextInput from "../atoms/TextInput.vue";
export default {
    name: "ConversationWindow",
    components: {
        ConversationMessage,
        TextInput
    }
}
</script>
<style scoped>
    
</style>