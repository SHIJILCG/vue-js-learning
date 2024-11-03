export default {
  computed: {
    filteredBlogs: function () {
      return this.Blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
