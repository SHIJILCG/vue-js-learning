<script setup>
import ChildComponent from "@/components/ChildComponent.vue";
import { ref } from "vue";
const name = ref("shijil");
</script>

<template>
  <div>
    <ChildComponent
      :post="{ title: name }"
      :postName="{ PoatName: 'The Name Is' }"
    />
  </div>
</template>

<style scoped></style>
