import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { app } from "./config/firebaseConfig";

createApp(App).use(router).mount("#app");
