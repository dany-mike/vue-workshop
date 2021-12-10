<template>
  <div class="home">
    <AWelcome msg="Welcome to vue workshop"/>
    <MPostalCodeForm 
      v-if="showPostalCodeForm"
      @on-submit-postal-code="setPostalCodeData"
    />
    <APostalCode
      v-if="!showPostalCodeForm"
      :postalCode="postalCode"
      :cities="cities"
      @on-back="togglePostalCode"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import AWelcome from '@/components/atoms/a-welcome.vue'
import MPostalCodeForm from '@/components/molecules/m-postal-code-form'
import APostalCode from '@/components/atoms/a-postal-code'

export default {
  name: 'Home',
  components: {
    AWelcome,
    MPostalCodeForm,
    APostalCode
  },
  data () {
    return {
      postalCode: null,
      cities: null,
      showPostalCodeForm: true
    }
  },
  methods: {
    togglePostalCode () {
      this.showPostalCodeForm = !this.showPostalCodeForm
    },
    setPostalCodeData (item) {
      this.postalCode = item.postalCode
      this.cities = item.cities
      this.togglePostalCode()
    }
  },
}
</script>
