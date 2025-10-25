import ChampionDetailsPage from '@/components/champion/championDetails/ChampionDetailsPage.vue'
import ObservedChampionsPage from '@/components/champion/observedChampions/ObservedChampionsPage.vue'
import MobilePrivacyPolicyPage from '@/components/mobile/MobilePrivacyPolicyPage.vue'
import MobileShowcasePage from '@/components/mobile/showcase/MobileShowcasePage.vue'
import PrivacyPolicyPage from '@/components/privacy/PrivacyPolicyPage.vue'
import ObservedRotationsPage from '@/components/rotation/observedRotations/ObservedRotationsPage.vue'
import RotationDetailsPage from '@/components/rotation/rotationDetails/RotationDetailsPage.vue'
import RotationListPage from '@/components/rotation/rotationList/RotationListPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import SupportPage from './components/support/SupportPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: RotationListPage },
  { path: '/rotations/bookmarks', component: ObservedRotationsPage },
  { path: '/rotations/:id', component: RotationDetailsPage },
  { path: '/champions/observed', component: ObservedChampionsPage },
  { path: '/champions/:id', component: ChampionDetailsPage },
  { path: '/privacy', component: PrivacyPolicyPage },
  { path: '/mobile', component: MobileShowcasePage },
  { path: '/mobile/privacy', component: MobilePrivacyPolicyPage },
  { path: '/support', component: SupportPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
  routes,
})

export default router
