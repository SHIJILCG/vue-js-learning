<template>
  <div id="show-blogs">
    <h1>All Blog Article</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div
      class="single-blog"
      v-for="(Blog, index) in filteredBlogs"
      :key="index"
    >
      <router-link v-bind:to="'/blog/' + Blog.id">{{
        Blog.title | uppercase
      }}</router-link>
      <article>{{ Blog.content }}</article>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      Blogs: [],
      search: "",
    };
  },
  methods: {},
  async created() {
    const blogsCollection = collection(db, "posts");
    const snapshot = await getDocs(blogsCollection);

    this.Blogs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(this.Blogs);
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
