<template>
  <div>
    <app-headerLink></app-headerLink>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/HeaderPart.vue";
export default {
  components: {
    "app-headerLink": Header,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
body {
  margin: 0;
}
</style>
