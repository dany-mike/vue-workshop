<template>
  <div class="home">
    <AWelcome msg="Welcome to vue workshop"/>
    <MPostalCodeForm 
      v-if="showPostalCodeForm"
      @m-postal-code-form::on-submit-postal-code="setPostalCodeData"
    />
    <OCity
      v-if="!showPostalCodeForm"
      :postalCode="postalCode"
      :cities="cities"
      :currentWeather="currentWeather"
      :weather-forecast="weatherForecast"
      :formatted-weather-forecast="formattedWeatherForecast"
      @on-back="togglePostalCode"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import AWelcome from '@/components/atoms/a-welcome.vue'
import MPostalCodeForm from '@/components/molecules/m-postal-code-form'
import OCity from '@/components/organisms/o-city'

export default {
  name: 'Home',
  components: {
    AWelcome,
    MPostalCodeForm,
    OCity
  },
  data () {
    return {
      postalCode: null,
      cities: null,
      currentWeather: {}, 
      weatherForecast: {},
      formattedWeatherForecast: {},
      showPostalCodeForm: true
    }
  },
  methods: {
    togglePostalCode () {
      this.showPostalCodeForm = !this.showPostalCodeForm
    },
    setPostalCodeData (item) {
      this.currentWeather = item.weather
      this.postalCode = item.postalCode
      this.cities = item.cities
      this.weatherForecast = item.forecast
      this.formattedWeatherForecast = item.formattedForecast
      this.togglePostalCode()
    }
  },
}
</script>
