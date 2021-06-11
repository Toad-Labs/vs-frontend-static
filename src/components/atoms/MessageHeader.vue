<template>
    <div class="flex border-b border-gray-200 p-2">
        <img :src="'/assets/' + imagePath + imageName" :alt="imageName" class="h-10 mt-auto w-10">
        <span class=" font-bold pt-2 pl-2">{{ headerText }}</span>
    </div> 
</template>

<script>
export default {
    props: {
        imagePath: String,
        imageName: String,
        headerText: String,
    },
    setup() {
        
    },
}
</script>