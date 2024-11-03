<template>
  <div>
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div
      v-for="(blog, index) in filteredBlogs"
      :key="index"
      class="single-blog"
    >
      <h2>{{ blog.title | uppercase }}</h2>
    </div>
  </div>
</template>

<script>
import seatchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      Blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        this.Blogs = data.body.slice(0, 10);
      });
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  mixins: [seatchMixin],
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
