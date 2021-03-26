import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from '@/plugins/vuetify' // path to vuetify export
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
const compiler = require('vue-template-compiler')

//Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// V-Masonry reference 
import { VueMasonryPlugin } from "vue-masonry";

Vue.config.productionTip = false;
Vue.use(VueMasonryPlugin);
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
