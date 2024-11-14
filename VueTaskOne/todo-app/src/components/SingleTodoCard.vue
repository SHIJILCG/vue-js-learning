<template>
  <div class="titlecard">
    <p>{{ title }}</p>
    <button @click="handButtonClick">✎</button>
  </div>
</template>

<script lang="ts" setup>
import type { CardType } from "@/types/cardtype";
import { toRefs } from "vue";

const emit = defineEmits(["handleEditbuttonClick"]);
const props = defineProps<CardType>();
const { title, id } = toRefs(props);

const handButtonClick = () => {
  emit("handleEditbuttonClick", { title: title.value, id: id.value });
};
</script>

<style scoped>
.titlecard {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 10px;
  height: 60px;
  background: rgb(61, 61, 61);
  border-radius: 10px;
  align-items: center;
  color: rgb(211, 209, 209);
  margin-bottom: 10px;
}
.titlecard button {
  transform: rotate(80deg);
  font-size: 20px;
}
</style>
