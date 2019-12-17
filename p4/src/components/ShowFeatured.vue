<template>
  <div>
    <!-- Show the featured dog  -->
    <show-dog v-for='dog in featuredDog' :key='dog.id' :dog='dog'></show-dog>
  </div>
</template>

<script>
//import * as app from './../app.js';
import ShowDog from './ShowDog.vue';

export default {
  name: 'ShowFeatured',

  components: { ShowDog },

  data: function() {
    return {};
  },
  computed: {
    dogs: function() {
      return this.$store.state.dogs;
    },
    featuredDog: function() {
      return this.dogs.filter(dog => {
        return dog.id === 3;
      });
    }
  }
};
</script>

<style scoped>
</style>