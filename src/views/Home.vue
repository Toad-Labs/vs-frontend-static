<template>
  <div class="home">

    <h1
      class="text-4xl"
      id="maincontent"
      name="maincontent">This is the Home page heading</h1>

    <p>
    <router-link
      :to="{ name: 'conversation'}"
      class="underline text-blue-400">
      Conversation
    </router-link>
    </p>
    
    <p>
    <router-link
        :to="{ name: 'notice'}"
        class="underline text-blue-400">
        Notice
    </router-link>
    </p>
    
    <messages-container />
  </div>
</template>

<script>
import MessagesContainer from '../components/organisms/MessagesContainer.vue';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    MessagesContainer
  },
};
</script>
