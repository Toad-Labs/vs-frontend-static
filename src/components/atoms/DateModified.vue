<template>
  <div class=" p-2 font-body text-xs sm:text-sm">
   <!-- for now this just displays the current date -->
 <p>Date modified: {{ Date()}} </p>
  </div>
</template>

<script lang="ts">
export default ({

  setup(props) {
    return {
       Date,
    };
  },

});
</script>