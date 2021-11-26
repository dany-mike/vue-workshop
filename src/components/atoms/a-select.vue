<template>
  <select 
    class="a-select py-2 text-white font-semibold  shadow-md focus:outline-none bg-red-500 hover:bg-red-700 rounded"
  >
    <option>Please select a city</option>
    <option
      v-for="(option, index) in options"
      :key="`${option}_${index}`"
    >
    {{option}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'ASelect',
  props:{
    options:{
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null,
    }
  },
  data() {
    return {
      selected: ''
    };
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

select {
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
}

.a-select {
  position: relative;
}

.a-select::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}

</style>