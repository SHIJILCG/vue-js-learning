<template>
  <div class="addnewcard" @click="handlbuttonclik">
    <span>+</span>
    <p>Add a card</p>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["customEvent"]);


const handlbuttonclik = () => {
  emit("customEvent");
};
</script>

<style scoped>
.addnewcard {
  display: flex;
  padding: 10px 10px;
  gap: 15px;
  font-size: 18px;
  font-weight: 800;
  color: #b6b6b6;
  align-items: center;
}
.addnewcard:hover {
  color: #707070;
}
.addnewcard:active {
  transform: scale(0.997);
}
.addnewcard span {
  font-size: 25px;
}
</style>
