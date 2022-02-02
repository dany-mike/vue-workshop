import * as types from './types'
import axios from "axios";

export default {
  [types.GET_CURRENT_WEATHER_BY_CITY_NAME]({ commit }, cityName) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/current/${cityName}`).then((response) => {
      commit(types.GET_CURRENT_WEATHER, response.data);
    }).catch(err => console.log(err));
  },
  [types.GET_FORECAST_BY_CITY_NAME]({ commit }, cityName) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/forecast/${cityName}`).then((response) => {
      commit(types.GET_WEATHER_FORECAST, response.data);
    }).catch(err => console.log(err));
  },
  [types.GET_DAILY_FORECAST_BY_CITY_NAME_AND_TIME]({ commit }, { city, time }) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/forecast/daily/${city}/${time}`).then((response) => {
      commit(types.GET_WEATHER_FORECAST_BY_TIME, response.data);
    }).catch(err => console.log(err));
  },
  [types.GET_CURRENT_WEATHER_BY_LAT_AND_LON]({ commit }, { lat, lon }) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/current/${lat}/${lon}`).then((response) => {
      commit(types.GET_WEATHER_BY_COORDINATE, response.data);
    }).catch(err => console.log(err));
  }
}
