import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Goods from '../components/goods/Goods'
import Ratings from '../components/ratings/Ratings'
import Seller from '../components/seller/Seller'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller },
  { path: '/', redirect: '/goods' }
]

export default new VueRouter({
  linkActiveClass: 'active',
  routes
})
