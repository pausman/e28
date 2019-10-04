var app = new Vue({
    el: '#app',
    data: {
        showIntro: true,

        showGame: false,
        sayGoodbye: false,

        userChoice: 'Betray',
        computerChoice: 'Betray',
        choices: [
            'Betray', 'Silent'
        ],
        verdict: '',
        showVerdict: false




    },
    methods: {
        playGame: function () {
            this.showIntro = false;
            this.showGame = true;


        },
        endGame: function () {
            this.sayGoodbye = true;
            this.showIntro = false;
        },
        gotName: function () {
            this.showGame = true;
        },
        runSim: function () {
            this.computerChoice = this.choices[Math.floor(Math.random() * 2)];
            // If both Betray then both get 6 years in prison
            if (this.computerChoice == 'Betray' && this.userChoice == "Betray") {
                this.verdict = 'Both you and Jane will spend the next 6 years in jail';
            } else if (this.computerChoice == 'Betray' && this.userChoice == 'Silent') {
                this.verdict = 'Jane betrayed you! She will be set free and you will serve three years in prison';
            } else if (this.computerChoice == 'Silent' && this.userChoice == 'Betray') {
                this.verdict = 'You betrayed Jane! You will be set free and Jane will serve three years in prison';
            } else {
                this.verdict = 'You both remain silent and  will spend 1 year in jail for lottering';
            }
            this.showGame = false;
            this.showVerdict = true;


        }

    }
})