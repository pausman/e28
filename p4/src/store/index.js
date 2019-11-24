import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dogs: [],
    },
    mutations: {
        setDogs(state, payload) {
            state.dogs = payload;
        }
    },
    actions: {
        setDogs(context) {
            app.axios.get(app.config.api + 'dogs').then(response => {
                context.commit('setDogs', response.data);
            });
        }
    },
    getters: {
        getDogById(state) {
            return function (id) {
                return state.dogs.find(dog => dog.id == id)
            }
        }
    }

})