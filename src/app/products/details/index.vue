<template>
  <div v-if="product" class="tw-px-2 md:tw-px-5">
    <h1 class="tw-text-black title">{{ product.name }}</h1>
    <product-variants :product="product" />
  </div>
  <div v-else class="tw-flex tw-justify-center">
    <v-progress-circular :size="50" indeterminate color="primary"></v-progress-circular>
  </div>
</template>
<script>
import ProductVariants from "./variants";
export default {
  components: { ProductVariants },

  props: { id: [Number, String] },
  data: () => ({ product: null }),
  mounted() {
    this.$http.get(`api/v1/products/${this.id}`).then(({ data }) => (this.product = data));
  },
};
</script>
