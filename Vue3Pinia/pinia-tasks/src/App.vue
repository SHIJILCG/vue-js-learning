<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <div class="newTask-form">
      <TaskFrom />
    </div>
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="loading" v-if="isLoading">
      <p>Loading tasks...</p>
    </div>
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ totalCount }} task left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ favCount }} favs left to do</p>

      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <button @click="taskStore.$reset">reset</button>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";
import TaskFrom from "./components/TaskFrom.vue";
import { storeToRefs } from "pinia";

useTaskStore;
export default {
  components: { TaskDetails, TaskFrom },
  setup() {
    const taskStore = useTaskStore();

    const { tasks, isLoading, favCount, favs, totalCount } =
      storeToRefs(taskStore);
    taskStore.getTasks();
    const filter = ref("all");

    return { taskStore, filter, tasks, isLoading, favCount, favs, totalCount };
  },
};
</script>
