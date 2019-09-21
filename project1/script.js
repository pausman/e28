var app = new Vue({
    el: '#app',
    data: {
        flipped: false,
        choice: 'heads', // Players choice; defaults to 'heads' so radio button is selected on page load
        winner: null, // Boolean value as to whether the player wins or not
        coin: null, // Results of the coin flip - `heads` or `tails`
        sides: ['heads', 'tails']
    },
    methods: {
        flip: function () {
            this.flipped = true;
            let random = Math.floor(Math.random() * 2);
            this.coin = this.sides[random];
            this.winner = this.choice == this.coin;
        }
    }
});
