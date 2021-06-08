<template>
<div :class="[isBot ? 'flex': '', 'w-full my-3']">
        <p :class="[isBot ? 'bg-gray-light' : 'bg-primary-dark text-white float-right', ' p-3 rounded-3xl w-2/3 md:w-1/2']">{{text}}</p>
</div>
</template>
<script>
export default {
    name: "ConversationMessage",
    props: {
        isBot: Boolean,
        text: String
    }
}
</script>
<style scoped>
    
</style>