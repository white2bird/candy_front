
import { createRouter, createWebHistory } from 'vue-router'
import RouteA from '@/components/RouteA.vue'
import ModelPlatform from '@/components/ModelPlatform.vue'



const routes = [
  {
    path: '/', component: ModelPlatform,
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