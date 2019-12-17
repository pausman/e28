<template>
  <div>
    <!-- Page to allow you to click a button to vote for a dog-->
    <h2>Vote for Next Week's Featured Dog</h2>
    <div data-test='current-vote-test' id='highlight' v-if='currentVote'>
      Your current vote is for: {{currentVote}}
      <br />
    </div>
    <vote-dog data-test='dog-vote-test2' v-for='dog in dogs' :key='dog.id' :dog='dog'></vote-dog>
  </div>
</template>

<script>
import VoteDog from './../VoteDog.vue';

export default {
  name: 'VotePage',
  components: { VoteDog },
  data: function() {
    return {};
  },
  methods: {
    getVote: function() {
      // if there is a vote show it
      this.currentVote = localStorage.getItem('dogName');
    }
  },
  computed: {
    dogs: function() {
      return this.$store.state.dogs;
    },
    currentVote: function() {
      return localStorage.getItem('dogName');
    }
  }
};
</script>

<style scoped>
</style>
