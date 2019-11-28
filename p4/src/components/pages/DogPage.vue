<template>
  <div data-test='dog-name3' v-if='dog'>
    <h1>Dog: {{dog.name}}</h1>
    <p v-if='dog.bred_for'>Bred for: {{dog.bred_for}}</p>
    <p v-if='dog.breed_group'>Group: {{dog.breed_group}}</p>
    <p v-if='dog.life_span'>Life span: {{dog.life_span}}</p>
    <p v-if='dog.temperament'>Temperament: {{dog.temperament}}</p>
    <img v-if='dog.id' class='dog' :alt='"Image of  " + dog.name' :src='dog.url' />
  </div>
</template>

<script>
//import * as app from './../../app.js';

export default {
  name: 'DogPage',

  data: function() {
    return {
      //  dog: null
    };
  },

  props: ['id'],

  computed: {
    dog: function() {
      return this.$store.getters.getDogById(this.id);
    }
  },

  mounted() {
    //app.axios.get(app.config.api + '/dogs/' + this.id).then(response => {
    //this.dog = response.data;
    //});
  }
};
</script>

<style>
</style>