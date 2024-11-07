<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="loading">{{ loading }}</div>
    <PostList v-if="posts.length" :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load, loading } = getPosts();
    load();

    return { posts, error, loading };
  },
};
</script>
