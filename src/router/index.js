
import { createRouter, createWebHistory } from 'vue-router'
import My from '@/components/My.vue'
import Login_view from '@/views/Login_view.vue'
import ModelPlatform from '@/components/ModelPlatform.vue'





const routes = [
  {
    path: '/', component: ModelPlatform,
  },
  {
    path: '/my', component: My,
  },
  {
    path: '/login', component: Login_view,
  },
  // 默认路由
  {
    path: '/:catchAll(.*)', redirect: '/'
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router