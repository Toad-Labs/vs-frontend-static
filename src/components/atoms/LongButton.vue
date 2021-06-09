<template>    
    <button :class="'flex rounded w-11/12 justify-center py-2 m-4 md:m-0 md:w-2/5 ' + colorClass ">
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