import type {
  ChampionRotation,
  ChampionRotationDetails,
  ChampionRotationsOverview,
} from '~/domain/Types'
import { apiFetch } from '../Api'

export function getRotationDetails(id: string) {
  return apiFetch<ChampionRotationDetails>(`rotations/${id}`)
}

export function getRotationsOverview() {
  return apiFetch<ChampionRotationsOverview>(`rotations/overview`)
}

export function getNextRotations(nextRotationToken: string) {
  return apiFetch<ChampionRotation[]>(`rotations`, {
    query: {
      nextRotationToken: nextRotationToken,
      count: 5,
    },
  })
}
