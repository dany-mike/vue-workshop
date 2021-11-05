<template>
    <OHeader />
    <Modal />
</template>

<script>
import Modal from './components/molecules/m-modal.vue';
import OHeader from './components/organisms/o-header.vue';

export default {
  name: 'App',
  components: {
    OHeader,
    Modal
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
