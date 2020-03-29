<template>
  <div class="tw-h-full tw-bg-gray-100 ">
    <product-stats />
    <products-component />
  </div>
</template>
<script>
import ProductsComponent from "./products";
import ProductStats from "./stats";

export default {
  components: { ProductStats, ProductsComponent },

  methods: {
    handleCreated(product) {
      console.log(product);
    },
  },
};
</script>
