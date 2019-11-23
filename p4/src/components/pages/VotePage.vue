<template>
  <div>
    <h2>Vote for Next Week's Featured Dog</h2>
    <div id='highlight' v-if='currentVote'>
      Your current vote is for: {{currentVote}}
      <br />
    </div>
    <vote-dog v-for='dog in dogs' :key='dog.id' :dog='dog'></vote-dog>
  </div>
</template>

<script>
import VoteDog from './../VoteDog.vue';

import * as app from './../../app.js';

export default {
  name: 'VotePage',
  components: { VoteDog },
  data: function() {
    return {
      dogs: null,
      currentVote: null
    };
  },
  methods: {
    getVote: function() {
      // if there is a vote show it
      this.currentVote = localStorage.getItem('dogName');
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

<style scoped>
</style>
