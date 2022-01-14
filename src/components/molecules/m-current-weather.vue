<template>
  <div class="m-current-weather rounded overflow-hidden shadow-lg my-2 p-4 m-4 bg-gray-800">
    <div class="flex justify-center">
      <img  :src="`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`" alt="icon">
    </div>
      <div class="p-2">
        <div class="font-bold text-2xl text-white mb-2">{{ currentWeather.name }}</div>
        <div class="font-bold text-xl text-white mb-2">{{ currentWeather.main.temp }}°C</div>
        <p class="text-white text-base">
          Feels like {{ currentWeather.main.feels_like }}°C {{ currentWeather.weather[0].description }}. 
        </p>
        <p class="text-base text-white">
          Wind pace {{ currentWeather.wind.speed }}
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
  }
}
</script>
