import { format } from 'date-fns'
import type { ChampionRotationDuration } from './Types'

export function formatDuration(duration: ChampionRotationDuration) {
  const start = format(duration.start, 'MMMM dd')
  const end = format(duration.end, 'MMMM dd')
  return start + ' to ' + end
}
