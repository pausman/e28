<template>
  <div>
    <div>
      <a>
        <div data-test='dog-vote-test'>
          {{ dog.name }}
          <button
            data-test='dog-vote-button'
            @click='voteForDog(dog.id,dog.name)'
          >Vote for me</button>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoteDog',
  props: ['dog'],

  data: function() {
    return {
      addAlert: false,
      currentVote: null
    };
  },

  methods: {
    voteForDog: function(dogId, dogName) {
      // Store a key/value pair - you only get one vote
      localStorage.setItem('dogId', dogId);
      localStorage.setItem('dogName', dogName);
      // after vote show them the show vote page
      this.$router.push({ path: 'ShowVote/' + dogId });
    },
    getVote: function() {
      // if there is a vote show it - a new vote will overwrite old
      this.currentVote = localStorage.getItem('dogId');
    }
  }
};
</script>

<style scoped>
</style>
