import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlog.vue";
import singleBlog from "./components/SingleBlog.vue";

export default [
  { path: "/", component: showBlog },
  { path: "/add", component: addBlog },
  { path: "/blog/:id", component: singleBlog },
];
    