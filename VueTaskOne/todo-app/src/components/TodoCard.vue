<template>
  <div class="todocard">
    <header>
      <h3>Blocked</h3>
      <div class="threedot">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </header>
    <div class="cardcollection"></div>
    <div class="wrapper">
      <AddNewCardButton v-if="!isnewCard" />
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AddNewCardButton from "./AddNewCardButton.vue";

const isnewCard = ref(false);
</script>

<style scoped>
.todocard {
  position: absolute;
  max-width: 600px;
  min-width: 450px;
  background: black;
  color: white;
  padding: 20px 10px;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.todocard header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}
.todocard header h3 {
  font-weight: 800;
}
.threedot {
  display: flex;
  flex-wrap: nowrap;
  gap: 1px;
  font-size: 20px;
}
.threedot span {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
}
</style>
