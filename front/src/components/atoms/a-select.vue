<template>
  <select 
    @change="setActiveCity"
    v-model="selected"
    class="a-select py-2 text-white font-semibold  shadow-md focus:outline-none bg-red-500 hover:bg-red-700 rounded"
  >
    <option>{{ selected }}</option>
    <option
      v-for="(option, index) in options"
      :key="`${option}_${index}`"
    >
    <div v-if="option !== selected">
      {{option}}
    </div>
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
      selected: 'Active city'
    };
  },
  methods: {
    setActiveCity () {
      this.$emit('set-active-city', this.selected)
    }
  },
  created () {
    this.$emit('set-active-city', this.selected)
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