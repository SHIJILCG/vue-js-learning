<template>
  <div class="editContainer">
    <textarea
      name=""
      id=""
      v-model="editedTitle"
      class="editTextArea"
    ></textarea>
    <button class="save" @click="handlebuttonClick">Save</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";

const prop = defineProps<{ title: string; id: number }>();
const { title, id } = toRefs(prop);
const editedTitle = ref<string>(title.value);
const emit = defineEmits(["handleSaveClick"]);

const handlebuttonClick = () => {
  emit("handleSaveClick", { title: editedTitle.value, id: id.value });
};
</script>

<style scoped>
.editContainer{
   display: flex;
   flex-direction: column;
   gap: 10px;
}
.editTextArea {
  background: rgb(71, 71, 71);
  width: 100%;
  min-height: 100px;
  max-height: 150px;
  overflow: scroll;
  scrollbar-width: none;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  flex: 1;
}
.save {
  background: rgb(27, 117, 190);
  padding: 8px 20px;
  border-radius: 8px;
  color: black;
  font-weight: 800;
  width: 80px;
}
.save:active {
  transform: scale(0.9);
}
</style>
