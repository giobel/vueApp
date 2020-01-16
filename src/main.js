import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue'



Vue.config.productionTip = false


// Styles
import 'bootstrap/dist/css/bootstrap.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
