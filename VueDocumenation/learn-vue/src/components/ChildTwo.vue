<template>
  <div>
    <h1>Child Component</h1>
    <div v-if="slots.content">
      <slot name="content"></slot>
    </div>
    <button @click="handleClick">ClickMe</button>
  </div>
</template>

<script setup>
import { useSlots } from "vue";
 
const emit = defineEmits();
const slots = useSlots();

const handleClick = () => {
  emit("childEvent", { message: "hello every buddy" });
};
</script>

<style scoped></style>
