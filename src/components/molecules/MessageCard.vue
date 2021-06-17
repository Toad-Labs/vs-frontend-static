<template>
  <div class="bg-white p-6 space-y-3">
    <span class="uppercase text-sm font-heading font-light">{{
      timestamp
    }}</span>
    <h1 class="font-heading text-2xl font-semibold">{{ title }}</h1>
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
