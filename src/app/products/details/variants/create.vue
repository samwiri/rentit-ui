<template>
  <v-dialog :value="isOpen" max-width="400px" scrollable persistent @input="close">
    <v-card flat tile>
      <v-card-title class="tw-justify-between">
        <h4 class="title tw-font-semibold">New Product</h4>
        <v-btn icon color="primary" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <form
          @submit.prevent="
            form.post(`/api/v1/products/${product.id}/variants`, {
              onSuccess: response => $emit('created', response.data),
            })
          "
        >
          <v-text-field
            label="Variant Indentifier"
            v-model="form.fields.identifier"
            :error-messages="form.errors.identifier"
            placeholder="Eg car number plate or room number"
            outlined
            prepend-inner-icon="mdi-account-circle-outline"
            required
            class="mt-6"
          />

          <v-btn
            color="primary"
            block
            type="submit"
            large
            :loading="form.loading.value"
            :disabled="form.loading.value"
          >
            <v-icon class="mr-1">mdi-account-plus-outline</v-icon>
            Save
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { useForm } from "@/services/forms";

export default {
  props: {
    isOpen: Boolean,
    product: Object,
  },
  setup() {
    const form = useForm();

    return { form };
  },
  methods: {
    close() {
      this.$emit("update:isOpen", false);
    },
  },
};
</script>
