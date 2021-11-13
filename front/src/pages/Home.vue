<template>
  <div class="home">
    <AWelcome msg="Welcome to vue workshop"/>
    <MPostalCodeForm />
  </div>
</template>

<script>
// @ is an alias to /src
import AWelcome from '@/components/atoms/a-welcome.vue'
import MPostalCodeForm from '@/components/molecules/m-postal-code-form'

export default {
  name: 'Home',
  components: {
    AWelcome,
    MPostalCodeForm
  }
}
</script>
