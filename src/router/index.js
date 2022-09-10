import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')

const Login = () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
const Reg = () => import(/* webpackChunkName: "reg" */ '../views/RegView.vue')
const Forget = () => import(/* webpackChunkName: "forget" */ '../views/ForgetView.vue')
const Index = () => import(/* webpackChunkName: "index" */ '../views/channels/Index.vue')
const Template1 = () =>
  import(/* webpackChunkName: "template1" */ '../views/channels/Template1.vue')
const Center = () => import(/* webpackChunkName: "center" */ '../views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: "userCenter" */ '../components/user/Center.vue')
const Settings = () => import(/* webpackChunkName: "settings" */ '../components/user/Settings.vue')
const Posts = () => import(/* webpackChunkName: "posts" */ '../components/user/Posts.vue')
const Msg = () => import(/* webpackChunkName: "msg" */ '../components/user/Msg.vue')
const Others = () => import(/* webpackChunkName: "others" */ '../components/user/Others.vue')
const User = () => import(/* webpackChunkName: "user" */ '../views/User.vue')
const MyPost = () => import(/* webpackChunkName: "myPost" */ '../components/user/common/MyPost.vue')
const MyCollection = () => import(/* webpackChunkName: "mycollection" */ '../components/user/common/MyCollection.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      },
      {
        path: '/index/:catalog',
        name: 'index',
        component: Template1
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
      if (from.name === 'login') {
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
  },
  {
    path: '/user/:uid',
    name: 'user',
    props:true,
    component: User
  },
  {
    path: '/center',
    name: 'center',
    linkActiveClass: 'layui-this',
    component: Center,
    children: [
      {
        path: '',
        name: 'center',
        component: UserCenter
      },
      {
        path: 'set',
        name: 'set',
        component: Settings
      },
      {
        path: 'posts',
        name: 'posts',
        component: Posts,
        children: [
          {
            path: '',
            name: 'mypost',
            component: MyPost
          },
          {
            path: 'mycollection',
            name: 'mycollection',
            component: MyCollection
          }
        ]
      },
      {
        path: 'msg',
        name: 'msg',
        component: Msg
      },
      {
        path: 'others',
        name: 'others',
        component: Others
      }
    ]
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
