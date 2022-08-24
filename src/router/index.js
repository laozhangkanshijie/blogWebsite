import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')

const Login = () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
const Reg = () => import(/* webpackChunkName: "reg" */ '../views/RegView.vue')
const Forget = () => import(/* webpackChunkName: "forget" */ '../views/ForgetView.vue')
const Index = () => import(/* webpackChunkName: "index" */ '../views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: "template1" */ '../views/channels/Template1.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
    children: [
      {
        path:'',
        name: 'index',
        component: Index,
      },
      {
        path:'/index/:catalog',
        name: 'index',
        component: Template1,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Reg,
    beforeEnter: (to, from, next) => {
      if(from.name === 'login') {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  }
]

const router = new VueRouter({
  linkActiveClass:'layui-this',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
