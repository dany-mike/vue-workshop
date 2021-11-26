<template>
  <div class="o-header">
    <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <router-link :to="'/'" class="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            <p class="text-white text-xl font-bold">Vue workshop</p>
          </router-link>
          <router-link :to="'/about'" class="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            <p class="text-white text-xl font-bold">About</p>          
          </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'OHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
