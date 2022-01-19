<template>
    <div class="modal flex items-center justify-center">
        <div
          class="flex items-center space-x-2"
        >
          <p>Please enter a postal code</p>
          <AInput
            :value="''"
            v-model="postalCode"
            :type="'number'"
            :error-message="errorMessage"
          />
          <p class="text-red-700 font-semibold">{{ errorMessage }}</p>
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
import { required, numeric, minLength, maxLength } from '@vuelidate/validators'
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
          postalCode: null,
          errorMessage: ''
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
        numeric,
        maxLength: maxLength(5),
        minLength: minLength(5)
      }
    }
  },
  methods: {
    async submitPostalCode () {

      if (this.v$.postalCode.$invalid) {
        if (this.v$.postalCode.numeric.$invalid) return this.errorMessage = this.v$.postalCode.numeric.$message
        if (this.v$.postalCode.required.$invalid) return this.errorMessage = this.v$.postalCode.required.$message
        if (this.v$.postalCode.maxLength.$invalid) return this.errorMessage = 'Postal code length must be 5'
        if (this.v$.postalCode.minLength.$invalid) return this.errorMessage = 'Postal code length must be 5'
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