import type { ChampionRotationDetails, ObservedRotation } from './Types'

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
