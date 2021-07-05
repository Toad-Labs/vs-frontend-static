<template>
  <nav>
    <!-- Site Accessibility Navigation -->
    <ul
      class="sr-only focus-within:not-sr-only text-center"
      aria-label="Skip Navigation Link"
    >
      <li
        class="w-max bg-blue-deep text-white mt-2 p-2 rounded inline-block"
        @click="toMain"
      >
        <a href="#maincontent">Skip to main content</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  setup() {
    function toMain() {
      const inboxHeader = document.getElementById("inbox-header");
      inboxHeader.tabIndex = 0; //allows you to focus on the inbox header
      inboxHeader.focus();
    }

    return {
      toMain,
    };
  },
};
</script>
