import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/home/Home'
import LoginPage from '../views/login/Login'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫设置
// 每次路由跳转之前
// to是去哪个目录，from是从哪个目录
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  const isLogin = localStorage.isLogin
  // 避免死循环
  if (isLogin || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
