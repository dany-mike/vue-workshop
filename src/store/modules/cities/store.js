import * as types from './types'
import actions from './actions'

export const state = {
  cities: []
};

export const mutations = {
  // SET when I use mutation
  [types.SET_CITIES](state, cities) {
    state.cities = cities.map(city => city.replace(/[0-9]/g, ''));
  }
};

const getters = {
  // Get
  getCities: (state) => state.cities
};

export default {
  state,
  actions,
  mutations,
  getters
};
