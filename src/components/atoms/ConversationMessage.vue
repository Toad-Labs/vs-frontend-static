<template>
<div :class="[isBot ? 'flex': '', 'w-full']">
        <img v-if="isBot" src="" alt="Bot Image.">
        <p :class="[isBot ? 'bg-gray-400' : 'bg-red-500 text-right float-right', 'my-3 p-3 rounded w-1/2']">if this is grey, im a bot</p>
</div>
</template>
<script>
export default {
    name: "ConversationMessage",
    props: {
        isBot: Boolean
    }
}
</script>
<style scoped>
    
</style>