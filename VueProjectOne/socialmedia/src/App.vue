<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<template>
  <div class="appContainer">
    <h1>LinkUp</h1>
    <router-view />
  </div>
</template>

<style scoped>
.appContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.appContainer h1 {
  color: white;
  margin-bottom: 30px;
}
</style>
