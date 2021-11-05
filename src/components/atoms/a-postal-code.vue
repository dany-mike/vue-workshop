<template>
  <div class="address">
      <p><span>Paris</span>: {{ postalCode }}</p>
      <button @click="handleReturn">Retour</button>
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
