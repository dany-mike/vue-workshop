<template>
  <div class="m-daily-weather-forecast rounded shadow-lg my-2 p-4 m-4 bg-gray-800">
    <p class="font-bold text-xl p-4 text-white">Daily forecast in {{ currentWeather.name }}</p>
    <div
      v-for="el in formattedWeatherForecast"
      :key="`${el.dt_txt}`"
      class="daily-forecast px-6 flex justify-between w-full">
        <div>
          <p class="text-white">{{el.dt_txt}}</p>
        </div>
        <div class="text-white">
          <p>{{el.weather[0].description}}</p>
        </div>
        <div>
          <p class="text-white">{{el.main.temp}} °C</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MDailyWeatherForecast',
  components: {

  },
  props: {
      currentWeather : {
        type: Object,
        default: () => {}
      },
      formattedWeatherForecast: {
        type: Array,
        default: () => {}
      },
  }
}
</script>
