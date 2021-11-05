<template>
    <OHeader />
    <MPostalCodeForm />
</template>

<script>
import MPostalCodeForm from './components/molecules/m-postal-code-form.vue';
import OHeader from './components/organisms/o-header.vue';

export default {
  name: 'App',
  components: {
    OHeader,
    MPostalCodeForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f455c;
  margin-top: 60px;
}
</style>
