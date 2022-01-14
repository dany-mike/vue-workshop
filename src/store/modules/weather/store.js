import * as types from './types'
import actions from './actions'

export const state = {
  weather: {},
  weatherForecast: {},
  weatherForecastByCityAndTime: {}
};

export const mutations = {
  [types.GET_CURRENT_WEATHER](state, weather) {
    state.weather = weather;
  },
  [types.GET_WEATHER_FORECAST](state, weatherForecast) {
    state.weatherForecast = weatherForecast;
  },
  [types.GET_WEATHER_FORECAST_BY_TIME](state, weatherForecastByCityAndTime) {
    state.weatherForecastByCityAndTime = weatherForecastByCityAndTime;
  }
};

const getters = {
  getWeatherByCity: (state) => state.weather,
  getForecastByCityName: (state) => state.weatherForecast,
  getDailyForecast: (state) => state.weatherForecastByCityAndTime
};

export default {
  state,
  actions,
  mutations,
  getters
};