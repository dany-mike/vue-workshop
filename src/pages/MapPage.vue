<template>
  <div class="about px-6" ref="aboutContainer">
    <p class="font-bold text-lg my-4">{{ $t('Click on the map to get the weather') }}</p>
    <MLeafletMap @m-leaflet-map::on-fetch-weather-by-coord="setWeatherData" />
    <MCurrentWeather 
    v-if="isCurrentWeather"
    :current-weather="currentWeather" 
    />
  </div>
</template>

<script>
import MLeafletMap from '@/components/molecules/m-leaflet-map'
import MCurrentWeather from '@/components/molecules/m-current-weather.vue'
export default {
  components:{
    MLeafletMap,
    MCurrentWeather
  },
  data () {
    return {
      currentWeather: {},
    }
  },
  methods: {
    setWeatherData(currentWeather) {
      this.currentWeather = currentWeather
    }
  },
  computed: {
    isCurrentWeather() {
      return Object.keys(this.currentWeather).length !== 0
    }
  }
}
</script>