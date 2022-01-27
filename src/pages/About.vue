<template>
  <div class="about" ref="homeCont">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
  let homeCont = this.$refs.homeCont
  this.$loading.show(
    {
      container: homeCont,
      loader: this.loader,
    }
  );
  }
}
</script>