<script setup>
import { onErrorCaptured, onMounted, ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const ProductObject = ref([]);

onMounted(() => {
  async function FetchData() {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      const result = await response.json();
      ProductObject.value = result;
    } catch (error) {
      console.log("error occured");
    }
  }
  FetchData();
});

onErrorCaptured(() => {
  console.log("error occured during render");
});
</script>

<template>
  <div class="topparent">
    <h1>E-shop</h1>
    <div class="cardparent" v-if="ProductObject.length">
      <span v-for="product in ProductObject" :key="product.id" class="card">
        <ProductCard :product="product" />
      </span>
    </div>
    <div v-else class="notfound">No item found</div>
  </div>
</template>

<style scoped>
.topparent {
  display: flex;
  flex-direction: column;
}
h1,
.notfound {
  width: 100%;
  text-align: center;
}
.cardparent {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.card {
  width: 300px;
  margin: 20px auto;
  background: lightblue;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
