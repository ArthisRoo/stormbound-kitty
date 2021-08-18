import capitalise from '~/helpers/capitalise'
import parseDate from '~/helpers/parseDate'
import isKATMember from '~/helpers/isKATMember'
import DECKS from '~/data/decks'
import CONTRIBUTIONS from '~/data/contributions'
import DONATIONS from '~/data/donations'
import GUIDES from '~/data/guides'
import STORIES from '~/data/stories'
import TOURNAMENTS from '~/data/tournaments'
import ARTWORKS from '~/data/artworks'
import PUZZLES from '~/data/puzzles'
import EVENTS from '~/data/events'
import RELEASES from '~/data/releases'
import PODCASTS from '~/data/podcasts'
import SWCC from '~/data/swcc'
import VIDEOS from '~/data/videos'

const formatEntryWithDate = entry => ({
  ...entry,
  date: entry.date ? parseDate(entry.date).valueOf() : entry.date,
})

const getUserChannel = id =>
  VIDEOS.find(channel => channel.date && channel.author.toLowerCase() === id) ||
  null

const getUserStories = id =>
  STORIES.filter(story => story.date && story.author.toLowerCase() === id).map(
    formatEntryWithDate
  )

const getUserDecks = id =>
  DECKS.filter(deck => deck.author.toLowerCase() === id).map(
    formatEntryWithDate
  )

const getUserGuides = id =>
  GUIDES.filter(guide =>
    guide.authors.map(host => host.toLowerCase()).includes(id)
  ).map(formatEntryWithDate)

const getUserHosts = id =>
  TOURNAMENTS.filter(tournament =>
    tournament.hosts.map(host => host.toLowerCase()).includes(id)
  ).map(formatEntryWithDate)

const getUserPodcasts = id =>
  PODCASTS.filter(episode =>
    episode.hosts.map(host => host.toLocaleLowerCase()).includes(id)
  ).map(formatEntryWithDate)

const getUserPodiums = id =>
  TOURNAMENTS.filter(tournament =>
    tournament.podium
      .flat()
      .map(winner => winner.toLowerCase())
      .includes(id)
  ).map(formatEntryWithDate)

const getUserArtworks = id =>
  ARTWORKS.filter(artwork => artwork.author.toLowerCase() === id).map(
    formatEntryWithDate
  )

const getUserPuzzles = id =>
  PUZZLES.filter(puzzle => puzzle.author.toLowerCase() === id).map(
    formatEntryWithDate
  )

const getUserCards = id =>
  SWCC.flat()
    .filter(
      contest => contest.winner && contest.winner.author.toLowerCase() === id
    )
    .map(entry => {
      const [day, month, year] = entry.date.split('/').map(Number)

      return { ...entry, date: new Date(year, month - 1, day).valueOf() }
    })

const getUserDonations = id =>
  DONATIONS.filter(donation => donation.author.toLowerCase() === id).map(
    formatEntryWithDate
  )

const getUserContributions = id =>
  CONTRIBUTIONS.filter(
    contribution => contribution.author.toLowerCase() === id
  ).map(formatEntryWithDate)

const getUserEvents = id =>
  EVENTS.filter(event =>
    event.authors.map(author => author.toLowerCase()).includes(id)
  )
    .concat(id === 'kitty' ? RELEASES.map(addType('RELEASE')) : [])
    .map(formatEntryWithDate)

const addType = type => entry => ({ ...entry, type })

const getMemberContent = id => {
  const channel = getUserChannel(id)
  const stories = getUserStories(id)
  const decks = getUserDecks(id)
  const guides = getUserGuides(id)
  const hosts = getUserHosts(id)
  const podiums = getUserPodiums(id)
  const artworks = getUserArtworks(id)
  const puzzles = getUserPuzzles(id)
  const cards = getUserCards(id)
  const contributions = getUserContributions(id)
  const donations = getUserDonations(id)
  const events = getUserEvents(id)
  const podcasts = getUserPodcasts(id)

  const content = [
    ...stories.map(addType('STORY')),
    ...guides.map(addType('GUIDE')),
    ...decks.map(addType('DECK')),
    ...hosts.map(addType('HOST')),
    ...podiums.map(addType('PODIUM')),
    ...artworks.map(addType('ART')),
    ...puzzles.map(addType('PUZZLE')),
    ...cards.map(addType('CARD')),
    ...contributions.map(addType('CONTRIBUTION')),
    ...donations.map(addType('DONATION')),
    ...podcasts.map(addType('PODCAST')),
    ...events,
  ].sort((a, b) => b.date - a.date)

  const findDisplayName = author => author.toLowerCase() === id
  // This is incredibly ugly, but this is kind of the only way to find the
  // correct capitalisation since it cannot be retrieved from the URL parameter
  // unfortunately.
  const displayName = channel
    ? channel.name
    : content.map(
        ({ author, authors = [], hosts = [], podium = [], winner = {} }) =>
          author ||
          [...authors, ...hosts, ...podium.flat()].find(findDisplayName) ||
          winner.author
      )[0] || capitalise(id)

  // The count is not quite the length of the `content` array as some entries
  // such as code updates can hold multiple contributions (e.g. one per PR).
  const count = content.reduce(
    (acc, item) => acc + (item.entries ? item.entries.length : 1),
    0
  )

  return {
    roles: isKATMember({ donations, contributions }),
    channel,
    displayName,
    content,
    count,
    details: {
      artworks,
      cards,
      contributions,
      decks,
      donations,
      events,
      guides,
      hosts,
      podcasts,
      podiums,
      puzzles,
      stories,
    },
  }
}

export default getMemberContent