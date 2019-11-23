<template>
  <div>
    <h2>Available Dogs</h2>
    <show-dog v-for='dog in dogs' :key='dog.id' :dog='dog'></show-dog>
  </div>
</template>

<script>
import ShowDog from './../ShowDog.vue';

import * as app from './../../app.js';

export default {
  name: 'DogsPage',

  components: { ShowDog },

  data: function() {
    return {
      dogs: null
    };
  },

  mounted() {
    app.axios.get(app.config.api + 'dogs').then(response => {
      this.dogs = response.data;
    });
  }
};
</script>

<style>
</style>