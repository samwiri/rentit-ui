<template>
  <v-app>
    <custom-notification />
    <v-navigation-drawer v-model="drawer" app dark color="dark lighten-2">
      <v-toolbar
        color="dark lighten-2"
        outlined
        flat
        tile
        class="items-center justify-center"
        :elevation="0"
      >
        <v-toolbar-title>
          <div class="flex items-center justify-around mt-5">
            <span>
              <v-icon size="50" color="primary">mdi-home-circle-outline</v-icon>
            </span>

            <span class="text-2xl font-extrabold ml-4">Rentals</span>
          </div>
        </v-toolbar-title>
      </v-toolbar>

      <v-list tile class="mt-5">
        <template v-for="item in items">
          <v-list-item
            v-if="item.text"
            :key="item.text"
            link
            :to="item.path"
            active-class="primary darken-2"
          >
            <v-list-item-action>
              <v-icon color="grey lighten-2">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat class="md:bg-white bg-gray-100">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="!$vuetify.breakpoint.lgAndUp" />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn text large>
        <v-avatar size="32px">
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" />
        </v-avatar>
        <span v-if="$vuetify.breakpoint.lgAndUp">
          Ahimbisibwe Roland
        </span>

        <v-icon large>
          mdi-chevron-down
        </v-icon>
      </v-btn>
      <div class="mr-4"></div>
    </v-app-bar>
    <div class="fill-height mt-4" ref="$container">
      <v-content>
        <div class="px-10">
          <router-view />
        </div>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },

  mounted() {
    console.log(this.$refs.$container.offsetHeight);
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "mdi-home-analytics", text: "Dashboard", path: "/" },
      { icon: "mdi-view-dashboard-outline", text: "Products", path: "/products" },
      { icon: "mdi-account-group-outline", text: "Tenants", path: "/tenants" },
      { icon: "mdi-history", text: "Payments", path: "/payments" },
    ],
  }),
};
</script>
