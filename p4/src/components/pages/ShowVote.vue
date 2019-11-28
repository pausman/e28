<template>
  <div>
    <div>You voted for:</div>
    <show-dog data-test='show-vote' v-for='dog in currentVote' :key='dog.id' :dog='dog'></show-dog>
  </div>
</template>

<script>
//import * as app from './../../app.js';
import ShowDog from './../ShowDog.vue';

export default {
  name: 'ShowVote',
  components: { ShowDog },
  data: function() {
    return {
      //currentVote: null
    };
  },
  methods: {},
  computed: {
    dogs: function() {
      return this.$store.state.dogs;
    },
    currentVote: function() {
      // if there is a vote show it
      return this.dogs.filter(dog => {
        return dog.id === parseInt(localStorage.getItem('dogId'));
      });
    }
  },

  mounted() {}
};
</script>

<style>
</style>