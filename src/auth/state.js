import Vue from "vue";
import get from "lodash/get";

export default new Vue({
  data: () => ({
    user: null,
    loadingUser: false,
    loadedInitialUser: false,
  }),

  methods: {
    setUser(user) {
      this.user = user;
      this.loadedinitialUser = true;
      this.loadingUser = false;
    },
  },
  computed: {
    isAuthenticated() {
      return !!(this.user && !this.loadedInitialUser);
    },

    accounts() {
      return [];
    },

    selectedAcount() {
      return get(this.user, "account", null);
    },
  },
});
