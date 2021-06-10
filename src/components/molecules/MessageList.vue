<template>
    <div class="flex flex-col h-96 bg-gray-light p-6 space-y-6 overflow-auto"> 
        <message-card />
        <message-card />
        <message-card />
        <message-card />
    </div>
</template>

<script>
import MessageCard from "./MessageCard.vue"

export default {
    //  not 100% sure how to implemnet prop passing
    //  props: {
    //     messages: Array, //should be an array of objects with a timestamp, a header, and an array of paragraphs  
    // },
    components: {
        MessageCard
    },
    setup() {
        
    },
}
</script>