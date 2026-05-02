import type { ChampionDetails, SearchChampionsResult } from '~/domain/Types'
import { apiFetch } from '../Api'

export function getChampionDetails(id: string) {
  return apiFetch<ChampionDetails>(`champions/${id}`)
}

export function searchChampions(championName: string) {
  return apiFetch<SearchChampionsResult>(`champions/search`, {
    query: { name: championName },
  })
}
