<template>
  <div class="a-select-city">
      <p>{{ postalCode }}</p>
      <p>{{country}}</p>
     <ul>
       <li 
       v-for="(country, index) in countries"
       :key="index"
       >
       {{ country }}
       </li>
     </ul>      
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
  name: 'ASelectCity',
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
      handleReturn () {
          this.$emit('on-return')
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
