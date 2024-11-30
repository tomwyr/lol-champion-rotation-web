export type Champion = {
  id: string
  name: string
  imageUrl: string
}

export type ChampionRotation = {
  beginnerMaxLevel: number
  beginnerChampions: [Champion]
  regularChampions: [Champion]
}

export type CurrentRotationError = 'unavailable'

export type DataState<V> = { type: 'loading' } | { type: 'error' } | { type: 'data'; value: V }
