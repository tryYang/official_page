import { createRouter, createWebHistory } from 'vue-router'
import { allroutes } from './routers'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allroutes
})

export default router
