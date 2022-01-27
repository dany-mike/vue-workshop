import * as types from './types'
import actions from './actions'

export const state = {
  cities: []
};

export const mutations = {
  [types.GET_CITIES](state, cities) {
    state.cities = cities.map(city => city.replace(/[0-9]/g, ''));
  }
};

const getters = {
  getCities: (state) => state.cities
};

export default {
  state,
  actions,
  mutations,
  getters
};
