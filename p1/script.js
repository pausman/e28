var app = new Vue({
    el: '#app',
    data: {
        //  Initialize which sections of the html to show
        showIntro: true,
        showGame: false,
        sayGoodbye: false,
        showVerdict: false,

        // Initialize the choices 
        userChoice: 'Betray',
        computerChoice: '',
        choices: [
            'Betray', 'Silent'
        ],

        // Initialize the verdict
        verdict: '',
        janeImage: '',
        userImage: ''
    },
    methods: {
        playGame: function () {
            // start up the game 
            this.showIntro = false;
            this.showGame = true;
            this.showVerdict = false;
            this.computerChoice = '';
            this.janeImage = '';
            this.userImage = '';

        },

        endGame: function () {
            // end the game with a goodbye message
            this.sayGoodbye = true;
            this.showIntro = false;
        },

        runSim: function () {
            // figure out the verdicts based on input
            this.computerChoice = this.choices[Math.floor(Math.random() * 2)];

            // If both Betray then both get 6 years in prison
            if (this.computerChoice == 'Betray' && this.userChoice == 'Betray') {
                this.verdict = 'both you and Jane will spend the next 6 years in jail';
                this.janeImage = 'jail';
                this.userImage = 'jail';

                // if computer betrays but user silent: computer goes free but user goes to prison
            } else if (this.computerChoice == 'Betray' && this.userChoice == 'Silent') {
                this.verdict = 'Jane will be set free and you will serve three years in prison';
                this.janeImage = 'walkaway';
                this.userImage = 'jail';

                // if computer is silent and user betrays: user is set free computer to jail
            } else if (this.computerChoice == 'Silent' && this.userChoice == 'Betray') {
                this.verdict = 'you will be set free and Jane will serve three years in prison';
                this.janeImage = 'jail';
                this.userImage = 'walkaway';

                // if both silent both go to jail for a short period.
            } else {
                this.verdict = 'since you both remained silent and  will spend 1 year in jail for lottering';
                this.janeImage = 'jail';
                this.userImage = 'jail';
            }
            this.showGame = false;
            this.showVerdict = true;


        },


        loadGame: function () {
            //start over the game 
            this.showGame = true;
            this.showVerdict = false;
        }

    }
})