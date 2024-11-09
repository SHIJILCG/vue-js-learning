<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="cardinner">
    <h2>{{ props.product.name }}</h2>
    <div class="cardcontentpart" v-if="props.product.data">
      <span class="detailsheader">Details</span>
      <div v-if="props.product.data" class="productDetailsContainer">
        <span
          v-for="(item, index) in Object.entries(props.product.data)"
          :key="index"
          class="productDetails"
          >{{ item[0].toUpperCase() }} : {{ item[1] }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.productDetailsContainer {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: #353131;
}
.productDetails {
  display: inline-block;
}
h2 {
  widows: 100%;
  text-align: center;
  color: #333;
}
.detailsheader {
  font-weight: 800;
}
</style>
