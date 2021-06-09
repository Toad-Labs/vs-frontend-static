<template>
    <div class="flex flex-col w-full items-center container mx-auto md:p-5 md:block">
        <long-button colorClass="bg-primary-main text-gray-light" text="Provide Feedback" />
    </div>
</template>

<script lang="ts">
import LongButton from "../atoms/LongButton.vue";
export default ({
    components: {
    LongButton
  },
  setup() {
    return {
    };
  },

});
</script>