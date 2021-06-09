<template>
  <div id="app">

    <!-- The header component -->
    <the-skip-nav />

    <!-- The header component -->
    <the-header />

    <!-- Page content -->
    <div class="w-full mx-auto container p-5">
      <main>
        <router-view/>
      </main>
      <long-button colorClass="bg-primary-main text-gray-light" text="Provide Feedback" />
    </div>

    <!-- The footer component -->
    <the-footer />

  </div>
</template>

<script lang="ts">
import TheSkipNav from './components/molecules/TheSkipNav.vue';
import TheHeader from './components/molecules/TheHeader.vue';
import TheFooter from './components/molecules/TheFooter.vue';
import LongButton from "./components/atoms/LongButton.vue";
import ButtonFooter from './components/molecules/ButtonFooter.vue';

export default ({
  name: 'App',
  components: {
    TheSkipNav,
    TheHeader,
    TheFooter,
    LongButton
  },
});
</script>

<style>
</style>
