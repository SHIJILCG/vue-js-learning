<template>
  <div class="todocard">
    <div class="todocardinner">
      <ClearButton v-if="isClear" @clear-todo-arr="handleClearTodoArr" />
      <header>
        <h3>Blocked</h3>
        <div
          class="threedot"
          @click="isClear = !isClear"
          v-if="!editCardDetails"
        >
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </header>
      <div class="cardcollection" v-if="!editCardDetails">
        <template v-for="card in reverseTodoArr" :key="card.id">
          <SingleTodoCard
            :title="card.title"
            :id="card.id"
            :isChecked="card.isChecked"
            @handle-editbutton-click="handleEditTodoCard"
          />
        </template>
      </div>
      <div class="wrapper" v-if="!editCardDetails">
        <AddNewCardButton
          v-if="!isNewCard"
          @customEvent="isNewCard = !isNewCard"
        />
        <NewCardInputContainer
          v-else
          @customEvent="isNewCard = !isNewCard"
          @handle-newcard-click="handleNewTodoCard"
          :editvalue="editCardDetails"
        />
      </div>
      <div class="editor" v-if="editCardDetails">
        <EditContianer
          :title="editCardDetails.title"
          :id="editCardDetails.id"
          :isChecked="editCardDetails.isChecked"
          @handle-save-click="handleChangeTodoCard"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import AddNewCardButton from "./AddNewCardButton.vue";
import NewCardInputContainer from "./NewCardInputContainer.vue";
import type { CardType } from "@/types/cardtype";
import EditContianer from "./EditContianer.vue";
import SingleTodoCard from "./SingleTodoCard.vue";
import ClearButton from "./ClearButton.vue";

const isNewCard = ref(false);
const isClear = ref(false);
const arrTodoCards = ref<CardType[]>([]);
const editCardDetails = ref<null | CardType>(null);
const reverseTodoArr = computed(() => [...arrTodoCards.value].reverse());

watchEffect(() => {
  console.log(arrTodoCards.value);
});

const handleNewTodoCard = (value: string) => {
  arrTodoCards.value.push({
    id: arrTodoCards.value.length + 1,
    title: value,
    isChecked: false,
  });
  isNewCard.value = false;
};

const handleEditTodoCard = (tocardDetails: CardType) => {
  editCardDetails.value = tocardDetails;
};

const handleChangeTodoCard = (value: CardType) => {
  const editedArray = arrTodoCards.value.map((card: CardType) =>
    card.id === value.id ? value : card
  );
  arrTodoCards.value = editedArray;
  editCardDetails.value = null;
};

const handleClearTodoArr = () => {
  arrTodoCards.value = [];
  isClear.value = false;
};
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
.todocardinner {
  position: relative;
  width: 100%;
  height: 100%;
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
.wrapper {
  padding-top: 10px;
}
.threedot {
  display: flex;
  flex-wrap: nowrap;
  gap: 1px;
  font-size: 20px;
  cursor: pointer;
}
.threedot span {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
}
.cardcollection {
  width: 100%;
  max-height: 300px;
  overflow: scroll;
  scrollbar-width: none;
}
</style>