import { championToObservedChampion } from '@/common/Mappers'
import type { Champion, CurrentChampionRotation, ObservedChampion } from '@/common/Types'
import { ref, watchEffect } from 'vue'

const observedChampions = ref<ObservedChampion[]>(loadChampions())
watchEffect(() => saveChampions(observedChampions.value))

export function observedChampionsRef() {
  return observedChampions
}

export function observeChampion(champion: Champion) {
  const observedChampion = championToObservedChampion(champion)
  const updatedChampions = observedChampions.value.filter(
    (value) => value.id !== observedChampion.id,
  )
  updatedChampions.splice(0, 0, observedChampion)
  observedChampions.value = updatedChampions
}

export function unobserveChampion(championId: string) {
  const updatedChampions = observedChampions.value.filter((value) => value.id !== championId)
  observedChampions.value = updatedChampions
}

export function updateChampionsCurrentStatus(currentRotation: CurrentChampionRotation) {
  const currentChampionIds = currentRotation.regularChampions.map((champion) => champion.id)
  const updatedChampions = [...observedChampions.value].map<ObservedChampion>((champion) => {
    const current = currentChampionIds.includes(champion.id)
    return {
      ...champion,
      current: current,
    }
  })
  observedChampions.value = updatedChampions
}

function loadChampions(): ObservedChampion[] {
  const json = localStorage.getItem('observedChampions') ?? '[]'
  return JSON.parse(json)
}

function saveChampions(champions: ObservedChampion[]) {
  const json = JSON.stringify(champions)
  localStorage.setItem('observedChampions', json)
}
