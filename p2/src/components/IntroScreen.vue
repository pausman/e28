<template>
  <div>
    The prisoner's dilemma is a standard example of a game analyzed in game theory that shows why two
    completely
    rational individuals might not cooperate, even if it appears that it is in their best interests to do
    so. It
    was originally framed by Merrill Flood and Melvin Dresher while working at RAND in 1950.
    <br />
    <br />
    <button @click="$emit('play-game',0)" class="btn btn-info">I want to Play!</button>
    <button @click="$emit('play-game',1)" class="btn btn-info">No Thanks!</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: {
    showIntro: {
      type: Boolean,
      default: true
    },
    sayGoodbye: {
      type: Boolean,
      default: false
    }
  },
  template: "#intro-screen"
};
</script>

<style>
</style>