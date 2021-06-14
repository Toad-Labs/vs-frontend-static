<template>
  <div class="home">
    <messages-container />
  </div>
</template>

<script>
import MessagesContainer from '../components/organisms/MessagesContainer.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    MailContainer,
  },
};
</script>
