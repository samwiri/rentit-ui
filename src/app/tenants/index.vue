<template>
  <div class="mt-4 h-full relative">
    <div class="mb-5 md:flex items-center " style="bottom:100;">
      <h2 class="text-2xl font-bold mb-3 md:mb-0">Tenants</h2>
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
        class="mt-5 md:mt-0"
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
            <th class="text-left  sticky">#</th>
            <th class="text-left  sticky">Name</th>
            <th class="text-left  sticky">Email</th>
            <th class="text-left  sticky">Phone Number</th>
            <th class="text-left  sticky">Dues</th>
            <th class="text-left  sticky">Product</th>
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
    const data = useInfiniteData("api/v1/tenants");

    console.log(data.results);

    return { data };
  },

  data() {
    return {
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
