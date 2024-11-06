<template>
  <div>
    <SingupForm />
  </div>
</template>

<script>
import SingupForm from "./components/SingupForm.vue";
export default {
  components: { SingupForm },
  data() {
    return {
      
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #eee;
  margin: 0;
}
</style>
