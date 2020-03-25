import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#393856",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#BA4A16",
        info: "#00ACD3",
        success: "#33A51F",
        warning: "#E2C800",
      },
    },
  },
});
