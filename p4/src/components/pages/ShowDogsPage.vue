<template>
  <div>
    <!-- Show all the dogs with pict in the kennel. Click on one to get details -->
    <h2>Available Dogs</h2>
    <show-dog data-test='dog-name' v-for='dog in dogs' :key='dog.id' :dog='dog'></show-dog>
  </div>
</template>

<script>
import ShowDog from './../ShowDog.vue';

//import * as app from './../../app.js';

export default {
  name: 'DogsPage',

  components: { ShowDog },

  data: function() {
    return {};
  },

  computed: {
    dogs: function() {
      return this.$store.state.dogs;
    }
  }
};
</script>

<style>
</style>