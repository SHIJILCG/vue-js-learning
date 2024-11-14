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
    <div class="cardcollection" v-if="!editCardDetails">
      <template v-for="card in reverseTodoArr" :key="card.id">
        <SingleTodoCard
          :title="card.title"
          :id="card.id"
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
        @handle-save-click="handleChangeTodoCard"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import AddNewCardButton from "./AddNewCardButton.vue";
import NewCardInputContainer from "./NewCardInputContainer.vue";
import type { CardType } from "@/types/cardtype";
import EditContianer from "./EditContianer.vue";
import SingleTodoCard from "./SingleTodoCard.vue";

const isNewCard = ref(false);
const arrTodoCards = ref<CardType[]>([]);
const editCardDetails = ref<null | CardType>(null);
const reverseTodoArr = computed(() => [...arrTodoCards.value].reverse());

const handleNewTodoCard = (value: string) => {
  arrTodoCards.value.push({ id: arrTodoCards.value.length + 1, title: value });
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
.wrapper {
  padding-top: 10px;
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
.cardcollection {
  width: 100%;
  max-height: 300px;
  overflow: scroll;
  scrollbar-width: none;
}
</style>
