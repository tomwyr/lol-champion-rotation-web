import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import RotationDetailsPage from './rotation/rotationDetails/RotationDetailsPage.vue'
import ChampionRotation from './rotation/rotationList/ChampionRotation.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: ChampionRotation },
  { path: '/rotations/:id', component: RotationDetailsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
