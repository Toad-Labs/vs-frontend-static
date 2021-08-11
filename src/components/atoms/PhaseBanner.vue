<template>
  <div className="bg-blue-medium">
    <div className="w-full mx-auto container px-5 pt-3">
      <div className="flex  flex-col sm:flex-row py-2 w-full mx-auto ">
        <div className="flex flex-row sm:flex-col  justify-between">
          <div
            className="mb-2 px-4 py-1 w-max font-body font-semibold leading-6 tracking-normal bg-white text-blue-medium "
          >
            {{ phase }}
          </div>
          <div className="pt-1 sm:pt-0 sm:mb-2 font-body sm:whitespace-nowrap">
            <a className="underline text-white" :href="link">
              {{ linkText }}
            </a>
          </div>
        </div>
        <p
          className="font-body text-white block text-sm break-words pt-2 sm:ml-6"
        >
          {{ children }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhaseBanner",
  props: {
    phase: String,
    link: String,
    linkText: String,
    children: String,
  },
};
</script>
