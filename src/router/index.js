import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
const Profil = ()=>import('@/views/Profil.vue')
const  Cart = ()=>import('@/views/Cart.vue')
const Category = ()=>import('@/views/Category.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component:Profil,
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/category',
    name: 'Category',
    component:Category
  }

]

const router = new VueRouter({
  routes,
  mode: "history",
  
})

export default router
