<template>
  <div class="hello">
      <p><span>Paris</span>: {{ postalCode }}</p>
      <button @click="handleReturn">Retour</button>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: {
      postalCode: {
          type: Number,
          required: true
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
