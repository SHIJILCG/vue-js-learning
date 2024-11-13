<script lang="ts">
import { storeToRefs } from "pinia";
import { useUserList } from "../stores/useUserList";
import { defineComponent } from "vue";
import UserCard from "../components/userCard.vue";

export default defineComponent({
  components: { UserCard },
  setup() {
    const useruserlist = useUserList();
    const { UserList } = storeToRefs(useruserlist);
    useruserlist.fetchData();
    return { UserList };
  },
});
</script>

<template>
  <div class="userlistview">
    <h2>UsersList:</h2>
    <div v-if="UserList.length">
      <UserCard v-for="user in UserList" :key="user.id" :user="user" />
    </div>
    <div v-else>
      <img src="../assets/grey-9026_256.gif" alt="" class="loading" />
    </div>
  </div>
</template>

<style scoped>
.userlistview h2 {
  text-align: left;
  margin-bottom: 30px;
}
.loading {
  width: 100px;
  height: 100px;
}
</style>
