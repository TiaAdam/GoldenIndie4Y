import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from '@/plugins/vuetify' // path to vuetify export

import { VueMasonryPlugin } from "vue-masonry";


Vue.config.productionTip = false;
Vue.use(VueMasonryPlugin);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
