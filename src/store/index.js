import Vue from "vue";
import Vuex from "vuex";

import cities from "./modules/cities/store";
import weather from "./modules/weather/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    weather
  }
});