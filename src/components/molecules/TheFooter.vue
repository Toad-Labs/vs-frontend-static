<template>
  <div>
    <footer>
      <div class="bg-gray-infolt w-full p-5">
        <div
          class="
            flex flex-col
            container
            mx-auto
            sm:flex-row sm:items-center
            justify-between
          "
        >
          <!-- Hidden heading -->
          <h2 class="sr-only p-1">Site Footer Information</h2>
          <date-modified />
          <div class="flex justify-end sm:p-2">
            <img
              className="h-6 sm:h-8"
              src="../../assets/wmms-blk.svg"
              :alt="$t('canadaLogoFooter')"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import DateModified from "../atoms/DateModified.vue";
export default {
  name: "TheFooter",
  components: {
    DateModified,
  },
};
</script>
