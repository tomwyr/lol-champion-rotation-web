import { searchChampions } from '~/server/utils/services/ChampionService'

export default defineEventHandler((event) => {
  const championName = getQuery(event).name as string | undefined
  if (!championName) {
    throw createError({ status: 400, message: 'Missing required query parameter: name' })
  }
  return searchChampions(championName)
})
