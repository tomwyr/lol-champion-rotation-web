import ChampionDetailsPage from '@/components/champion/championDetails/ChampionDetailsPage.vue'
import ObservedChampionsPage from '@/components/champion/observedChampions/ObservedChampionsPage.vue'
import ObservedRotationsPage from '@/components/rotation/observedRotations/ObservedRotationsPage.vue'
import RotationDetailsPage from '@/components/rotation/rotationDetails/RotationDetailsPage.vue'
import RotationListPage from '@/components/rotation/rotationList/RotationListPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: RotationListPage },
  { path: '/rotations/bookmarks', component: ObservedRotationsPage },
  { path: '/rotations/:id', component: RotationDetailsPage },
  { path: '/champions/observed', component: ObservedChampionsPage },
  { path: '/champions/:id', component: ChampionDetailsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
