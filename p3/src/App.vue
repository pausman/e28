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
import * as app from './app.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      //
      //links: ['Home', 'Dogs', 'Vote'],
      links: [{prompt:'Home', pge:'Home'},
      {prompt:'Available Dogs', pge:'Dogs'}, 
      {prompt:"Vote for next week's featured dog", pge:'Vote'}],
      sharedState: app.store
    };
  }
};
</script>

<style>

@import './assets/css/p3.css';

</style>

