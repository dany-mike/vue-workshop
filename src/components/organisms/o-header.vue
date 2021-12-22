<template>
  <div class="o-header">
    <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link :to="'/'" class="block lg:inline-block text-white-200 lg:ml-auto">
          <p class="font-semibold text-xl tracking-tight">Vue workshop</p>
        </router-link>
      </div>
      <div 
      class="block lg:hidden"
      @click="toggleExpanded"
      >
        <button 
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div 
        class="text-sm lg:flex lg:flex-grow"
        :class="{
          'hidden' : !isExpanded
        }
        "
        >
          <router-link :to="'/about'" class="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:ml-auto">
            <p class="text-white text-xl font-bold">About</p>          
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'OHeader',
  data () {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpanded () {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

