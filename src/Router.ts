import RotationDetailsPage from '@/components/rotation/rotationDetails/RotationDetailsPage.vue'
import RotationListPage from '@/components/rotation/rotationList/RotationListPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: RotationListPage },
  { path: '/rotations/:id', component: RotationDetailsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
