import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
