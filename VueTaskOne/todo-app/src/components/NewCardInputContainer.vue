<template>
  <div class="newcardinputcontainer">
    <div class="input">
      <textarea
        class="textarea"
        placeholder="Enter a title for this card..."
        v-model="inputtext"
      ></textarea>
    </div>
    <div class="buttons">
      <button @click="handleaddcardbutton">Add card</button>
      <span @click="handlCancelClick">+</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref} from "vue";

const emit = defineEmits(["customEvent", "handleNewcardClick"]);
const inputtext = ref<string>("");


const handlCancelClick = () => {
  emit("customEvent");
};
const handleaddcardbutton = () => {
  if (inputtext.value !== "") {
    emit("handleNewcardClick", inputtext.value);
    inputtext.value = "";
  }
};
</script>

<style scoped>
.input,
.textarea {
  width: 100%;
}
.textarea {
  background: rgb(58, 58, 58);
  max-height: 200px;
  min-height: 80px;
  overflow: scroll;
  scrollbar-width: none;
  border-radius: 18px;
  padding: 10px;
  border: 0;
  outline: none;
  font-size: 20px;
}
.buttons {
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
}
.buttons button {
  padding: 10px 20px;
  background: rgb(12, 96, 153);
  border-radius: 5px;
  color: black;
  font-weight: 800;
  font-size: 20px;
  height: 50px;
}
.buttons button:active {
  transform: scale(0.9);
}
.buttons span {
  transform: rotate(45deg);
  font-size: 45px;
  color: rgb(122, 122, 122);
}
</style>
