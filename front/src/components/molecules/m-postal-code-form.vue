<template>
    <div class="modal flex items-center justify-center">
        <div v-if="showPostalCodeForm" class="flex space-x-2">
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
        <div v-if="!showPostalCodeForm">
          <APostalCode
            :postalCode="postalCode"
            @on-back="togglePostalCode"
          />
        </div> 
    </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'
import APostalCode from '@/components/atoms/a-postal-code.vue'

export default {
  name: 'MPostalCodeForm',
  components: {
      AButton,
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
    submitPostalCode () {
      localStorage.setItem('address', this.postalCode)
      this.togglePostalCode()
    },
    togglePostalCode () {
      this.showPostalCodeForm = !this.showPostalCodeForm
    }
  },
  mounted () {
      this.postalCode = localStorage.getItem('address')
  }
}
</script>

<style scoped>
</style>