import * as types from './types'
import actions from './actions'

export const state = {
  weather: {},
  weatherForecast: {},
  weatherForecastByCityAndTime: {},
  weatherByCoordinates: {}
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
  },
  [types.GET_WEATHER_BY_COORDINATE](state, weatherByCoordinates) {
    state.weatherByCoordinates = weatherByCoordinates;
  }
};

const getters = {
  getWeatherByCity: (state) => state.weather,
  getForecastByCityName: (state) => state.weatherForecast,
  getDailyForecast: (state) => state.weatherForecastByCityAndTime,
  getWeatherByLatAndLng: (state) => state.weatherByCoordinates
};

export default {
  state,
  actions,
  mutations,
  getters
};