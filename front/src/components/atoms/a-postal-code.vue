<template>
  <div class="m-postal flex items-center space-x-8">
    <p>Postal code: {{ postalCode }}</p>
    <!-- <ASelect
      :cities="cities"
    >
    </ASelect> -->
    <ul>
      <li 
      v-for="(city, index) in cities"
      :key="`${index}_city`"
      >
      {{city}}
      </li>
    </ul>
    <AButton
      @click.native="handleBack"
    >
      Back
    </AButton>
  </div>
</template>

<script>
import AButton from '@/components/atoms/a-button.vue'

export default {
  name: 'APostalCode',
  components: {
      AButton,
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
      }
  }
}
</script>

<style scoped>
</style>