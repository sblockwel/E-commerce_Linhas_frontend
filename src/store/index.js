import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import product from "./modules/product"
import order from "./modules/order"

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    product,
    order
  },
  plugins: [createPersistedState()],
});