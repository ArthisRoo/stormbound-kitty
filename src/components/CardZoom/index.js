import React from 'react'
import { useFela } from 'react-fela'
import Card from '../Card'
import getResolvedCardData from '../../helpers/getResolvedCardData'
import styles from './styles'

export default React.memo(function CardZoom(props) {
  const { css } = useFela()
  const { close } = props
  const handleESC = React.useCallback(
    event => event.which === 27 && close(),
    [close]
  )

  React.useEffect(() => {
    document.addEventListener('keydown', handleESC)
    if (props.cardId) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = ''
    }

    return () => {
      document.removeEventListener('keydown', handleESC)
      document.documentElement.style.overflowY = ''
    }
  }, [handleESC, props.cardId])

  return props.cardId ? (
    <div
      className={css(styles.overlay)}
      onClick={props.close}
      data-testid='zoom'
    >
      <div className={css(styles.wrapper)}>
        <Card
          {...getResolvedCardData({
            id: props.cardId,
            level: props.level || 1,
          })}
          {...props}
        />
      </div>
    </div>
  ) : null
})
