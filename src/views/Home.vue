<template>
  <div class="home">
    <messages-container />
  </div>
</template>

<script>
import MessagesContainer from '../components/organisms/MessagesContainer.vue';
import MailContainer from '../components/organisms/MailContainer.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    MailContainer,
    MessagesContainer
  },
};
</script>
