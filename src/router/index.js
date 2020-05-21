import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
  import ('views/Home/Home')
const Categories = () =>
  import ('views/Category/Categories')
const Car = () =>
  import ('views/Car/Car')
const Profile = () =>
  import ('views/Profile/Profile')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Categories },
  { path: '/car', component: Car },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  routes
})

export default router
