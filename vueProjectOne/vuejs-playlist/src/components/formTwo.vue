<template>
  <div>
    <form-Helper>
      <div slot="form-header">
        <h3>Form Two-Log In</h3>
        <p>Enter Your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required />
        <input type="text" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handelSubmit">Login</button>
      </div>
    </form-Helper>
  </div>
</template>

<script>
import formHelper from "./formHelper.vue";
export default {
  components: {
    "form-Helper": formHelper,
  },
  data() {
    return {};
  },
  methods: {
    handelSubmit: function () {
      alert("thanks for logging in (form two)");
    },
  },
}
</script>
