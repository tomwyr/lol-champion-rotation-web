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

export type ChampionRotationDetails = {
  id: string
  duration: ChampionRotationDuration
  champions: [Champion]
  current: boolean
}

export type ObservedRotation = {
  id: string
  duration: ChampionRotationDuration
  current: boolean
  championImageUrls: string[]
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
