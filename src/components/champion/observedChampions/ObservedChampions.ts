import type { Champion } from '@/common/Types'
import { ref, watchEffect } from 'vue'

const observedChampions = ref<Champion[]>(loadChampions())
watchEffect(() => saveChampions(observedChampions.value))

export function observedChampionsRef() {
  return observedChampions
}

export function observeChampion(champion: Champion) {
  const updatedChampions = observedChampions.value.filter((value) => value.id !== champion.id)
  updatedChampions.splice(0, 0, champion)
  observedChampions.value = updatedChampions
}

export function unobserveChampion(championId: string) {
  const updatedChampions = observedChampions.value.filter((value) => value.id !== championId)
  observedChampions.value = updatedChampions
}

function loadChampions(): Champion[] {
  const json = localStorage.getItem('observedChampions') ?? '[]'
  return JSON.parse(json)
}

function saveChampions(champions: Champion[]) {
  const json = JSON.stringify(champions)
  localStorage.setItem('observedChampions', json)
}
