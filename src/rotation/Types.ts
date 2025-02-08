export type Champion = {
  id: string
  name: string
  imageUrl: string
}

export type ChampionRotation = {
  patchVersion?: string
  duration: ChampionRotationDuration
  beginnerMaxLevel: number
  beginnerChampions: [Champion]
  regularChampions: [Champion]
}

export type ChampionRotationDuration = {
  start: Date
  end: Date
}

export type CurrentRotationError = 'unavailable'

export type DataState<V> = { type: 'loading' } | { type: 'error' } | { type: 'data'; value: V }

export type RotationType = 'regular' | 'beginner'
