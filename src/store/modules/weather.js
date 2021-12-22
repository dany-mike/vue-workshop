import axios from "axios";

export const state = {
  weather: {},
  weatherForecast: {},
  weatherForecastByCityAndTime: {}
};

export const actions = {
  getCurrentWeatherByCityName({ commit }, cityName) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/current/${cityName}`).then((response) => {
      commit("GET_CURRENT_WEATHER", response.data);
    }).catch(err => console.log(err));
  },
  getForecastByCityName({ commit }, cityName) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/forecast/${cityName}`).then((response) => {
      commit("GET_WEATHER_FORECAST", response.data);
    }).catch(err => console.log(err));
  },
  getDailyForecastByCityNameAndTime({ commit }, { city, time }) {
    console.log(city)
    console.log(time)
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/forecast/daily/${city}/${time}`).then((response) => {
      commit("GET_WEATHER_FORECAST_BY_TIME", response.data);
    }).catch(err => console.log(err));
  },
  getCurrentWeatherByZip({ commit }, zip) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/current-zip/${zip}`).then((response) => {
      commit("GET_CURRENT_WEATHER_ZIP", response.data);
    }).catch(err => console.log(err));
  },
  getForecastByZip({ commit }, zip) {
    return axios.get(`${process.env.VUE_APP_API_BASE_URL}/weather/forecast-zip/${zip}`).then((response) => {
      commit("GET_WEATHER_FORECAST_ZIP", response.data);
    }).catch(err => console.log(err));
  }
};

export const mutations = {
  GET_CURRENT_WEATHER(state, weather) {
    state.weather = weather;
  },
  GET_WEATHER_FORECAST(state, weatherForecast) {
    state.weatherForecast = weatherForecast;
  },
  GET_WEATHER_FORECAST_BY_TIME(state, weatherForecastByCityAndTime) {
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
  getters,
};