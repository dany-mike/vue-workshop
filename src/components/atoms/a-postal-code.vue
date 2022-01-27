<template>
    <div 
      class="m-postal lg:flex lg:justify-center w-full"
    >
        <div class="flex flex-col justify-center items-center space-y-4 px-8">
          <p>Postal code: {{ postalCode }}</p>
          <v-select :options="cities" v-model="selected" @input="onChange(selected)"/>
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

export default {
  name: 'APostalCode',
  components: {
      AButton,
  },
    data() {
      return {
        selected: '',
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
      },
  },
  methods: {
      handleBack () {
          this.$emit('a-postal-code::on-back')
      }
  }
}
</script>
