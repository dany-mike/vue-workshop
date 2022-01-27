<template>
  <div class="m-current-weather rounded overflow-hidden shadow-lg my-2 p-4 m-4 bg-gray-800">
    <div class="flex justify-center" v-if="currentWeather.weather[0].icon">
      <img  :src="`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`" alt="icon">
    </div>
      <div class="p-2">
        <div v-if="currentWeather.name" class="font-bold text-2xl text-white mb-2">{{ currentWeather.name }}</div>
        <div v-if="currentWeather.main.temp" class="font-bold text-xl text-white mb-2">{{ $t('temp', {temp: formattedTemp(currentWeather.main.temp) }) }}</div>
         <p class="text-white font-semibold text-lg mb-4" v-if="currentWeather.main">
          <span v-if="currentWeather.main.temp_min"> 
            {{ $t('min_weather', {min_weather: formattedTemp(currentWeather.main.temp_min) }) }}
          </span> 
          | 
          <span v-if="currentWeather.main.temp_max"> 
            {{ $t('max_weather', {max_weather: formattedTemp(currentWeather.main.temp_max) }) }}
          </span>
        </p>
        <p class="text-white text-base" v-if="currentWeather.main">
         <span v-if="currentWeather.main.feels_like">
            {{ $t('feels_like', {feels_like: formattedTemp(currentWeather.main.feels_like) }) }}
        </span> 
         <span v-if="currentWeather.weather[0].description">
           {{ currentWeather.weather[0].description }}
        </span>
        </p>
        <p class="text-base text-white" v-if="currentWeather.wind.speed">
          {{ $t('wind_pace', { wind_pace: formattedTemp(currentWeather.wind.speed) }) }}
        </p>
        <p class="text-base text-white" v-if="currentWeather.main.humidity">
          {{ $t('humidity', { humidity: formattedTemp(currentWeather.main.humidity) }) }}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MCurrentWeather',
  props: {
    currentWeather : {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formattedTemp(el) {
      return Math.round(el)
    }
  }
}
</script>
