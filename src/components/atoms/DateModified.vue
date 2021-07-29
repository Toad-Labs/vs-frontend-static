<template>
  <div class="p-2 font-body text-gray-dark text-xs sm:text-sm">
    <!-- for now this just displays the current date -->
    <p>{{ $t("dateModified") }} {{ Date() }}</p>
  </div>
</template>
