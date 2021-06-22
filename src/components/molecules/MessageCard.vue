<template>
  <div class="bg-white p-6 space-y-3 text-gray-dark">
    <span class="uppercase text-sm font-heading font-light">{{
      timestamp
    }}</span>
    <h3 class="font-heading text-2xl font-bold">{{ title }}</h3>
    <p class="font-normal font-body text-lg whitespace-pre-line">
      {{ paragraphs }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    timestamp: String, //not 100% sure how the timestamp should be passed
    title: String,
    paragraphs: String, //note that newlines will be preserved
  },
  setup() {},
};
</script>
