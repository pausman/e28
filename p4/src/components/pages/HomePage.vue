<template>
  <div>
    <h2>Featured Dog of the Week</h2>
    <show-featured></show-featured>
  </div>
</template>

<script>
import * as app from './../../app.js';

import ShowFeatured from './../ShowFeatured.vue';

export default {
  name: 'HomePage',
  components: { ShowFeatured },
  data: function() {
    return {
      featuredDogId: 1
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