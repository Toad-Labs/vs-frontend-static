<template>    
    <button :class="'flex rounded w-5/6 justify-center py-2 m-4 md:block md:mr-8 md:w-2/5 ' + colorClass ">
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