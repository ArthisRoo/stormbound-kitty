import advice from './'
import getResolvedCardData from '~/helpers/getResolvedCardData'
import serialization from '~/helpers/serialization'
import modifyDeck from '~/helpers/modifyDeck'

const getCards = (id, modifier = 'NONE') =>
  modifyDeck(serialization.deck.deserialize(id), modifier).map(
    getResolvedCardData
  )

describe('The `QUEEN_OF_HERDS` advice', () => {
  it('should be returned if it contains Queen of Herds', () => {
    const cards = getCards('1n21n31s241n621n661n121n191n241s181n371s211s22')
    expect(advice(cards)).not.toEqual(null)
  })

  it('should not be returned if it does not include Queen of Herds', () => {
    const cards = getCards('1n21n41n61n631n71n81s61n141n211s271n441n70')
    expect(advice(cards)).toEqual(null)
  })

  it('should not be returned if it contains Queen of Herds and enough satyrs', () => {
    const cards = getCards('1n41n631n71n81s61n141n211s271s281n441s211n70')
    expect(advice(cards)).toEqual(null)
  })
})
