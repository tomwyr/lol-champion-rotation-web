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
  availability: ChampionDetailsAvailability[]
  overview: ChampionDetailsOverview
  history: ChampionDetailsHistoryEvent[]
}

export type ChampionDetailsAvailability = {
  rotationType: ChampionRotationType
  lastAvailable?: string
  current: boolean
}

export type ChampionDetailsOverview = {
  occurrences: number
  popularity?: number
  currentStreak?: number
}

export type ChampionDetailsHistoryEvent =
  | ChampionDetailsHistoryRotation
  | ChampionDetailsHistoryBench
  | ChampionDetailsHistoryRelease

export type ChampionDetailsHistoryRotation = {
  type: 'rotation'
  id: string
  duration: ChampionRotationDuration
  current: boolean
  championImageUrls: string[]
}

export type ChampionDetailsHistoryBench = {
  type: 'bench'
  rotationsMissed: number
}

export type ChampionDetailsHistoryRelease = {
  type: 'release'
  releasedAt: string
}

export type ChampionRotationsOverview = {
  id: string
  patchVersion?: string
  duration: ChampionRotationDuration
  beginnerMaxLevel: number
  beginnerChampions: Champion[]
  regularChampions: Champion[]
}

export type ChampionRotation = {
  id: string
  patchVersion?: string
  duration: ChampionRotationDuration
  champions: Champion[]
}

export type ChampionRotationsPage = {
  entries: ChampionRotation[]
  hasNext: boolean
}

export type ChampionRotationSummary = {
  id: string
  duration: ChampionRotationDuration
  champions: Champion[]
}

export type ChampionRotationDetails = {
  id: string
  duration: ChampionRotationDuration
  champions: Champion[]
  current: boolean
}

export type SearchChampionsResult = {
  matches: SearchChampionsMatch[]
}

export type SearchChampionsMatch = {
  champion: Champion
  availableIn: ChampionRotationType[]
}

export type ChampionRotationDuration = {
  start: string
  end: string
}

export type ChampionRotationType = 'regular' | 'beginner'
