import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import HomePage from './components/pages/HomePage.vue';
import ShowDogsPage from './components/pages/ShowDogsPage.vue'
import DogPage from './components/pages/DogPage.vue';
import VotePage from './components/pages/VotePage.vue';
import ShowVote from './components/pages/ShowVote.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/dogs', component: ShowDogsPage, name: 'Dogs' },
  { path: '/dog/:id', component: DogPage, name: 'dog', props: true },
  { path: '/dogsvote', component: VotePage, name: 'Vote' },
  { path: '/showvote/:id', component: ShowVote, name: 'ShowVote' },

]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
