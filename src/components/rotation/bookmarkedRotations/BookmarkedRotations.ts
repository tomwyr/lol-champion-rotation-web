import { rotationDetailsToObservedRotation } from '@/common/Mappers'
import type { ChampionRotationDetails, ObservedRotation } from '@/common/Types'
import { ref, watchEffect } from 'vue'

const bookmarkedRotations = ref<ObservedRotation[]>(loadBookmarks())
watchEffect(() => saveBookmarks(bookmarkedRotations.value))

export function bookmarkedRotationsRef() {
  return bookmarkedRotations
}

export function bookmarkRotation(rotationDetails: ChampionRotationDetails) {
  const observedRotation = rotationDetailsToObservedRotation(rotationDetails)
  const updatedBookmarks = bookmarkedRotations.value.filter(
    (value) => value.id !== rotationDetails.id,
  )
  updatedBookmarks.splice(0, 0, observedRotation)
  updatedBookmarks.sort((lhs, rhs) => (lhs.duration.start <= rhs.duration.start ? 1 : -1))
  bookmarkedRotations.value = updatedBookmarks
}

export function unbookmarkRotation(rotationId: string) {
  const updatedBookmarks = bookmarkedRotations.value.filter((value) => value.id !== rotationId)
  bookmarkedRotations.value = updatedBookmarks
}

function loadBookmarks(): ObservedRotation[] {
  const json = localStorage.getItem('bookmarkedRotations') ?? '[]'
  return JSON.parse(json)
}

function saveBookmarks(rotations: ObservedRotation[]) {
  const json = JSON.stringify(rotations)
  localStorage.setItem('bookmarkedRotations', json)
}
