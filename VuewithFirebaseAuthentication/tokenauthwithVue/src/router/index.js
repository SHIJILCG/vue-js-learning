import Feed from "@/views/Feed.vue";
import Home from "@/views/Home.vue";
import Registration from "@/views/Registration.vue";
import Singin from "@/views/Singin.vue";
import { getAuth } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/register", name: "Register", component: Registration },
  { path: "/sign-in", name: "Sign", component: Singin },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((recods) => recods.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("you dont have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
