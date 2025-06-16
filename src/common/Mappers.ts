import type { Champion, ChampionRotationDetails, ObservedChampion, ObservedRotation } from './Types'

export function rotationDetailsToObservedRotation(
  rotationDetails: ChampionRotationDetails,
): ObservedRotation {
  return {
    id: rotationDetails.id,
    duration: rotationDetails.duration,
    current: rotationDetails.current,
    championImageUrls: rotationDetails.champions.slice(0, 5).map((champion) => champion.imageUrl),
  }
}

export function championToObservedChampion(champion: Champion): ObservedChampion {
  return {
    id: champion.id,
    name: champion.name,
    imageUrl: champion.imageUrl,
  }
}
