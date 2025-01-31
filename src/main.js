// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 
import router from './router'
 

import './common/stylus/index.styl'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// let app=Vue.extend(App);

// let router=new VueRouter();

// router.map({
// 	'/goods':{
// 		component:goods
// 	}
// })


// router.start(app,'#app')