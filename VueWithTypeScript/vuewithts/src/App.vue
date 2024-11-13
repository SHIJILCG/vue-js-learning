<template>
  <div>
    <div>{{ name }} - {{ age }}</div>
    <home-container name="fdsf" :age="43" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HomeContainer from "./components/HomeContainer.vue";
const name = ref<string>("shijil");
const age = ref<number>(20);
</script>

<style scoped></style>
