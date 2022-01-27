<template>
    <div
      v-if="cities.length !== 0"
    >
      <APostalCode 
        :postal-code="postalCode"
        :cities="cities"
        @a-postal-code::on-back="handleBack"
      />
      <MCurrentWeather 
        :current-weather="currentWeather"
      />
      <MDailyWeatherForecast
        :current-weather="currentWeather"
        :formatted-weather-forecast="formattedWeatherForecast"
      />
     <MHourlyWeatherForecast 
        :weather-forecast="weatherForecast"
        :current-weather="currentWeather"
      />
    </div>
   <div v-else>
     <p class="mb-3 font-semibold">
      Sorry we did not find any city with this postal code      
     </p>
      <AButton
        @click.native="handleBack"
      >
        Back
      </AButton>
    </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'
import APostalCode from '@/components/atoms/a-postal-code.vue'
import MCurrentWeather from '@/components/molecules/m-current-weather.vue'
import MDailyWeatherForecast from '@/components/molecules/m-daily-weather-forecast.vue'
import MHourlyWeatherForecast from '@/components/molecules/m-hourly-weather-forecast.vue'

export default {
  name: 'OCity',
  components: {
      AButton,
      APostalCode,
      MCurrentWeather,
      MDailyWeatherForecast,
      MHourlyWeatherForecast
  },
  props: {
      postalCode: {
          type: String,
          default: ''
      },
      cities: {
        type: Array,
        default: () => []
      },
      currentWeather : {
        type: Object,
        default: () => {}
      },
      weatherForecast: {
        type: Object,
        default: () => {}
      },
      formattedWeatherForecast: {
        type: Array,
        default: () => []
      },
  },
  methods: {
      handleBack () {
          this.$emit('on-back')
      },
  },
}
</script>