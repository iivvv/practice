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

export default router
