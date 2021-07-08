<template>
  <div id="app">
    <!-- skip nav component -->
    <the-skip-nav />

    <!-- The header component -->
    <the-header />

    <!-- Page content -->
    <div class="w-full sm:p-3 sm:pb-0">
      <main>
        <router-view />
        <feedback-button
          colorClass="bg-blue-primary text-white"
          text="Provide Feedback"
        />
      </main>
    </div>

    <!-- The footer component -->
    <the-footer />
  </div>
</template>

<script lang="ts">
import TheHeader from "./components/molecules/TheHeader.vue";
import TheFooter from "./components/molecules/TheFooter.vue";
import TheSkipNav from "./components/molecules/TheSkipNav.vue";
import FeedbackButton from "./components/atoms/FeedbackButton.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    FeedbackButton,
    TheSkipNav,
  },
};
</script>

<style></style>
