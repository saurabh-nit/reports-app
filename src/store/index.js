import Vue from "vue";
import Vuex from "vuex";
import reportStore from "./reportStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reportStore
  }
});
