<template>
  <div class="m-postal">
    <div v-if="cities.length !== 0">
      <div class="flex items-center space-x-6">
        <p>Postal code: {{ postalCode }}</p>
        <ASelect
          :options="cities"
          :default="'Please choose a city'"
        />
        <AButton
          @click.native="handleBack"
        >
          Back
        </AButton>
      </div>
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
  }
}
</script>

<style scoped>
</style>