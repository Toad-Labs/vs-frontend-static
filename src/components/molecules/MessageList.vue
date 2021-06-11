<template>
    <div class="flex flex-col h-96 bg-gray-light p-6 space-y-6 overflow-auto"> 
        <message-card 
            timestamp="Weds, May 14th, 10:04 am" 
            title="Your Employment Insurance Claim - You've been subscribed to Job Alerts" 
            paragraphs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea eos ducimus nulla sit quae, commodi eaque ut eveniet laudantium amet maxime consectetur, facere repellendus ipsum tenetur numquam officia mollitia?"    
         />
         <message-card 
            timestamp="Weds, May 14th, 10:04 am" 
            title="Your Employment Insurance Claim - You've been subscribed to Job Alerts" 
            paragraphs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea eos ducimus nulla sit quae, commodi eaque ut eveniet laudantium amet maxime consectetur, facere repellendus ipsum tenetur numquam officia mollitia?"    
         />
         <message-card 
            timestamp="Weds, May 14th, 10:04 am" 
            title="Your Employment Insurance Claim - You've been subscribed to Job Alerts" 
            paragraphs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea eos ducimus nulla sit quae, commodi eaque ut eveniet laudantium amet maxime consectetur, facere repellendus ipsum tenetur numquam officia mollitia?"    
         />
        <message-card />
        <message-card title="Empty box above" />
    </div>
<!--
<div class="flex flex-col h-96 bg-gray-light p-6 space-y-6 overflow-auto"> 
    <div class="bg-white p-6 space-y-3" v:for="msg of messages">
        <span class="uppercase text-sm font-light">{{ msg.timestamp }}</span>
        <h1 class="text-2xl font-semibold">{{ msg.title }}</h1>
        <p class="font-normal text-lg">{{ msg.paragraphs }}</p>
    </div>
</div> -->
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