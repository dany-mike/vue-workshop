import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import i18n from './i18n'
import VueCompositionAPI from '@vue/composition-api'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
