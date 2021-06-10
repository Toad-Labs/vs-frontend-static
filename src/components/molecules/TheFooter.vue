<template>
  <div>
    <footer>
      <div class="bg-gray-infolt w-full p-5">
        <div
          class="
            flex flex-col
            sm:flex-row
            container
            w-full
            mx-auto
            justify-between
            items-center
          "
        >
          <div
            class="
              flex flex-col
              w-full
              sm:flex-row
              sm:items-center
              justify-between
            "
          >
            <!-- Hidden heading -->
            <h2 class="sr-only p-1">Site Footer Information</h2>
            <date-modified></date-modified>
            <div class="flex justify-end sm:p-2">
              <img
                className="flex justify-end h-6 sm:h-8"
                src="../../assets/wmms-blk.svg"
                alt="canada logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import DateModified from "../atoms/DateModified.vue";
export default {
  name: "TheFooter",
  components: {
    DateModified,
  },

  setup() {
    const date = ref("");
    return {
      date,
    };
  },
};
</script>
