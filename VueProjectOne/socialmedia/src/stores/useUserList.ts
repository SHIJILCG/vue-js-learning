import type { UserDetailsType } from "@/type/userDetailsType";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserList = defineStore("userlist", () => {
  const UserList = ref<UserDetailsType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://gorest.co.in/public/v2/users");
      UserList.value = await response.json();
      // console.log(await response.json());
    } catch (error) {
      console.log("error occured", error);
    }
  };

  return { UserList, fetchData };
});
