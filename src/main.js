import Vue from "vue";
import App from "./App.vue";
import AppButton from "@/components/UI/AppButton";

// global components
Vue.component("AppButton", AppButton);

// main style
import "@/assets/style/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
