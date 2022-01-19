<template>
  <div class="flex items-center">
    <label
    class="lg:w-2/3" 
    v-if="label">
        {{ label }}
    </label>
      <input
        class="postal-code bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
        type="text"
        :name="name" 
        :value="value" 
        @input="onInput" 
      />
      <p 
        class="valid"
        v-if="error"
      >
        {{ error }}
      </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null
    }
  },
  name: 'AInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  },
  onInput(event) {
    const value = event.target.value;
    console.log('INPUT !!!!!!')
    if (!value) {
      this.error = 'Value should not be empty';
    }

    this.$emit('input', event.target.value)
  },
  computed: {

    name() {
      return this.label.toLowerCase().replace(/\s/g, '-') ;
    },

    model: {
      get() {
        return this.value;
      },
      set(value) {
        console.log('INPUT !!!!!! in the set')
        this.$emit('input', value);
      },
    }

  },
   methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>