<template>
  <div class="home">
    <div class="homeinner">
      <h1>Ask yes/no question</h1>
      <input
        type="text"
        placeholder="Put a ? at the end question"
        v-model="question"
        :disabled="isLoading"
      />
      <div class="answer" v-if="answer">{{ answer }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const isLoading = ref(false);
const answer = ref("");
const question = ref(" ");

watch(question, async () => {
  if (question.value.includes("?")) {
    isLoading.value = true;
    answer.value = "Thinking";
    try {
      const response = await fetch("https://yesno.wtf/api");
      answer.value = (await response.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API " + error;
    } finally {
      isLoading.value = false;
      question.value = "";
    }
  }
});
</script>

<style scoped>
.home {
  background-image: url(https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}
.homeinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  min-width: 500px;
  padding: 15px 10px;
  border-radius: 30px;
  background: #000;
  color: white;
  border: none;
  outline: none;
  font-size: 15px;
}
.answer {
  width: 500px;
  min-height: 50px;
  background: #eee;
  margin-top: 20px;
  border-radius: 20px;
  color: black;
  display: flex;
  align-items: center;
  padding: 0px 20px;
}
input::placeholder {
  color: white;
}
</style>
