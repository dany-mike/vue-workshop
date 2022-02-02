<template>
  <div class="o-header">
    <nav class="flex items-center flex-wrap bg-green-500 p-6">
      <div class="flex items-center text-white mr-6">
        <button 
          @click="toggleExpanded"
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mr-4 lg:hidden"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        <router-link :to="'/'" class="block lg:inline-block text-white-200 lg:ml-auto">
          <p class="font-semibold text-xl tracking-tight">{{$t('Vue workshop')}}</p>
        </router-link>
      </div>
      <div 
      class=""
      >
      </div>
      <div class="links-container block lg:flex lg:items-center lg:ml-auto lg:justify-between">
        <div 
        class="text-sm lg:flex"
        :class="{
          'hidden' : !isExpanded
        }
        "
        >
          <router-link :to="'/about'" class="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4">
            <p class="text-white text-xl font-bold">{{ $t('About') }}</p>
          </router-link>
          <router-link :to="'/map'" class="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:mr-4">
            <p class="text-white text-xl font-bold">{{ $t('Map') }}</p>
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
  @media (max-width: 1024px) {
    .links-container {
      width: 100%;
    }
  }

</style>

