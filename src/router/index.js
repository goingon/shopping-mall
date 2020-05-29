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
const Detail = () =>
  import ('views/Detail/Detail')

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Categories },
  { path: '/car', component: Car },
  { path: '/profile', component: Profile },
  { path: '/detail/:iid', component: Detail }
]

const router = new VueRouter({
  routes,
  mode: 'history'

})

export default router