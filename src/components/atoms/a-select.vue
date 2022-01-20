<template>
  <select 
    class="a-select py-2 text-white font-semibold  shadow-md focus:outline-none bg-red-500 hover:bg-red-700 rounded"
    v-model="value"
    @change="onChange($event)"
  >
    <option>{{ defaultValue }}</option>
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
  props:{
    options:{
      type: Array,
      required: true
    },
    defaultValue: {
      type: String,
      required: false,
      default: null,
    }
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.defaultValue)
    }
  }
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