<template>
    <div class="modal flex items-center justify-center">
        <div class="flex space-x-2">
            <input 
                type="number" 
                class="postal-code bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                placeholder="Your postal code"
                v-model="postalCode"
            >
            <AButton
              @click.native="submitPostalCode"
            >
              Submit
            </AButton>
        </div>
    </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MPostalCodeForm',
  components: {
      AButton,
  },
  data () {
      return {
          postalCode: null
      }
  },
  computed: {
    ...mapGetters({
      getCitiesByPostalCode: 'getCities',
      getWeatherByCity: 'getWeatherByCity',
      getForecastByCity: 'getForecastByCityName',
      getDailyForecast: 'getDailyForecast'
    })
  },
  methods: {
    async submitPostalCode () {
      await this.$store.dispatch("getCitiesByPostalCode", this.postalCode);
      await this.$store.dispatch("getCurrentWeatherByCityName", this.getCitiesByPostalCode[0]);
      await this.$store.dispatch("getForecastByCityName", this.getCitiesByPostalCode[0]);
      console.log(this.getCitiesByPostalCode[0]);
      await this.$store.dispatch("getDailyForecastByCityNameAndTime", {
        city:  this.getCitiesByPostalCode[0],
        time: '12:00',
      });
      // filename::event-name
      this.$emit('m-postal-code-form::on-submit-postal-code', {
        postalCode: this.postalCode,
        cities: this.getCitiesByPostalCode,
        weather: this.getWeatherByCity,
        forecast: this.getForecastByCity,
        formattedForecast: this.getDailyForecast
      });
      this.togglePostalCode();
    },
    togglePostalCode () {
      this.showPostalCodeForm = !this.showPostalCodeForm
    }
  }
}
</script>

<style scoped>
</style>