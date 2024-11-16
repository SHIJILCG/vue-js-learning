<template>
  <div class="titlecard">
    <div class="cardinnerone">
      <input type="checkbox" v-model="checkValue" />
      <p>{{ title }}</p>
    </div>
    <button @click="handButtonClick">✎</button>
  </div>
</template>

<script lang="ts" setup>
import type { CardType } from "@/types/cardtype";
import { ref, toRefs, watch } from "vue";

const emit = defineEmits(["handleEditbuttonClick", "handleCheckClick"]);
const props = defineProps<CardType>();
const { title, id, isChecked } = toRefs(props);
const checkValue = ref<boolean>(isChecked.value);

const handButtonClick = () => {
  emit("handleEditbuttonClick", {
    title: title.value,
    id: id.value,
    isChecked: isChecked.value,
  });
};


watch(checkValue, () => {
  emit("handleCheckClick", {
    title: title.value,
    id: id.value,
    isChecked: checkValue.value,
  });
});
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
.cardinnerone {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
