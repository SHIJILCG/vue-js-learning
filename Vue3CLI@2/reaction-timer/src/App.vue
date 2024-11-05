<template>
  <div>
    <h1>Ninja Reaction Timer</h1>
    <button @click="start" :disabled="isplaying">Play</button>
    <Block v-if="isplaying" :delay="delay" @end="endGame" />
    <Result v-if="showReaction" :reactionTime="ReactionTime"></Result>
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: { Block, Result },
  data() {
    return {
      isplaying: false,
      delay: null,
      ReactionTime: null,
      showReaction: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isplaying = true;
      console.log(this.delay);
      this.showReaction = false;
    },
    endGame(value) {
      this.ReactionTime = value;
      this.isplaying = false;
      this.showReaction = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
