import type { AsyncDataState } from '@/data/Types'

export type Champion = {
  id: string
  name: string
  imageUrl: string
}

export type CurrentChampionRotation = {
  id: string
  patchVersion?: string
  duration: ChampionRotationDuration
  beginnerMaxLevel: number
  beginnerChampions: [Champion]
  regularChampions: [Champion]
  nextRotationToken?: string
}

export type ChampionRotation = {
  id: string
  patchVersion?: string
  nextRotationToken?: string
  duration: ChampionRotationDuration
  champions: Champion[]
}

export type ChampionRotationPrediction = {
  duration: ChampionRotationDuration
  champions: [Champion]
}

export type ChampionRotationDuration = {
  start: Date
  end: Date
}

export type RotationType = 'regular' | 'beginner'

export type CurrentRotationError = 'unavailable'

export type CurrentRotationState = AsyncDataState<CurrentChampionRotation>

export type RotationPredictionState = AsyncDataState<ChampionRotationPrediction>

export type NextRotationsState = { data: ChampionRotation[]; loadingMore: boolean }
