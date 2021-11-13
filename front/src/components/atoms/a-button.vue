<template>
    <component :is="type" :href="href" class="py-2 px-4  text-white font-semibold  shadow-md focus:outline-none bg-red-500 hover:bg-red-700 rounded">
      <slot/>
    </component>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    href: {
      type: String,
      default: '/'
    },
    to: {
      type: String,
      default: '/'
    }
  },
  computed: {
      type() {
        if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>