<template>
  <div class="bg-banner-img bg-cover p-10">
    <div class="mx-auto container px-3">
      <h1
        class="
          text-3xl
          sm:text-4xl
          px-3
          py-1
          font-bold font-heading
          uppercase
          bg-blue-deep bg-opacity-95
          text-white
          inline-block
          whitespace-normal
        "
      >
        {{ title }}
      </h1>
      <div class="">
        <p
          class="
            -mt-1
            px-3
            py-1
            inline-block
            font-heading
            whitespace-normal
            text-white
            bg-blue-deep bg-opacity-95
          "
        >
          {{ body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Banner",
  props: {
    title: String,
    body: String,
  },
  setup() {
    return {};
  },
};
</script>