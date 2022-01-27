<template>
  <div class="m-daily-weather-forecast rounded shadow-lg my-2 p-4 m-4 bg-gray-800">
    <p 
    class="font-bold text-xl p-4 text-white"
    v-if="currentWeather.name && selectedTime"
    >
    Daily forecast in {{ currentWeather.name }} at {{ getTime }}
    </p>
    <div
      v-for="el in dailyWeatherForecast"
      :key="`${el.dt_txt}`"
      class="daily-forecast px-6 flex justify-between w-full">
        <div v-if="el.dt_txt">
          <p class="text-white">{{getMonth(el)}} {{getDay(el)}} {{getFullYear(el)}}, {{ getTime }}</p>
        </div>
        <div class="text-white" v-if="el.weather[0].description">
          <p>{{el.weather[0].description}}</p>
        </div>
        <div v-if="el.main.temp">
          <p class="text-white">{{formattedTemp(el)}} °C</p>
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
import { daysOfMonth } from '@/data/daysOfMonth.js'

export default {
  name: 'MDailyWeatherForecast',
  data() {
    return {
      dailyForecastTimes: dailyForecastTimes,
      monthNames: monthNames,
      selectedTime: this.formattedWeatherForecast[0].dt_txt.substring(11, 16),
      daysOfMonth: daysOfMonth,
      selected: ''
    }
  },
  computed: {
    ...mapGetters({
      getCitiesByPostalCode: 'getCities',
      dailyWeatherForecast: 'getDailyForecast'
    }),
    getTime() {
      const hour = Number(this.selectedTime.substring(0, 2))
      const suffix = hour >= 12 ? "PM":"AM";
      const hours = ((hour + 11) % 12 + 1) + suffix
      return hours
    },
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
    getDay(el) {
      return this.daysOfMonth[el.dt_txt.substring(8, 10) - 1]
    },
    getMonth(el) {
      return this.monthNames[new Date(el.dt_txt).getMonth()]
    },
    formattedTemp(el) {
       return Math.round(el.main.temp)
    }
  }
}
</script>

<style scoped>
.vs__dropdown-toggle {
  background-color: white;
}
</style>