<template>
    <div 
      class="m-postal lg:flex lg:justify-center w-full"
    >
        <div class="flex flex-col justify-center items-center space-y-4 px-8">
          <p>Postal code: {{ postalCode }}</p>
          <ASelect
            :options="cities"
            :default-value="'Please choose a city'"
          />
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
      ASelect,
  },
  props: {
      postalCode: {
          type: String,
          default: ''
      },
      cities: {
        type: Array,
        default: () => []
      },
  },
  methods: {
      handleBack () {
          this.$emit('a-postal-code::on-back')
      }
  }
}
</script>
