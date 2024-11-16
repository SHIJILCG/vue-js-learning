<template>
  <button class="clearbutt" @click="handleButtonClick">Clear All</button>
</template>

<script lang="ts" setup>
const emit = defineEmits(["clearTodoArr"]);

const handleButtonClick = () => {
  emit("clearTodoArr");
};
</script>

<style scoped>
.clearbutt {
  position: absolute;
  right: 0px;
  top: 40px;
  background: rgb(119, 118, 118);
  padding: 5px 10px;
  border-radius: 5px;
}
.clearbutt:active {
  transform: scale(0.9);
}
</style>
