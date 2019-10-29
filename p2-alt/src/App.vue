<template>
  <div id="app" v-cloak class="jumbotron">
    <h1 class="display-4">Prisoner's Dilemma Game</h1>
    <div class="container bg-secondary text-white">
      <!-- Intro screen -->

      <intro-screen v-if="showIntro" @play-game="playGame($event)"></intro-screen>
      <br />
      <div v-if="sayGoodbye">Thank you for coming!</div>

      <!-- Game screen -->
      <div class="container" v-if="showGame">
        <ul>
          <li>
            You and Jane are robbers that are arrested while waiting across the street from a bank that you
            planned
            to rob that night.
          </li>
          <li>You are separated from Jane and have no means of communicating with her.</li>
          <li>
            Law enforcement lack sufficient evidence to convict you both on the charge of roberry, but they
            have enough to convict both on a lesser charge of lottering.
          </li>
          <li>
            Simultaneously, the detectives offer each of you a bargain: You are given the opportunity either
            to betray the other by testifying that the other
            committed the crime, or to cooperate with the other by remaining silent.
          </li>

          <li>The result of any choice you make are:</li>
          <li>
            <ul>
              <li>If both of you betray the other, each of you will serve six years in prison</li>

              <li>
                If you betray the Jane but Jane remains silent, you will be set free and Jane will serve
                three years in prison
              </li>
              <li>
                If Jane betrays you but you remain silent, Jane will be set free and you will serve
                three
                years in prison
              </li>
              <li>
                If both of you remain silent, both of you will serve only one year in prison on the
                lesser
                charge of lottering.
              </li>
            </ul>
          </li>
        </ul>What do you want to do?
        <br />
        <div>
          <label>
            <input type="radio" name="userChoice" value="Betray" v-model="userChoice" /> Betray
            Jane
          </label>
          <br />
          <label>
            <input type="radio" name="userChoice" value="Silent" v-model="userChoice" /> Stay
            quiet
          </label>
        </div>
        <button id="choiceBtn" @click="runSim" class="btn btn-primary">Choose!</button>
        <br />
        <br />
      </div>

      <!-- Results screen -->
      <div class="container" v-if="showVerdict">
        You selected {{userChoice}} and Jane selected {{computerChoice}}
        <br />
        {{verdict}}
        <br />
        <div class="row">
          <div class="column">
            <figure>
              <img :src="'/images/' + janeImage+ '.png'" alt="Jane" />
              <figcaption>Jane</figcaption>
            </figure>
          </div>
          <div class="column">
            <figure>
              <img :src="'/images/' + userImage+ '.png'" alt="You" />
              <figcaption>You</figcaption>
            </figure>
          </div>
        </div>
        <br />
        <br />
        <button @click="playGame(0)" class="btn btn-info">Play again please</button>
        <div v-for="round in rounds" :key="round.number">
          <div v-if="round.number==1">
            <h4>Results Summary:</h4>
          </div>

          <div>
            <show-result
              v-bind:computer="round.computer"
              v-bind:player="round.player"
              v-bind:verdict="round.verdict"
            ></show-result>
          </div>
        </div>

        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import IntroScreen from "./components/IntroScreen.vue";
import ShowResult from "./components/ShowResult.vue";
export default {
  name: "app",
  components: {
    IntroScreen,
    ShowResult
  },
  data: function() {
    return {
      //  Initialize which sections of the html to show
      showIntro: true,
      showGame: false,
      sayGoodbye: false,
      showVerdict: false,

      // Initialize the choices
      userChoice: "Betray",
      computerChoice: "",
      choices: ["Betray", "Silent"],

      // Initialize the verdict
      verdict: "",
      janeImage: "",
      userImage: "",
      // keep track of results
      rounds: [],
      round: 1
    };
  },
  methods: {
    playGame: function(anumber) {
      // start up the game

      if (anumber == 0) {
        this.sayGoodbye = false;
        this.showIntro = false;
        this.showGame = true;
        this.showVerdict = false;
        this.computerChoice = "";
        this.janeImage = "";
        this.userImage = "";
      } else {
        this.sayGoodbye = true;
        this.showIntro = false;
      }
    },

    //     endGame: function () {
    //       // end the game with a goodbye message
    //     this.sayGoodbye = true;

    // },

    runSim: function() {
      // figure out the verdicts based on input
      this.computerChoice = this.choices[Math.floor(Math.random() * 2)];

      // If both Betray then both get 6 years in prison
      if (this.computerChoice == "Betray" && this.userChoice == "Betray") {
        this.verdict = "Both you and Jane will spend the next 6 years in jail";
        this.janeImage = "jail";
        this.userImage = "jail";

        // if computer betrays but user silent: computer goes free but user goes to prison
      } else if (
        this.computerChoice == "Betray" &&
        this.userChoice == "Silent"
      ) {
        this.verdict =
          "Jane will be set free and you will serve three years in prison";
        this.janeImage = "walkaway";
        this.userImage = "jail";

        // if computer is silent and user betrays: user is set free computer to jail
      } else if (
        this.computerChoice == "Silent" &&
        this.userChoice == "Betray"
      ) {
        this.verdict =
          "You will be set free and Jane will serve three years in prison";
        this.janeImage = "jail";
        this.userImage = "walkaway";

        // if both silent both go to jail for a short period.
      } else {
        this.verdict = "Since you both will spend 1 year in jail for lottering";
        this.janeImage = "jail";
        this.userImage = "jail";
      }
      this.showGame = false;
      this.showVerdict = true;
      // store results
      this.rounds.push({
        number: this.round++,
        computer: this.computerChoice,
        player: this.userChoice,
        verdict: this.verdict
      });
    },

    loadGame: function() {
      //start over the game
      this.showGame = true;
      this.showVerdict = false;
    }
  }
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
/* from w3schools.com */
.column {
  flex: 50%;
  padding: 5px;
}

.row {
  display: flex;
}

/* new html5 figure and figcaption */
figure {
  text-align: center;
  font-style: italic;
  font-size: smaller;
  color: blue;
  border: thin silver solid;
}
[v-cloak] {
  display: none;
}
</style>
