<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isloggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isloggedIn.value = true;
    } else {
      isloggedIn.value = false;
    }
  });
});
const handleSingOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <div class="parent">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/sign-in">Sign In</router-link>
      <router-link to="/feed">Feed</router-link>
      <button @click="handleSingOut" v-if="isloggedIn">Sign out</button>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.parent {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  gap: 20px;
}

nav {
  display: flex;
  gap: 20px;
}
</style>
