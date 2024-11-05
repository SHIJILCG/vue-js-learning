<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome......</p>
    <teleport to=".modals" v-if="showModal">
      <modal theme="sale" @close="togglmodal">
        <h1>ninja Giveaway</h1>
        <p>Grab your ninja for half price</p>
        <template v-slot:links>
          <a href="/">Click here</a>
          <a href="/sd">Click here plaease</a>
        </template>
      </modal>
    </teleport>
    <teleport to=".modals" v-if="showModalTwo">
      <modal @close="togglmodalTwo">
        <h1>Sing up ro the newsletter</h1>
        <p>For updates and promo codes!</p>
      </modal>
    </teleport>
    <button @click="togglmodal">open modal</button>
    <button @click="togglmodalTwo">open modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App :)",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    togglmodal: function () {
      this.showModal = !this.showModal;
    },
    togglmodalTwo: function () {
      this.showModalTwo = !this.showModalTwo;
    },
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
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.modal h1 {
  color: red;
}
</style>
