<template>
  <nav class="relative">
    <!-- Site Accessibility Navigation -->
    <ul
      class="sr-only focus-within:not-sr-only text-center"
      :aria-label="$t('skipNavLink')"
    >
      <li
        class="
          transform
          -translate-x-1/2
          absolute
          left-1/2
          top-0
          w-max
          bg-blue-deep
          text-white
          mt-2
          sm:mt-14
          p-2
          rounded
          block
          outline-white
        "
        @click="toMain"
      >
        <a href="#index-header">{{ $t("skipToMain") }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
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
