<template>
  <div class="about" ref="aboutContainer">
    <h1>This is a map page</h1>
    <l-map style="height: 500px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker 
      :lat-lng="markerLatLng"
      :icon="markerIcon"
      ></l-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data () {

    const myMarkerIcon = L.icon({
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconSize: [24,36],
      iconAnchor: [12,36]
    })

    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
      markerIcon: myMarkerIcon
    };
  }
}
</script>