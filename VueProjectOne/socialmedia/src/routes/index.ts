import UserList from "@/views/UserList.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", name: "Home", component: UserList }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
