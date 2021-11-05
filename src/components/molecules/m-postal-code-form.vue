<template>
    <div class="modal flex items-center justify-center">
        <div v-if="!isPostalCodeActive" class="flex space-x-2">
            <input 
                type="number" 
                class="postal-code bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                placeholder="Your postal code"
                v-model="postalCode"
            >
             <button
                class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
                @click="addPostalCode"
            >
                Submit
            </button>
        </div> 
        <APostalCode
            v-if="isPostalCodeActive"
            :postalCode="postalCode"
            @on-return="togglePostalCode"
        />
    </div>
</template>

<script>
import APostalCode from '../atoms/a-postal-code.vue'

export default {
  name: 'MModal',
  components: {
      APostalCode
  },
  data () {
      return {
          postalCode: null,
          isPostalCodeActive: false,
      }
  },
  methods: {
      addPostalCode () {
          localStorage.setItem('address', this.postalCode)
          this.isPostalCodeActive = !this.isPostalCodeActive
      },
       togglePostalCode () {
          this.isPostalCodeActive = !this.isPostalCodeActive
      }
  },
  mounted () {
      this.postalCode = localStorage.getItem('address')
  }
}
</script>

<style scoped>
</style>
