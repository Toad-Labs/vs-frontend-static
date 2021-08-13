<template>
  <div class="p-2 font-body text-gray-dark text-xs sm:text-sm">
    <!-- for now this just displays the current date -->
    <p>
      {{ $t("dateModified") }} {{ new Date().toLocaleString(lang + "-CA") }}
    </p>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
export default {
  setup() {
    const lang = computed(() => (useI18n().locale.value == "fr" ? "en" : "fr"));
    return { lang };
  },
};
</script>
