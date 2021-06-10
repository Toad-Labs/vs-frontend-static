<template>
    <div class="relative w-full">
        <div class="flex border-b border-gray-200 p-2">
            <img src="../../assets/logo.png" alt="Bot Image." class="h-10 mt-auto w-10">
            <span class=" font-bold pt-2 pl-2">Jerry S. (Do Not Reply)</span>
        </div> 
        <div class="flex">
            <img src="../../assets/logo.png" alt="Bot Image." class="h-10 mt-auto w-10">
            <div class="w-full pr-6 overflow-auto max-h-96 flex flex-col-reverse">
                <!-- New text dialogs need to be added at the top since the div is flex reverse -->
                <ConversationMessage :isUser=false :text="'Oh... Well, this is akward.'" />
                <ConversationMessage :isUser=true :text="'I meant I am working too hard; I am all fired up right now.'"/>
                <ConversationMessage :isUser=false :text="'I appreciate your concern. Apply water vigorously and call 911.'" />                
                <ConversationMessage :isUser=true :text="'I need help! My desk is on fire!'" />
                <ConversationMessage :isUser=false :text="'Hi, how can I help you?'" />
                <!-- duplicate for content placeholder -->
                <ConversationMessage :isUser=false :text="'Oh... Well, this is akward.'" />
                <ConversationMessage :isUser=true :text="'I meant I am working too hard; I am all fired up right now.'"/>
                <ConversationMessage :isUser=false :text="'I appreciate your concern. Apply water vigorously and call 911.'" />                
                <ConversationMessage :isUser=true :text="'I need help! My desk is on fire!'" />
                <ConversationMessage :isUser=false :text="'Hi, how can I help you?'" />
                <!-- here -->
                 
                <p class="text-center font-light text-gray-400">WEDS 10:04 AM </p>
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
        TextInput
    }
}
</script>
<style scoped>
    
</style>