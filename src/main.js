import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created(){

    console.log(process.env.VUE_APP_API);


  }
}).$mount('#app')
