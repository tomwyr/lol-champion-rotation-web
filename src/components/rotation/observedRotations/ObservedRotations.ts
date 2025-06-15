import { rotationDetailsToObservedRotation } from '@/common/Mappers'
import type { ChampionRotationDetails, ObservedRotation } from '@/common/Types'
import { ref, watchEffect } from 'vue'

const observedRotations = ref<ObservedRotation[]>(loadRotations())
watchEffect(() => saveRotations(observedRotations.value))

export function observedRotationsRef() {
  return observedRotations
}

export function observeRotation(rotationDetails: ChampionRotationDetails) {
  const observedRotation = rotationDetailsToObservedRotation(rotationDetails)
  const updatedRotations = observedRotations.value.filter(
    (value) => value.id !== rotationDetails.id,
  )
  updatedRotations.splice(0, 0, observedRotation)
  updatedRotations.sort((lhs, rhs) => (lhs.duration.start <= rhs.duration.start ? 1 : -1))
  observedRotations.value = updatedRotations
}

export function unobserveRotation(rotationId: string) {
  const updatedRotations = observedRotations.value.filter((value) => value.id !== rotationId)
  observedRotations.value = updatedRotations
}

function loadRotations(): ObservedRotation[] {
  const json = localStorage.getItem('observedRotations') ?? '[]'
  return JSON.parse(json)
}

function saveRotations(rotations: ObservedRotation[]) {
  const json = JSON.stringify(rotations)
  localStorage.setItem('observedRotations', json)
}
