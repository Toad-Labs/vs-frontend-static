<template>
    <div class="flex flex-col w-full items-center m-0 md:mx-auto md:block">
        <long-button colorClass="bg-btn-dark text-gray-light" text="Provide Feedback" />
        <long-button colorClass="bg-btn-light text-primary-main" text="Report a problem or a mistake on this page" />
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