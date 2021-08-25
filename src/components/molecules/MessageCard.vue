<template>
  <li class="bg-white p-6 space-y-3 text-gray-dark" aria-live="polite">
    <span class="sr-only">
      {{ timestamps.fullTimestamp }}
    </span>
    <span aria-hidden="true" class="uppercase text-sm font-heading font-light">
      {{ timestamps.shortTimestamp }}
    </span>
    <h3 class="font-heading text-2xl font-bold">{{ title }}</h3>
    <p class="font-normal font-body text-lg whitespace-pre-line">
      {{ paragraphs }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    timestamps: Object, // should be in form {shortTimestamp: String, fullTimestamp: String}
    title: String,
    paragraphs: String, //note that newlines will be preserved
  },
  setup() {},
};
</script>
