import { format } from 'date-fns'
import type { Champion, ChampionRotationDuration } from './Types'

export function formatRotationDuration(
  duration: ChampionRotationDuration,
  options: { format: 'long' | 'short' },
) {
  const singleYear = new Date(duration.start).getFullYear() === new Date(duration.end).getFullYear()
  const baseFormat = options.format === 'long' ? 'MMMM dd' : 'MMM dd'
  const startFormat = singleYear ? baseFormat : `${baseFormat} ''yy`
  const endFormat = `${baseFormat} ''yy`

  const start = format(duration.start, startFormat)
  const end = format(duration.end, endFormat)

  return start + ' to ' + end
}

export function formatRotationDetails(champions: Champion[]) {
  const count = champions.length
  return [`${count} champion${formatPluralSuffix(count)}`].join(' · ')
}

export function formatChampionReleaseDate(date: string) {
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
