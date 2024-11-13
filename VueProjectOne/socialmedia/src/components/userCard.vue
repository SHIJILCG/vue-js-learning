<script lang="ts">
import type { UserDetailsType } from "../type/userDetailsType";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserDetailsType>,
      requrired: true,
    },
  },
  setup(props) {},
});
</script>

<template>
  <div class="usercard">
    <span class="namespan">{{ user?.name }}</span>
    <span class="email">{{ user?.email }}</span>
  </div>
</template>

<style scoped>
.usercard {
  background: rgb(12, 179, 221);
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 500px;
  border-radius: 10px;
}
.usercard:hover {
  transform: scale(1.02);
}
.namespan {
  color: #000;
  font-weight: 800;
  font-size: 17px;
}
.email {
  color: rgb(97, 91, 91);
}
</style>
