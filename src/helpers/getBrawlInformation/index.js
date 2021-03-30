import getCurrentBrawl from '../getCurrentBrawl'
import isBrawlRunning from '../isBrawlRunning'
import { getNextWeekDay, getLastWeekDay } from '../getWeekDay'

const getBrawlInformation = (date = new Date()) => {
  if (!isBrawlRunning(date)) return null

  const brawl = getCurrentBrawl(date)
  const start = getLastWeekDay('THURSDAY', { date: date })
  const end = getNextWeekDay('MONDAY', { date: start })

  return { ...brawl, start, end }
}

export default getBrawlInformation