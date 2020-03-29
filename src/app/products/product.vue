<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      class="mx-auto tw-mb-3 tw-cursor-pointer"
      :elevation="hover ? 10 : 0"
      @click="$router.push({ name: 'products.show', params: { id: product.id } })"
    >
      <v-list-item>
        <v-list-item-content>
          <div class="headline mb-4">{{ product.name }}</div>
          <v-list-item-title class="sub-title-2 tw-mb-2">Total dues</v-list-item-title>
          <v-list-item-subtitle class="tw-text-black tw-text-2xl">
            USD 100,000,000
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <v-icon size="80" color="grey lighten-2" v-text="icon"></v-icon>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-row class="tw-px-3">
        <v-col md="6">
          <div class="tw-flex">
            <v-icon>
              mdi-grid
            </v-icon>
            <div class="tw-mx-2"><span class="tw-text-bold tw-text-2xl">2</span> variants</div>
          </div>
        </v-col>
        <v-col md="6">
          <div class="tw-flex">
            <v-icon>
              mdi-account-group-outline
            </v-icon>
            <div class="tw-mx-2"><span class="tw-text-bold tw-text-2xl">2</span> Tenants</div>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div>
        <v-list-item v-for="item in items2" :key="item.title">
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  data: () => ({
    hover: false,
    items2: [
      {
        icon: "mdi-account-cash",
        iconClass: "primary white--text",
        title: "Total Collections",
        subtitle: "1000,0000",
      },
      {
        icon: "mdi-cash-minus",
        iconClass: "error lighten-3 white--text",
        title: "Total dues",
        subtitle: "Jan 10, 2014",
      },
    ],
  }),
  computed: {
    icon() {
      return this.product.offering === "house" ? "mdi-shield-home-outline" : "mdi-rv-truck";
    },
  },
};
</script>
