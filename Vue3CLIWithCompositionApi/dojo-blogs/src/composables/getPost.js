import { ref } from "vue";

const getpost = (value) => {
  const post = ref(null);
  const error = ref(null);
  const loading = ref("loading");

  const load = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts/" + value);
      if (!response.ok) {
        throw Error("post does not exist");
      }
      loading.value = null;
      post.value = await response.json();
    } catch (err) {
      loading.value = null;
      error.value = err.message;
      console.log(err.message);
    }
  };
  return { load, post, error, loading };
};

export default getpost;
