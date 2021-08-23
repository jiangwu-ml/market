import Toast from './toast.vue' 
const toastobj = {
  install (Vue) {
    // 1、创建组件构造器
    const toastConstractor = Vue.extend(Toast);
    // 2、创建组件实例
    const toast = new toastConstractor()
    // 3、将实例挂载到一个dom元素上
    toast.$mount(document.createElement('div'));
    // 4、将组件对应的dom元素就是上一步创建的div，添加到body里
    document.body.appendChild(toast.$el)
    // 5、将toast组件实例添加到vue的原型对象上，大家都能访问
    Vue.prototype.$toast=toast
  }
}
export default toastobj 