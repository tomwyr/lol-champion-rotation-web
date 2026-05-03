import type {
  ChampionRotationsPage,
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

export function getNextRotations(pageNumber: number) {
  return apiFetch<ChampionRotationsPage>(`rotations/paged`, {
    query: {
      page: pageNumber,
      count: 5,
      historical: true,
    },
  })
}
