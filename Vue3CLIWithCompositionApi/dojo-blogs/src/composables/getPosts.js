import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const loading = ref("loading");

  const load = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts");
      if (!response.ok) {
        throw Error("no data available");
      }
      loading.value = null;
      posts.value = await response.json();
    } catch (err) {
      loading.value = null;
      error.value = err.message;
      console.log(err.message);
    }
  };
  return { load, posts, error, loading };
};

export default getPosts;
