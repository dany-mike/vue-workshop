<template>
  <l-map style="height: 500px" :zoom="zoom" :center="center" @click="addMarker">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker 
    v-for="(marker, index) in markersLatLng"
    :key="index"
    :lat-lng="marker"
    :icon="markerIcon"
    ></l-marker>
  </l-map>
</template>

<script>
import L from 'leaflet'
import { mapGetters } from 'vuex'
import {
  GET_CURRENT_WEATHER_BY_LAT_AND_LON
} from '@/store/modules/weather/types';

export default {
  name: 'MLeafletMap',
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
      center: L.latLng(51.505, -0.159),
      markersLatLng: [L.latLng(51.504, -0.159)],
      markerIcon: myMarkerIcon
    };
  },
  computed: {
    ...mapGetters({
      getWeatherByLatAndLng: 'getWeatherByLatAndLng',
    })
  },
  methods: {
    async addMarker(event) {
      this.markersLatLng = [];
      await this.markersLatLng.push(event.latlng);
      await this.fetchWeatherByCoord(event.latlng)
    },
    async fetchWeatherByCoord(latlng) {
      let aboutContainer = this.$refs.aboutContainer

      let loader = this.$loading.show(
        {
          container: aboutContainer,
        }
      );

      await this.$store.dispatch(`${GET_CURRENT_WEATHER_BY_LAT_AND_LON}`, {
        lat: latlng.lat,
        lon: latlng.lng
      });

      loader.hide();

      this.$emit('m-leaflet-map::on-fetch-weather-by-coord', this.getWeatherByLatAndLng);
    }
  }

}
</script>

<style scoped>
</style>