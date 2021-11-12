<template>
    <div class="modal flex items-center justify-center">
        <div v-if="!isPostalCodeActive" class="flex space-x-2">
            <input 
                type="number" 
                class="postal-code bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                placeholder="Your postal code"
                v-model="postalCode"
            >
            <router-link to="/foo">Go to Foo</router-link>
             <AButton
                class="bg-red-500 hover:bg-red-700"
                @click="test"
                :to="'/postal-codes'"
            >
                Submit
            </AButton>
        </div> 
        <!-- <APostalCode
            v-if="isPostalCodeActive"
            :postalCode="postalCode"
            @on-return="togglePostalCode"
        /> -->
    </div>
</template>

<script>
import AButton from '../atoms/a-button.vue'

export default {
  name: 'MModal',
  components: {
      AButton
  },
  data () {
      return {
          postalCode: null,
          isPostalCodeActive: false,
      }
  },
  methods: {
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
