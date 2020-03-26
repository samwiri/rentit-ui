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
        white: "#f9f9f9",
        dark: "#0a0c0e",
        primary: "#6fc594",
        accent: "#5f8973",
        warning: "#E2C800",
        success: "#33A51F",
        error: "#BA4A16",
        info: "#00ACD3",
      },
    },
  },
});

// $swatch_1: #f9f9f9;
// $swatch_2: #8997a0;
// $swatch_3: #0a0c0e;
// $swatch_4: #506062;
// $swatch_5: #c1cbb7;
// $swatch_6: #5f8973;
// $swatch_7: #6fc594;
