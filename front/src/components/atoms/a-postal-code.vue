<template>
  <div class="m-postal">
    <h1>{{ postalCode }}</h1>
    <!-- <ASelect
      :cities="cities"
    >
    </ASelect> -->
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