<template>
  <div>
    <div>Details Page</div>
    <div v-if="post" class="post">
      <h2>{{ post.title }}</h2>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="loading">{{ loading }}</div>
  </div>
</template>

<script>
import getpost from "@/composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { load, error, loading, post } = getpost(props.id);
    load();
    return { post, error, loading };
  },
};
</script>
<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p { 
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
