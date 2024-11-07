<template>
  <div>
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="(tag, index) in post.tags" :key="index"> #{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    return { snippet };
  },
};
</script>

<style scoped>
div {
  width: 500px;
  background: #eee;
  padding: 10px;
  margin: 10px auto;
}
</style>
