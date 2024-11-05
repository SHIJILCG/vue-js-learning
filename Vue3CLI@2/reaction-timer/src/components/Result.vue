<template>
  <div class="Result">
    <p>Reaction Time : {{ reactionTime }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rank: null,
    };
  },
  props: ["reactionTime"],
  mounted() {
    if (this.reactionTime < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.reactionTime < 400) {
      this.rank = "Radpid Feflexes";
    } else {
      this.rank = "Snail pace....";
    }
  },
};
</script>

<style scoped>
.Result {
  background: red;
  padding: 30px;
  color: white;
  margin-top: 30px;
}
.rank {
  font-size: 1.4rem;
  color: green;
  font-weight: bold;
}
</style>
