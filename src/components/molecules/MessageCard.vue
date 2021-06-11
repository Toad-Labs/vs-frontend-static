<template>
    <div class="bg-white p-6 space-y-3" >
        <span class="uppercase text-sm font-light">{{ timestamp }}</span>
        <h1 class="text-2xl font-semibold">{{ title }}</h1>
        
        <!-- <p class="font-normal text-lg" v:for="paragraph of paragraphs">
            {{ paragraph }}
        </p> -->
        <p class="font-normal text-lg">
            {{ paragraphs }}
        </p>
    </div>
    <!-- <div class="bg-white p-6 space-y-3" >
        <span class="uppercase text-sm font-light">Weds, May 14th, 10:04 am</span>
        <h1 class="text-2xl font-semibold">Your Employment Insurance Claim - You've been subscribed to Job Alerts</h1>
        <p class="font-normal text-lg"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea eos ducimus nulla sit quae, commodi eaque ut eveniet laudantium amet maxime consectetur, facere repellendus ipsum tenetur numquam officia mollitia?
        </p>
    </div> -->
</template>

<script>
export default {
    props: {
        timestamp: String, //not 100% sure how the timestamp should be passed
        title: String,
        paragraphs: String, //since it's possible that there's multiple paragraphs, might need an Array
    },
    setup() {
        
    },
}
</script>