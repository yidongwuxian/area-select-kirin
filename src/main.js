import Vue from 'vue'
import App from './App.vue'
import AreaSelect from 'dist/area-select.js'

Vue.use(AreaSelect)

new Vue({
  el: '#app',
  render: h => h(App)
})