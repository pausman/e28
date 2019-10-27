import Vue from 'vue';
import IntroScreen from './components/IntroScreen.vue';
import ShowResult from './components/ShowResult.vue';


let app = new Vue({
    el: '#app',
    components: {
        'intro-screen': IntroScreen,
        'show-result': ShowResult
    },
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
        userImage: '',

        // keep track of results
        rounds: [],
        round: 1
    },
    methods: {
        playGame: function (anumber) {
            // start up the game 

            if (anumber == 0) {

                this.sayGoodbye = false;
                this.showIntro = false;
                this.showGame = true;
                this.showVerdict = false;
                this.computerChoice = '';
                this.janeImage = '';
                this.userImage = '';
            }
            else {

                this.sayGoodbye = true;
                this.showIntro = false;
            }

        },

        //     endGame: function () {
        //       // end the game with a goodbye message
        //     this.sayGoodbye = true;

        // },

        runSim: function () {
            // figure out the verdicts based on input
            this.computerChoice = this.choices[Math.floor(Math.random() * 2)];


            // If both Betray then both get 6 years in prison
            if (this.computerChoice == 'Betray' && this.userChoice == 'Betray') {
                this.verdict = 'Both you and Jane will spend the next 6 years in jail';
                this.janeImage = 'jail';
                this.userImage = 'jail';

                // if computer betrays but user silent: computer goes free but user goes to prison
            } else if (this.computerChoice == 'Betray' && this.userChoice == 'Silent') {
                this.verdict = 'Jane will be set free and you will serve three years in prison';
                this.janeImage = 'walkaway';
                this.userImage = 'jail';

                // if computer is silent and user betrays: user is set free computer to jail
            } else if (this.computerChoice == 'Silent' && this.userChoice == 'Betray') {
                this.verdict = 'You will be set free and Jane will serve three years in prison';
                this.janeImage = 'jail';
                this.userImage = 'walkaway';

                // if both silent both go to jail for a short period.
            } else {
                this.verdict = 'Since you both will spend 1 year in jail for lottering';
                this.janeImage = 'jail';
                this.userImage = 'jail';
            }
            this.showGame = false;
            this.showVerdict = true;
            // store results
            this.rounds.push({
                number: this.round++,
                computer: this.computerChoice,
                player: this.userChoice,
                verdict: this.verdict,

            })


        },


        loadGame: function () {
            //start over the game 
            this.showGame = true;
            this.showVerdict = false;
        }

    }
})