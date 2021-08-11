const fix = {
  marginBottom: '1em',

  medium: {
    position: 'absolute',
    right: '2em',
    top: '1em',
    zIndex: 2,
  },
}

const odd = {
  fontSize: '170%',

  "[data-position='edge']": { color: '#ac6d4f' },
  "[data-position='middle']": { color: '#473062', opacity: 0.8 },
}

export default { fix, odd }