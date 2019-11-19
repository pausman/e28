<template>
  <div>
    <div v-if='!currentVote.length'>
      No vote recorded.
      Please vote from menu above
    </div>
    <div v-else>You voted for:</div>
    <show-dog v-for='dog in currentVote' :key='dog.id' :dog='dog'></show-dog>
  </div>
</template>

<script>
import * as app from './../../app.js';
import ShowDog from './../ShowDog.vue';

export default {
  name: 'ShowVote',
  components: { ShowDog },
  data: function() {
    return {
      currentVote: null
    };
  },
  methods: {
    getVote: function() {
      // if there is a vote show it
      this.currentVote = this.dogs.filter(dog => {
        return dog.id === parseInt(localStorage.getItem('dogId'));
      });
    }
  },

  mounted() {
    app.axios.get(app.config.api + 'dogs').then(response => {
      this.dogs = response.data;
      this.getVote();
    });
  }
};
</script>

<style>
</style>