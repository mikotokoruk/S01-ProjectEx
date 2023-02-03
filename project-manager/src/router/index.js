import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // path: '/',
      // name: 'home',
      // // component: HomeView
      // component: () => import('../views/HomeView.vue')//与下面同一风格写法
      path: '/',
      name: 'Layout',
      // component: HomeView
      component: () => import('../layout/Layout.vue'),
      redirect:'/home',
      children:[
        {
          path:'home',//home路由会与上面'/'拼接起来 故不用加路由
          name:'Home',
          component: () => import('../views/HomeView.vue')
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component: () => import('../views/Login.vue')
    }

  ]
})

export default router
