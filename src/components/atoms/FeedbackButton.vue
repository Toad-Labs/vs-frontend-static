<template>    
    <button :class="'flex rounded w-11/12 justify-center py-2 md:mt-6 md:w-1/4 ' + colorClass ">
      {{ text }}
    </button>
</template>

<script lang="ts">
export default ({
    props: {
        text: String,
        colorClass: String
    },
  setup() {
    return {
    };
  },
});
</script>