import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from "./store";
import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = Vue.config.devtools ? "http://localhost:8080" : "https://e-commerce-front.herokuapp.com";

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
})
.$mount('#app')
