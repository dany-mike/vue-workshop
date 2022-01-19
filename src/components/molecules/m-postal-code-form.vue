<template>
    <div class="modal flex items-center justify-center">
        <div
          class="flex space-x-2"
        >
          <AInput
            :value="''"
            v-model="postalCode"
            :label="'Postal code'"
            :type="'number'"
          />
          <AButton
            @click.native="submitPostalCode"
          >
            Submit
          </AButton>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
import AButton from '@/components/atoms/a-button.vue'
import { mapGetters } from 'vuex'
import AInput from '@/components/atoms/a-input.vue'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'MPostalCodeForm',
  components: {
    AButton,
    AInput
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
  validations () {
    return {
      postalCode: {
        required,
        numeric
      }
    }
  },
  methods: {
    async submitPostalCode () {
      if (this.$v) {
        return console.log('Form is invalid')
      }
      await this.$store.dispatch("getCitiesByPostalCode", this.postalCode);
      await this.$store.dispatch("getCurrentWeatherByCityName", this.getCitiesByPostalCode[0]);
      await this.$store.dispatch("getForecastByCityName", this.getCitiesByPostalCode[0]);
      await this.$store.dispatch("getDailyForecastByCityNameAndTime", {
        city:  this.getCitiesByPostalCode[0],
        time: '12:00',
      });
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