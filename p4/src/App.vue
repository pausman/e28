<template>
  <div id='app'>
    <img id='taj' alt='FindaFriend logo' src='./assets/images/taj.jpg' />
    <h1>Find A Friend Shelter</h1>
    <nav>
      <ul>
        <li v-for='link in links' :key='link.pge'>
          <a>
            <router-link exact :to='{ name: link.pge }'>{{ link.prompt}}</router-link>
          </a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: [
        { prompt: 'Home', pge: 'Home' },
        { prompt: 'Available Dogs', pge: 'Dogs' },
        { prompt: "Vote for next week's featured dog", pge: 'Vote' },
        { prompt: 'How to Help', pge: 'Volunteer' }
      ]
    };
  },
  mounted() {
    this.$store.dispatch('setDogs');
  }
};
</script>

<style>
@import './assets/css/p3.css';
</style>
