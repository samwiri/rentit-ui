import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueCompositionApi from "@vue/composition-api";
import InfiniteLoading from "vue-infinite-loading";

import auth from "@/auth/state";

import "./styles/tailwind.scss";

import { http } from "./services/http";

import "./services/notifications";

Vue.prototype.$http = http;

Vue.prototype.$auth = auth;

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

Vue.use(InfiniteLoading);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
