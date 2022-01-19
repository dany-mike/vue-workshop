<template>
    <div class="modal flex items-center justify-center">
        <form
          class="flex space-x-2"
        >
          <AInput
            :value="''"
            v-model="postalCode" 
            :label="'Enter a postal code'"
          />
          <AButton
            @click.native="submitPostalCode"
          >
            Submit
          </AButton>
        </form>
    </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'
import { mapGetters } from 'vuex'
import AInput from '@/components/atoms/a-input.vue'

export default {
  setup () {
  },
  name: 'MPostalCodeForm',
  components: {
    AButton,
    AInput
  },
  validations () {
    return {
      postalCode: { 
      }
    }
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