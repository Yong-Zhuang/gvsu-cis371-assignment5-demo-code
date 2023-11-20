import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "./style.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";
import App from "./App.vue";
import { initData } from "./data-controller";
import router from "./router";

initData();

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi, fa },
  },

  components,
  directives,
});
createApp(App).use(vuetify).use(router).mount("#app");
