<template>
  <div class="address">
      <p><span>Paris</span>: {{ postalCode }}</p>
      <button 
      @click="handleReturn"
      class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
      >
      Retour
      </button>
  </div>
</template>

<script>
export default {
  name: 'AAddress',
  props: {
      postalCode: {
          type: Number,
          default: 0
      }
  },
  methods: {
      handleReturn () {
          this.$emit('on-return')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
