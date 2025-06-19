import { format } from 'date-fns'
import type { ChampionRotationDuration } from './Types'

export function formatDuration(duration: ChampionRotationDuration) {
  const start = format(duration.start, 'MMMM dd')
  const end = format(duration.end, 'MMMM dd')
  return start + ' to ' + end
}

export function formatOrdinal(number: number) {
  const useDefault = number === 11 || number === 12 || number === 13
  const remainder = number % 10
  let suffix = 'th'
  if (!useDefault) {
    if (remainder === 1) {
      suffix = 'st'
    } else if (remainder === 2) {
      suffix = 'nd'
    } else if (remainder === 3) {
      suffix = 'rd'
    }
  }
  return `${number}` + suffix
}

export function formatPluralSuffix(number: number) {
  return Math.abs(number) !== 1 ? 's' : ''
}
