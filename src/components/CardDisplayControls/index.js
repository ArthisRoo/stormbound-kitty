import React from 'react'
import { useFela } from 'react-fela'
import { CollectionContext } from '~/components/CollectionProvider'
import CardProgress from '~/components/CardProgress'
import CTA from '~/components/CTA'
import Only from '~/components/Only'
import getResolvedCardData from '~/helpers/getResolvedCardData'
import sortCards from '~/helpers/sortCards'
import styles from './styles'

const sortCollection = (a, b) =>
  sortCards()(getResolvedCardData(a), getResolvedCardData(b))

export default React.memo(function CardDisplayControls(props) {
  const { css } = useFela()
  const { cardId } = props
  const { collection } = React.useContext(CollectionContext)
  const orderedCollection = React.useMemo(
    () => collection.sort(sortCollection),
    [collection]
  )

  const indexInCollection = orderedCollection.findIndex(
    card => card.id === cardId
  )
  const cardInCollection = orderedCollection[indexInCollection]
  const nextCard = cardInCollection && orderedCollection[indexInCollection + 1]
  const previousCard =
    cardInCollection && orderedCollection[indexInCollection - 1]

  return (
    <Only.Desktop>
      <div className={css(styles.container)}>
        <div>
          <CTA
            disabled={!previousCard}
            to={previousCard ? `/card/${previousCard.id}/display` : undefined}
            scroll={false}
            data-testid='prev-btn'
          >
            Previous card
          </CTA>
        </div>
        {cardInCollection && (
          <Only.CustomCollection>
            <CardProgress card={cardInCollection} />
          </Only.CustomCollection>
        )}

        <div>
          <CTA
            disabled={!nextCard}
            to={nextCard ? `/card/${nextCard.id}/display` : undefined}
            scroll={false}
            data-testid='next-btn'
          >
            Next card
          </CTA>
        </div>
      </div>
    </Only.Desktop>
  )
})
