<template>
  <div>
    <div class="flex m-1 items-center uppercase">
      {{ text }}
      <span class="pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
       props: {
        text: String
    },
  setup() {
    return {};
  },
};
</script>
