// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import echarts from 'echarts'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
import BaiduMap from 'vue-baidu-map'; 


Vue.use(BaiduMap, {ak:'XQiMybAuRehU2HAN7mwxSaaf1Sf5trvq'})
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
Vue.use(Avue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
