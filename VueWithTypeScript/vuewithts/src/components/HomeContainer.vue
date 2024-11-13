<template>
  <div>{{ props.name }} - {{ props.age }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ name: string; age: number }>();
</script>

<style></style>
