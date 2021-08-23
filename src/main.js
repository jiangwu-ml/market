import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'

Vue.config.productionTip = false;
// 创建时间总线
Vue.prototype.$bus = new Vue();
// 注册自定义插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
