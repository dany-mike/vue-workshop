<template>
  <router-link 
    :to="'/test'"
    class="bg-blue-500 hover:bg-blue-700 rounded-lg"
  >
    <component :is="type" :href="href" class="py-2 px-4  text-white font-semibold  shadow-md focus:outline-none">
      <slot/>
    </component>
  </router-link>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
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
