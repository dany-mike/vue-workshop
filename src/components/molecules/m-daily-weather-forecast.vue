<template>
  <div class="m-daily-weather-forecast rounded shadow-lg my-2 p-4 m-4 bg-gray-800">
    <p class="font-bold text-xl p-4 text-white">Daily forecast in {{ currentWeather.name }} at {{ selectedTime }}</p>
    <div
      v-for="el in dailyWeatherForecast"
      :key="`${el.dt_txt}`"
      class="daily-forecast px-6 flex justify-between w-full">
        <div>
          <p class="text-white">{{getMonth(el)}} {{getFullYear(el)}}, </p>
        </div>
        <div class="text-white">
          <p>{{el.weather[0].description}}</p>
        </div>
        <div>
          <p class="text-white">{{el.main.temp}} °C</p>
        </div>
    </div>
    <div class="set-time-container flex justify-center w-full mt-4 pb-4">
      <v-select class="bg-white" v-model="selected" @input="onChange(selected)" :options="dailyForecastTimes" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { monthNames } from '@/data/month.js'
import { dailyForecastTimes } from '@/data/dailyForecastTimes.js'

export default {
  name: 'MDailyWeatherForecast',
  data() {
    return {
      dailyForecastTimes: dailyForecastTimes,
      monthNames: monthNames,
      selectedTime: this.formattedWeatherForecast[0].dt_txt.substring(11, 16),
    }
  },
  computed: {
    ...mapGetters({
      getCitiesByPostalCode: 'getCities',
      dailyWeatherForecast: 'getDailyForecast'
    })
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
  },
  methods: {
    async onChange(selected) {
      await this.$store.dispatch("getDailyForecastByCityNameAndTime", {
        city:  this.getCitiesByPostalCode[0],
        time: selected,
      });
      this.selectedTime = selected
    },
    getFullYear (el) {
      return new Date(el.dt_txt).getFullYear()
    },
    getMonth(el) {
      return this.monthNames[new Date(el.dt_txt).getMonth()]
    }
  }
}
</script>

<style scoped>
.vs__dropdown-toggle {
  background-color: white;
}
</style>