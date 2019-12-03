<template>
  <div>
    <h2>Featured Dog of the Week</h2>
    <show-featured></show-featured>
  </div>
</template>

<script>
import ShowFeatured from './../ShowFeatured.vue';

export default {
  name: 'HomePage',
  components: { ShowFeatured },
  data: function() {
    return {
      featuredDogId: 1
    };
  },
  computed: {
    dogs: function() {
      return this.$store.state.dogs;
    }
  },

  mounted() {}
};
</script>

<style>
</style>