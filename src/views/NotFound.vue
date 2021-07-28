<template>
  <!-- skip nav component -->
  <the-skip-nav />
  <!-- The header component -->
  <the-header />
  <!-- Page content -->
  <div class="w-full sm:p-3 sm:pb-0">
    <main>
      <section>
        <h1 class="text-4xl">{{ $t("notFoundTitle") }}</h1>
        <h2 class="text-2xl">{{ $t("notFoundStatus") }}</h2>
      </section>
      <feedback-button
        colorClass="bg-blue-primary text-white"
        :text="$t('provideFeedback')"
      />
    </main>
  </div>
  <!-- The footer component -->
  <the-footer />
</template>

<script>
import TheHeader from "../components/molecules/TheHeader.vue";
import TheFooter from "../components/molecules/TheFooter.vue";
import TheSkipNav from "../components/molecules/TheSkipNav.vue";
import FeedbackButton from "../components/atoms/FeedbackButton.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    TheSkipNav,
    FeedbackButton,
  },
};
</script>
