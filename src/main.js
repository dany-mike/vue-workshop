import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import i18n from './i18n'

import VueCompositionAPI from '@vue/composition-api'
import vSelect from 'vue-select'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import VueLoading from 'vue-loading-overlay';

import 'leaflet/dist/leaflet.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-select/dist/vue-select.css';
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VueCompositionAPI)
Vue.use(VueLoading)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
