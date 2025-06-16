export type Champion = {
  id: string
  name: string
  imageUrl: string
}

export type ChampionDetails = {
  id: string
  name: string
  title: string
  imageUrl: string
}

export type ChampionRotationsOverview = {
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

export type ChampionRotationSummary = {
  id: string
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
  championImageUrls: string[]
  current?: boolean
}

export type ObservedChampion = {
  id: string
  name: string
  imageUrl: string
  current?: boolean
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
