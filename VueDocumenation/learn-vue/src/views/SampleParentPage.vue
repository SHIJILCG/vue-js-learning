<script setup>
import ChildTwo from "@/components/ChildTwo.vue";
import { provide, ref } from "vue";
const message = ref("Hello from the Provider");
provide("message", message);

const handleClick = (data) => {
  console.log(data.message);
};
</script>

<template>
  <div>
    <h1>Provider Component</h1>
    <p>{{ message }}</p>
    <ChildTwo @childEvent="handleClick">
      <template #content>
        <h2>This is a slote code</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          facere? Doloremque eius magnam id totam est fugiat explicabo quis
          nesciunt iure distinctio illo consequuntur, reprehenderit, officia
          porro quod libero. Mollitia harum incidunt voluptate aliquam molestias
          amet aperiam. Ex, aperiam, qui numquam iste ratione adipisci soluta
          quibusdam eum exercitationem error blanditiis est, modi deleniti
          mollitia non reiciendis ipsam tempore quia commodi nesciunt dolor rem.
          Sunt corrupti eaque et maiores. Minima, consequatur dolore? Facere
          sequi aperiam porro maxime vitae quae provident eveniet doloremque,
          distinctio beatae esse, fugiat quasi, doloribus asperiores velit
          voluptatem hic enim vero qui eum! A nesciunt eius repellendus fugiat!
        </p>
      </template>
    </ChildTwo>
  </div>
</template>

<style scoped></style>
