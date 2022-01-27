<template>
    <div class="a-input">
      <input
        class="postal-code bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
        :type="type"
        :name="name"
        :value="value"
        @input="onInput"
      />
    </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
  },
  onInput(event) {
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
