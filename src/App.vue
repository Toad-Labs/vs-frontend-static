<template>
  <div id="app">
    <!-- The header component -->
    <the-skip-nav />

    <!-- The header component -->
    <the-header />

    <!-- Page content -->
    <div class="w-full mx-auto container p-5">
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
import TheSkipNav from "./components/molecules/TheSkipNav.vue";
import TheHeader from "./components/molecules/TheHeader.vue";
import TheFooter from "./components/molecules/TheFooter.vue";
import FeedbackButton from "./components/atoms/FeedbackButton.vue";

export default {
  name: "App",
  components: {
    TheSkipNav,
    TheHeader,
    TheFooter,
    FeedbackButton,
  },
};
</script>

<style></style>
