export type Champion = {
  id: string
  name: string
  imageUrl: string
}

export type CurrentChampionRotation = {
  patchVersion?: string
  duration: ChampionRotationDuration
  beginnerMaxLevel: number
  beginnerChampions: [Champion]
  regularChampions: [Champion]
  nextRotationToken?: string
}

export type ChampionRotation = {
  patchVersion?: string
  nextRotationToken?: string
  duration: ChampionRotationDuration
  champions: Champion[]
}

export type ChampionRotationDuration = {
  start: Date
  end: Date
}

export type RotationType = 'regular' | 'beginner'

export type CurrentRotationError = 'unavailable'

export type CurrentRotationState =
  | { type: 'initial' }
  | { type: 'loading' }
  | { type: 'error' }
  | { type: 'data'; value: CurrentChampionRotation }

export type NextRotationsState = { data: ChampionRotation[]; loadingMore: boolean }
