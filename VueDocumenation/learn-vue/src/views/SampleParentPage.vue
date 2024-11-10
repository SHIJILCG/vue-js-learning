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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,tae esse, fugiat quasi, doloribus asperiores velit
          voluptatem hic enim vero qui eum! A nesciunt eius repellendus fugiat!
        </p>
      </template>
    </ChildTwo>
  </div>
</template>
<style scoped></style>
