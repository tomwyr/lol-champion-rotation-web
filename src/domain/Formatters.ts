import { format } from 'date-fns'
import type { Champion, ChampionRotationDuration } from './Types'

export function formatRotationDuration(
  duration: ChampionRotationDuration,
  options: { format: 'long' | 'short' },
) {
  const formatStr = options.format === 'long' ? 'MMMM dd' : 'MMM dd'
  const start = format(duration.start, formatStr)
  const end = format(duration.end, formatStr)
  return start + ' to ' + end
}

export function formatRotationDetails(champions: Champion[]) {
  const count = champions.length
  return [`${count} champion${formatPluralSuffix(count)}`].join(' · ')
}

export function formatChampionReleaseDate(date: Date) {
  return format(date, "MMM dd ''yy")
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
