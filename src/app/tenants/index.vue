<template>
  <div class="mt-4 h-full">
    <div class="mb-5 md:flex items-center">
      <h2 class="text-2xl font-bold">Tenants</h2>
      <new-tenant :is-open.sync="isCreating" @created="handleCreated" />
      <v-spacer />
      <v-text-field
        hide-details
        outlined
        flat
        placeholder="Search"
        :height="0"
        solo
        append-icon="mdi-magnify"
        rounded
        clearable
      />
      <v-spacer />
      <v-btn
        color="primary"
        @click="isCreating = !isCreating"
        class="mb-3 md:mb-0"
        :block="$vuetify.breakpoint.xsOnly"
      >
        New Tenant
      </v-btn>
    </div>

    <v-divider />

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone Number</th>
            <th class="text-left">Dues</th>
            <th class="text-left">Product</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id" class="mb-5 ">
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
  </div>
</template>
<script>
/*eslint-disable*/
import { http } from "@/services/http";
export default {
  components: {
    NewTenant: require("./create").default,
  },
  mounted() {
    http.get("api/v1/tenants").then(({ data: { data } }) => {
      this.data = data;
    });
  },
  data() {
    return {
      data: [],
      isCreating: false,
    };
  },
  methods: {
    handleCreated() {
      this.isCreating = false;
      window.Notify.success("Tenant was created successfully");
    },
  },
};
</script>
