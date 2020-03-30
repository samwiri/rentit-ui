<template>
  <div class="tw-mt-5 h-full">
    <div class="mb-5 md:tw-flex tw-items-center ">
      <h2 class="headline tw-font-black tw-mb-2 md:tw-mb-0">Variants</h2>
      <new-tenant :is-open.sync="isCreating" @created="handleCreated(data, $event)" />
      <v-text-field
        hide-details
        class="md:tw-ml-10 tw-mb-3 md:tw-mb-0"
        placeholder="Search"
        solo
        append-icon="mdi-magnify"
        rounded
        clearable
      />
      <v-spacer />
      <v-btn color="primary" @click="isCreating = !isCreating" :block="$vuetify.breakpoint.xsOnly">
        New Variant
      </v-btn>
    </div>

    <v-divider />

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Identifier</th>
            <th class="text-left">Tenants</th>
            <th class="text-left">Current Tenant</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data.results.value" :key="item.id" class="mb-5 ">
            <td>
              <v-avatar size="60" item large>
                <v-icon size="50" color="grey lighten-1"
                  >mdi-account-circle-outline</v-icon
                ></v-avatar
              >
            </td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone_number }}</td>
            <td>{{ item.total_dues }}</td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider class="tw-mb-1 md:tw-mb-3" />
    <infinite-loading @infinite="data.handler"></infinite-loading>
  </div>
</template>
<script>
import { useInfiniteData } from "@/services/http";
export default {
  components: {
    NewTenant: require("./create").default,
  },

  setup() {
    return { data: useInfiniteData("api/v1/tenants") };
  },

  data() {
    return {
      isCreating: false,
    };
  },
  methods: {
    handleCreated(existingData, tenant) {
      existingData.prependResult(tenant);
      this.isCreating = false;
      window.Notify.success("Tenant was created successfully");
    },
  },
};
</script>
