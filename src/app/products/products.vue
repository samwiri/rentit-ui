<template>
  <div class="px-5">
    <div class="md:tw-flex tw-items-center tw-justify-between tw-mt-5">
      <create-product-modal :is-open.sync="isCreating" @created="handleCreated(products, $event)" />
      <h1 class="headline font-bold mb-2 md:mb-0 ">Products</h1>
      <v-text-field
        class="tw-mb-4 md:tw-ml-10"
        hide-details
        rounded
        solo
        color="info"
        placeholder="Search"
        append-icon="mdi-magnify"
        clearable
      />
      <v-spacer />
      <v-btn @click="isCreating = true" color="primary" :block="$vuetify.breakpoint.xsOnly">
        <v-icon class="mr-1">mdi-book-plus-multiple</v-icon>
        New Product
      </v-btn>
    </div>

    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="product in products.results.value" :key="product.id">
        <single-product :product="product" />
      </v-col>
    </v-row>

    <infinite-loading @infinite="products.handler"></infinite-loading>
  </div>
</template>
<script>
/*eslint-disable*/
import SingleProduct from "./product";
import CreateProductModal from "./create";
import { useInfiniteData } from "@/services/http";

export default {
  components: { CreateProductModal, SingleProduct },
  setup() {
    return { products: useInfiniteData("api/v1/products?per_page=4") };
  },
  data: () => ({ isCreating: false }),
  methods: {
    handleCreated(exitingProducts, newProduct) {
      exitingProducts.prependResult(newProduct);
      this.isCreating = false;
      window.Notify.success("Product was created successfully");
    },
  },
};
</script>
