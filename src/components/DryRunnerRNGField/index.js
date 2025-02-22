import React from 'react'
import { useFela } from 'react-fela'
import Label from '~/components/Label'
import Radio from '~/components/Radio'
import CardLink from '~/components/CardLink'
import { FRIENDLY_CHANCES } from '~/constants/dryRunner'
import styles from './styles'

const RNG_SENSITIVE_CARDS = {
  S3: {
    FRIENDLY: function FriendlyS3() {
      return (
        <>
          <CardLink id='S3' /> comes back in hand
        </>
      )
    },
    UNFRIENDLY: function UnfriendlyS3() {
      return (
        <>
          <CardLink id='S3' /> doesn’t come back to hand
        </>
      )
    },
  },
  I29: {
    FRIENDLY: function FriendlyI29() {
      return (
        <>
          <CardLink id='I29' /> comes back in hand
        </>
      )
    },
    UNFRIENDLY: function UnfriendlyI29() {
      return (
        <>
          <CardLink id='I29' /> doesn’t come back to hand
        </>
      )
    },
  },
  W9: {
    FRIENDLY: function FriendlyW9() {
      return (
        <>
          <CardLink id='W9' /> stays
        </>
      )
    },
    UNFRIENDLY: function UnfriendlyW9() {
      return (
        <>
          <CardLink id='W9' /> gets destroyed
        </>
      )
    },
  },
  W16: {
    FRIENDLY: function FriendlyW16() {
      return (
        <>
          <CardLink id='W16' /> hits and stays on the board
        </>
      )
    },
    UNFRIENDLY: function UnfriendlyW16() {
      return (
        <>
          <CardLink id='W16' /> dies
        </>
      )
    },
  },
}

export default React.memo(function DryRunnerRNGField(props) {
  const { css } = useFela()
  const deckIds = props.deck.map(card => card.id)
  const possibleRNGSensitiveCards = Object.keys(RNG_SENSITIVE_CARDS)
  const RNGSensitiveCards = possibleRNGSensitiveCards.filter(cardId =>
    deckIds.includes(cardId)
  )

  // Check if there is a freeze card in the deck to show RNG settings
  const freezeCards = ['W2', 'W6', 'W11']
  const freezeCard = deckIds.find(id => freezeCards.includes(id))
  const harvestersInDeck = deckIds.includes('N38')
  const rogueSheepInDeck = deckIds.includes('N77')

  if (
    RNGSensitiveCards.length === 0 &&
    !(freezeCard || harvestersInDeck || rogueSheepInDeck)
  ) {
    return null
  }

  return (
    <fieldset>
      <Label as='legend'>RNG (luck)</Label>
      <Radio
        id='RNG-FRIENDLY'
        name='RNG'
        value='FRIENDLY'
        onChange={event => props.setRNG(event.target.value)}
        checked={props.RNG === 'FRIENDLY'}
        data-testid='RNG-input'
        required
      >
        Friendly
        <span className={css(styles.info)}>
          {harvestersInDeck ? (
            <span className={css(styles.infoInner)}>
              <CardLink id='N38' /> often create strong copies
            </span>
          ) : null}
          {rogueSheepInDeck ? (
            <span className={css(styles.infoInner)}>
              <CardLink id='N77' /> create strong card copies
            </span>
          ) : null}
          {freezeCard ? (
            <span className={css(styles.infoInner)}>
              Freeze cards manage to freeze many enemies
            </span>
          ) : null}
          {RNGSensitiveCards.map(cardId => (
            <span key={cardId} className={css(styles.infoInner)}>
              {RNG_SENSITIVE_CARDS[cardId].FRIENDLY()}
            </span>
          ))}
        </span>
      </Radio>
      <Radio
        id='RNG-UNFRIENDLY'
        name='RNG'
        value='UNFRIENDLY'
        onChange={event => props.setRNG(event.target.value)}
        checked={props.RNG === 'UNFRIENDLY'}
        data-testid='RNG-input'
        required
      >
        Unfriendly
        <span className={css(styles.info)}>
          {harvestersInDeck ? (
            <span className={css(styles.infoInner)}>
              When <CardLink id='N38' /> manage to create a copy, it’s generally{' '}
              weak
            </span>
          ) : null}
          {rogueSheepInDeck ? (
            <span className={css(styles.infoInner)}>
              <CardLink id='N77' /> create weak card copies
            </span>
          ) : null}
          {freezeCard ? (
            <span className={css(styles.infoInner)}>
              Freeze cards do not manage to freeze many enemies
            </span>
          ) : null}
          {RNGSensitiveCards.map(cardId => (
            <span key={cardId} className={css(styles.infoInner)}>
              {RNG_SENSITIVE_CARDS[cardId].UNFRIENDLY()}
            </span>
          ))}
        </span>
      </Radio>
      <Radio
        id='RNG-REGULAR'
        name='RNG'
        value='REGULAR'
        onChange={event => props.setRNG(event.target.value)}
        checked={props.RNG === 'REGULAR'}
        data-testid='RNG-input'
        required
      >
        Regular{' '}
        <span className={css(styles.info)}>
          <>
            {harvestersInDeck ? (
              <span className={css(styles.infoInner)}>
                <CardLink id='N38' /> sometimes create an average copy
              </span>
            ) : null}
            {rogueSheepInDeck ? (
              <span className={css(styles.infoInner)}>
                <CardLink id='N77' /> create average card copies
              </span>
            ) : null}
            {freezeCard ? (
              <span className={css(styles.infoInner)}>
                Freeze cards manage to freeze a few enemies
              </span>
            ) : null}
            {RNGSensitiveCards.map(cardId => (
              <span key={cardId} className={css(styles.infoInner)}>
                {parseInt(FRIENDLY_CHANCES[cardId] * 100)}% chance per turn that{' '}
                {RNG_SENSITIVE_CARDS[cardId].FRIENDLY()}
              </span>
            ))}
          </>
        </span>
      </Radio>
    </fieldset>
  )
})
