const row = ({ isDesktop, isWide }) => ({
  display: 'flex',
  marginLeft: isWide ? '-1.25em' : '-0.5em',
  marginRight: isWide ? '-1.25em' : '-0.5em',
  marginBottom: '1em',

  /**
   * 1. If the row is “desktop only”, it should be treated as a column on mobile.
   */
  small: isDesktop
    ? {
        flexDirection: 'column' /* 1 */,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,

        ':empty': { marginBottom: 0 },
      }
    : undefined,
})

const column = ({ isDesktop, isWide }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: isWide ? '1.25em' : '0.5em',
  paddingRight: isWide ? '1.25em' : '0.5em',
  transition: '250ms',
  flex: '1 0 calc(100% / var(--columns) * var(--spread, 1))',

  small: isDesktop
    ? {
        flex: '1 1 100%',
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: '1em',
      }
    : undefined,
})

export default { row, column }