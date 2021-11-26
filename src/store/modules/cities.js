import axios from "axios";

export const state = {
  cities: []
};

export const actions = {
  getCitiesByPostalCode({ commit }, postalCode) {
    return axios.post("http://localhost:3000/cities", {
      postalCode
    }).then((response) => {
      commit("GET_CITIES", response.data);
    }).catch(err => console.log(err));
  },
};

export const mutations = {
  GET_CITIES(state, cities) {
    state.cities = cities;
  }
};

const getters = {
  // getCities
  getCities: (state) => state.cities,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
