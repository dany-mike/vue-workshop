import axios from "axios";
import * as types from './types'

export default {
  [types.GET_CITIES_BY_POSTAL_CODE]({ commit }, postalCode) {
    return axios.post(`${process.env.VUE_APP_API_BASE_URL}/cities`, {
      postalCode
    }).then((response) => {
      commit(types.GET_CITIES, response.data);
    }).catch(err => console.log(err));
  }
}