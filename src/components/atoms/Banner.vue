<template>
  <div
    class="
      bg-banner-img-lg bg-cover bg-center
      py-2
      sm:py-5
      px-2
      sm:p-10
      2xl:py-6
    "
  >
    <div class="mx-auto container sm:px-3">
      <h1
        class="
          text-2xl
          xs:text-3xl
          sm:text-4xl
          px-3
          py-1
          font-bold font-heading
          uppercase
          bg-blue-deep bg-opacity-95
          text-white
          sm:inline-block
          whitespace-normal
        "
      >
        {{ title }}
      </h1>
      <div>
        <p
          class="
            px-3
            py-1
            sm:inline-block
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

<script>
export default {
  name: "Banner",
  props: {
    title: String,
    body: String,
  },
};
</script>
