import { apiAccessKey, apiBaseUrl } from './Environment'

export function apiFetch<T>(path: string, { query }: ApiFetchOptions = {}) {
  return $fetch<T>(`${apiBaseUrl()}/${path}`, {
    query,
    headers: { Authorization: `Bearer ${apiAccessKey()}` },
    onResponseError() {
      throw createError({ status: 500 })
    },
  })
}

export type ApiFetchOptions = { query?: Record<string, unknown> }
