<template>
  <div>
    <ul>
      <li>Jane's Choice: {{ computer }}</li>
      <li>Your Choice: {{ player }}</li>
      <li>Verdict: {{verdict}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    computer: {
      type: String,
      default: ""
    },
    player: {
      type: String,
      default: ""
    },
    verdict: {
      type: String,
      default: ""
    }
  },
  template: "#show-result"
};
</script>
<style scoped>
ul {
  list-style-type: square;
  background: blue;
  padding: 20px;
}
li {
  background: blueviolet;
}
</style>