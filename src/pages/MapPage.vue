<template>
  <div class="about px-6" ref="aboutContainer">
    <p class="font-bold text-lg my-4">{{ $t('Click on the map to get the weather') }}</p>
    <MLeafletMap />
  </div>
</template>

<script>
import MLeafletMap from '@/components/molecules/m-leaflet-map'
export default {
  components:{
    MLeafletMap
  }
}
</script>