Vue.component('first-try', {
    data: function () {
        return {
            deleted: false
        }
    },

    template: `<div v-if='!deleted'>Some text<button v-on:click='deleteIt'> Click Me! </button></div>`,
    methods: {
        deleteIt: function () {
            this.deleted = true
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {

        profileUrl: 'http://p1.loc',
        showVerdict: false

    }
})