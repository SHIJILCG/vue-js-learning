<template>
  <div class="post-list">
    <div v-for="(post, index) in posts" :key="index">
      <single-post :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup() {
    onMounted(() => console.log("component mounted"));
  },
};
</script>

<style></style>
