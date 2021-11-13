<template>
    <div class="modal flex items-center justify-center">
        <div v-if="!isSelectCity" class="flex space-x-2">
            <input 
                type="number" 
                class="postal-code bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                placeholder="Your postal code"
                v-model="postalCode"
            >
            <AButton
                class="bg-red-500 hover:bg-red-700"
                @click="submitPostalCode"
            >
                Submit
            </AButton>
        </div> 
        <ASelectCity
            v-if="isSelectCity"
            :postalCode="postalCode"
            :cities="cities"
            @on-return="toggleSelectCity"
        />
    </div>
</template>

<script>
import AButton from '../atoms/a-button.vue'
import ASelectCity from '../atoms/a-select-city.vue'
import axios from 'axios';

export default {
  name: 'MPostalCodeForm',
  components: {
      AButton,
      ASelectCity
  },
  data () {
      return {
          postalCode: null,
          isSelectCity: false,
          cities: null
      }
  },
  methods: {
        async submitPostalCode () {
            localStorage.setItem('address', this.postalCode)
            const res = await axios.post('http://localhost:3000/city/', {
                postalCode: this.postalCode
            })
            this.cities = res.data;
            this.isSelectCity = !this.isSelectCity
        },
       toggleSelectCity () {
          this.isSelectCity = !this.isSelectCity
      }
  },
  mounted () {
      this.postalCode = localStorage.getItem('address')
  }
}
</script>

<style scoped>
</style>
