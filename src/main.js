import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueCompositionAPI from '@vue/composition-api'
import vSelect from 'vue-select'
import VueI18n from 'vue-i18n'
import 'vue-select/dist/vue-select.css';


import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.component('v-select', vSelect)
Vue.use(VueCompositionAPI)
Vue.use(VueI18n)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
