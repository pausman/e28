<template>
  <div>
    <show-dog v-for='dog in afeaturedDog' :key='dog.id' :dog='dog'></show-dog>
  </div>
</template>

<script>
import * as app from './../app.js';
import ShowDog from './ShowDog.vue';

export default {
  name: 'ShowFeatured',

  components: { ShowDog },

  methods: {
    featuredDog: function() {
      this.afeaturedDog = this.dogs.filter(dog => {

        return dog.id === 3;
      });
    }
  },
  data: function() {
    return {
      dogs: null,
      afeaturedDog: [],
      chosenNumber: 0
    };
  },
  mounted() {
    app.axios.get(app.config.api + 'dogs').then(response => {
      this.dogs = response.data;
      this.featuredDog();
    });
  }
};
</script>

<style scoped>
</style>