<template>
  <div class="a-welcome py-8">
    <h1 class="text-4xl">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AWelcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
