<template>
  <div class="m-postal">
    <div v-if="cities.length !== 0">
      <div class="flex items-center space-x-6">
        <p>Postal code: {{ postalCode }}</p>
        <ASelect
          :options="cities"
          :default="'Please choose a city'"
          @set-active-city="setActiveCity"
        />
        <AButton
          @click.native="handleBack"
        >
          Back
        </AButton>
      </div>
      <p class="text-lg font-semibold">Active city: {{ activeCity }}</p>
    </div>
    <div v-else>
      Sorry we did not find any city with this postal code      
      <AButton
        @click.native="handleBack"
      >
        Back
      </AButton>
    </div>

  </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'
import ASelect from '@/components/atoms/a-select.vue'


export default {
  name: 'APostalCode',
  components: {
      AButton,
      ASelect
  },
  data() {
    return {
      activeCity: null
    }
  },
  props: {
      postalCode: {
          type: String,
          default: ''
      },
      cities: {
        type: Array,
        default: () => []
      }
  },
  methods: {
      handleBack () {
          this.$emit('on-back')
      },
      setActiveCity (activeCity) {
        this.activeCity = activeCity
      }
  }
}
</script>

<style scoped>
</style>